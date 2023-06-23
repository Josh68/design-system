const path = require('path');
const express = require('express');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      // aliasing @styles a shortcut to core styles directory
      // aliasing fonts & images to catch relative paths defined in core styles
      alias: {
        '@styles': path.resolve(__dirname, '../design-system/src/styles'),
        '../fonts': path.resolve(__dirname, 'static/fonts'),
        '../images': path.resolve(__dirname, 'static/images'),
      },
    },
  });
};

exports.onCreateDevServer = ({ app }) => {
  app.use(express.static('static'));
};

// Added to fill in the `slug` field we came to rely heavily on
// See https://paulie.dev/posts/2022/09/mdx-2-breaking-changes-and-gatsby-plugin-mdx-v4-slug/
exports.onCreateNode = ({ node, getNode, actions: { createNodeField } }) => {
  if (node.internal.type === 'Mdx') {
    createNodeField({
      node,
      name: 'slug',
      value: createFilePath({ node, getNode }),
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const infoPageTemplate = path.resolve(`src/components/page-templates/InfoPage.tsx`);
  const blogPageTemplate = path.resolve(`src/components/page-templates/BlogPage.tsx`);

  // get all pages
  return graphql(`
    query loadPagesQuery {
      allMdx {
        edges {
          node {
            id
            body
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    // Create blog post pages.
    result.data.allMdx.edges.forEach((edge) => {
      createPage({
        // Path for this page -- the slug with positioning markers removed
        path: edge.node.fields.slug.replace(/\d+_/g, '') + '/',
        component: edge.node.fields.slug.startsWith('blog') ? blogPageTemplate : infoPageTemplate,
        // props passed to template
        context: {
          id: edge.node.id,
        },
      });
    });
  });
};

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: '@babel/plugin-transform-react-jsx',
    options: {
      runtime: 'automatic',
    },
  });
};
