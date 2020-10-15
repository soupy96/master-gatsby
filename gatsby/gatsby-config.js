import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: `Slicks Slices`,
    siteUrl: 'https://gatsby.pizza',
    description: 'The best pizza place in Hamilton',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      //   this is the name of the plugin that you are adding
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'w7btaliy',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
