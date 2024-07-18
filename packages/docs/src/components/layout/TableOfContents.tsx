import { Link } from 'gatsby';
import { TableOfContentsItem } from '../../helpers/graphQLTypes';

function cleanTitle(title: string) {
  return title.replace(/<[^>]*>/g, '');
}

export interface TableOfContentsProps {
  /**
   * table of contents data from graphql
   */
  items: TableOfContentsItem[];
  /**
   * additional className string to append to the list
   */
  className?: string;
  /**
   * page title
   */
  title?: string;
  /**
   * page slug
   */
  slug?: string;
}

export type TableOfContentsFeedbackProps = Pick<TableOfContentsProps, 'slug'>;

export const TableOfContentsList = ({ items, className = '' }: TableOfContentsProps) => {
  return (
    <ul role="list" className={`c-table-of-contents__list ds-u-padding-left--0 ${className}`}>
      {items.map((item) => (
        <li
          key={item.title}
          className={'c-table-of-contents__list-item c-table-of-contents__list-item--no-marker'}
        >
          <Link to={item.url}>{cleanTitle(item.title)}</Link>
        </li>
      ))}
    </ul>
  );
};

/*
 * Feedback section
 */
export const TableOfContentsFeedback = ({ slug }: TableOfContentsFeedbackProps) => (
  <>
    <h2 className="c-table-of-contents__heading ds-u-margin-top--0 ds-u-margin-bottom--1 ds-u-md-margin-top--6 ds-u-font-size--base">
      Have ideas?{' '}
    </h2>
    <ul role="list" className="ds-u-md-margin-bottom--2">
      <li>
        <Link to="/contact">Ask a question</Link>
      </li>
      <li>
        <a href="https://github.com/CMSgov/design-system/blob/main/CONTRIBUTING.md">
          Start a contribution on GitHub
        </a>
      </li>
      <li>
        <a href="https://github.com/CMSgov/design-system/discussions">
          Start a discussion on GitHub
        </a>
      </li>
      <li>
        <Link to="/contact">Contact the team</Link>
      </li>
      {typeof slug !== 'undefined' ? (
        <li>
          <a
            href={`https://github.com/CMSgov/design-system/edit/main/packages/docs/content/${slug}.mdx`}
          >
            Edit this page
          </a>
        </li>
      ) : null}
    </ul>
  </>
);

/**
 * The Desktop version of the table of contents
 */
const TableOfContents = ({ items, slug }: TableOfContentsProps) => {
  return items.length ? (
    <div className="c-table-of-contents">
      <h2 className="c-table-of-contents__heading ds-u-margin-top--0 ds-u-margin-bottom--1 ds-u-font-size--base">
        On this page{' '}
      </h2>
      <TableOfContentsList items={items} />
      <TableOfContentsFeedback slug={slug} />
    </div>
  ) : null;
};

export default TableOfContents;
