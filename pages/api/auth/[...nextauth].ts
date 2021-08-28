import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import NextAuth, { CallbacksOptions, NextAuthOptions } from 'next-auth';
import Providers from 'next-auth/providers';
import jsonwebtoken from 'jsonwebtoken';
import axios from '@/utils/axios';

const providers = [
  Providers.Credentials({
    id: 'email-password-credentials',
    name: 'Email Password',
    authorize: async (credentials: { username: string; password: string }) => {
      try {
        const response = await axios.post(`http://localhost:3001/auth/signin`, {
          username: credentials.username,
          password: credentials.password,
        });
        return {
          accessToken: response.data?.accessToken,
          refreshToken: response.data?.refreshToken,
        };
      } catch (err) {
        throw new Error(err);
      }
    },
  }),
];

const callbacks: CallbacksOptions = {
  async signIn(user) {
    if (user) {
      return true;
    } else {
      return '/unauthorized';
    }
  },
  //  https://www.youtube.com/watch?v=dXM-ahRNNhc&ab_channel=PragmaticReviews
  async jwt(token: any, user: any) {
    if (user) {
      return {
        ...token,
        accessToken: user?.accessToken,
        accessTokenExpires: user?.exp * 1000,
        refreshToken: user?.refreshToken,
        isAuthenticated: true,
      };
    }

    if (Date.now() < token?.accessTokenExpires) {
      return token;
    }

    return refreshAccessToken(token);
  },

  async session(session: any, token: any) {
    if (token) {
      session.user = tokenValid(token?.accessToken) as any;
      session.accessToken = token.accessToken;
      session.error = token.error;
    }
    return session;
  },
};

const tokenValid = (accessToken: string | null) => {
  if (!accessToken) return null;

  try {
    return jsonwebtoken.decode(accessToken);
  } catch (err) {
    return null;
  }
};

const refreshAccessToken = async (token: any) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token?.accessToken}`;

  try {
    const response = await axios.post(
      'http://localhost:3001/auth/refreshtoken',
      {
        refreshToken: token.refreshToken,
      },
    );
    const ReturnToken = response.data;
    const decodeAccessToken: { username: string; iat: number; exp: number } =
      tokenValid(ReturnToken?.accessToken) as any;

    return {
      ...token,
      accessToken: ReturnToken.accessToken,
      accessTokenExpires: decodeAccessToken.exp * 1000,
      refreshToken: ReturnToken.refreshToken ?? token.refreshToken, // Fall back to old refresh token
    };
  } catch (error) {
    return {
      ...token,
      error: 'RefreshAccessTokenError',
    };
  }
};

const options: NextAuthOptions = {
  providers,
  callbacks,
  pages: {
    signOut: '/auth/signin',
    signIn: '/auth/signin',
    error: '/auth/signin',
  },
};

export default (
  req: NextApiRequest,
  res: NextApiResponse,
): ReturnType<NextApiHandler> => NextAuth(req, res, options);
