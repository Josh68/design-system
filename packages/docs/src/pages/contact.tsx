import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout/Layout';
import { MdxQuery } from '../helpers/graphQLTypes';
import useTheme from '../helpers/useTheme';
import ContentRenderer from '../components/content/ContentRenderer';

export { Head } from '../components/layout/Head';

const ContactPage = ({ data, location }: MdxQuery) => {
  const theme = useTheme();
  return (
    <Layout
      frontmatter={data.mdx.frontmatter}
      location={location}
      slug={data.mdx.fields.slug}
      theme={theme}
      tableOfContentsData={data.mdx.tableOfContents?.items}
    >
      <ContentRenderer data={data.mdx.body} theme={theme} />
    </Layout>
  );
};
export const query = graphql`
  query PageFeedbackQuery {
    mdx(frontmatter: { title: { eq: "Contact us" } }) {
      id
      body
      tableOfContents(maxDepth: 3)
      frontmatter {
        title
        intro
      }
      fields {
        slug
      }
    }
  }
`;

export default ContactPage;
