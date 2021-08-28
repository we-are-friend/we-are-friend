import React, { useEffect } from 'react';
import type { FC } from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles } from '@material-ui/core';
import type { Theme } from 'src/theme';
import { signIn, signOut, useSession } from 'next-auth/client';
import axios from '@/utils/axios';

interface SignInProps {
  className?: string;
}

const useStyles = makeStyles((_: Theme) =>
  createStyles({
    root: {},
  }),
);

const getAllTask = async () => {
  try {
    const response = await axios.get('http://localhost:3001/tasks', {
      // headers: {
      //   Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImtpdHJhdmVlIiwiaWF0IjoxNjI4NDQ4MDQ4LCJleHAiOjE2Mjg1MjAwNDh9.XK3VANr1950e7rixXN4ks2w0TtK0x1xXzXLTIzi-L5c`,
      // },
    });
    // eslint-disable-next-line no-console
    console.log(response.data);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  }
};

const SignIn: FC<SignInProps> = ({ className }) => {
  const classes = useStyles();
  const [session] = useSession();

  const loginWithEmailPassword = async (username: string, password: string) => {
    await signIn('email-password-credentials', {
      username,
      password,
      redirect: false,
    });
  };

  useEffect(() => {
    if (session?.accessToken) {
      axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${session?.accessToken}`;
    }
    if (session?.error === 'RefreshAccessTokenError') {
      signIn();
    }
  }, [JSON.stringify(session?.accessToken)]);

  return (
    <div className={clsx(classes.root, className)}>
      {!session && (
        <>
          no permission{' '}
          <button
            onClick={() => loginWithEmailPassword('kitravee', '1234@dasldS12')}
          >
            login
          </button>
        </>
      )}
      {session && (
        <>
          has permission <button onClick={() => signOut()}>logout</button>
        </>
      )}

      <button onClick={() => getAllTask()}>getalltask</button>

      {session && <>{JSON.stringify(session)}</>}
    </div>
  );
};

export default SignIn;
