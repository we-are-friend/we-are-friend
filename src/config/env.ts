import getConfig from 'next/config';

const { publicRuntimeConfig /* , serverRuntimeConfig */ } = getConfig();

export const contentfulConfig = {
  accessKey: publicRuntimeConfig?.CONTENTFUL_ACCESS_KEY,
  space: publicRuntimeConfig?.CONTENTFUL_SPACE,
  cmsKey: publicRuntimeConfig?.CONTENTFUL_CONTENT_MANAGEMENT_KEY,
};

// export const jwtConfig = {
// publicKey: serverRuntimeConfig?.PUBLIC_KEY?.replace(/\\n/g, '\n'),
//   secret: serverRuntimeConfig?.JWT_SECRET,
// };
