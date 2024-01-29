import React from 'react';
import { withPrefix } from 'gatsby';
import { makeStorybookUrl } from '../../helpers/urlUtils';

// Create a link component that uses urlUtils to create the link
// to the storybook page for the component

interface StorybookExampleFooterProps {
  /**
   * ID of the component's doc page in Storybook.
   */
  storyId: string;
  /**
   * Do you want to visit React documentation or Web Component documentation?
   */
  tech?: 'react' | 'wc';
  /**
   * Current theme name.
   */
  theme: string;
}

const SeeStorybookForGuidance = ({
  theme,
  storyId,
  tech = 'react',
}: StorybookExampleFooterProps) => {
  return (
    <p>
      <a href={makeStorybookUrl(storyId, theme, 'docs')} className="ds-u-display--flex">
        <img
          alt=""
          src={withPrefix('/images/storybook-icon.png')}
          className="ds-u-display--inline ds-u-margin-right--1"
          style={{ height: '1.25em' }}
        />{' '}
        {tech === 'react' ? 'Preact/React' : 'Web component'} documentation for Storybook
      </a>
    </p>
  );
};

export default SeeStorybookForGuidance;
