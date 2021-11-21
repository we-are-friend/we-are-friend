require('dotenv').config();
const contentfulManagement = require('contentful-management');

module.exports = function () {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: process.env.CONTENTFUL_CONTENT_MANAGEMENT_KEY,
  });

  return contentfulClient
    .getSpace(process.env.CONTENTFUL_SPACE_ID)
    .then((space) => space.getEnvironment('master'));
};
