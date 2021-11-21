module.exports = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    // Will only be available on the server side
    // mySecret: 'secret',
    // secondSecret: process.env.SECOND_SECRET, // Pass through env variables
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    CONTENTFUL_SPACE: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_KEY: process.env.CONTENTFUL_ACCESS_KEY,
    CONTENTFUL_CONTENT_MANAGEMENT_KEY:
      process.env.CONTENTFUL_CONTENT_MANAGEMENT_KEY,
  },
};
