import type * as React from 'react';
import { t } from '../i18n';
import { SvgIcon, IconCommonProps } from './SvgIcon';

const defaultProps = {
  className: '',
  viewBox: '0 0 32 32',
};

export function RssIcon(props: IconCommonProps): React.ReactElement {
  const iconCssClasses = `ds-c-icon--rss ${props.className || ''}`;

  return (
    <SvgIcon title={t('icons.rss')} {...defaultProps} {...props} className={iconCssClasses}>
      <path d="M4.57143 0C2.05 0 0 2.05 0 4.57143V27.4286C0 29.95 2.05 32 4.57143 32H27.4286C29.95 32 32 29.95 32 27.4286V4.57143C32 2.05 29.95 0 27.4286 0H4.57143ZM6.85714 7.42857C6.85714 6.47857 7.62143 5.71429 8.57143 5.71429C18.3571 5.71429 26.2857 13.6429 26.2857 23.4286C26.2857 24.3786 25.5214 25.1429 24.5714 25.1429C23.6214 25.1429 22.8571 24.3786 22.8571 23.4286C22.8571 15.5357 16.4643 9.14286 8.57143 9.14286C7.62143 9.14286 6.85714 8.37857 6.85714 7.42857ZM6.85714 14.2857C6.85714 13.3357 7.62143 12.5714 8.57143 12.5714C14.5643 12.5714 19.4286 17.4357 19.4286 23.4286C19.4286 24.3786 18.6643 25.1429 17.7143 25.1429C16.7643 25.1429 16 24.3786 16 23.4286C16 19.3286 12.6714 16 8.57143 16C7.62143 16 6.85714 15.2357 6.85714 14.2857ZM6.85714 22.8571C6.85714 22.2509 7.09796 21.6696 7.52661 21.2409C7.95527 20.8122 8.53665 20.5714 9.14286 20.5714C9.74907 20.5714 10.3304 20.8122 10.7591 21.2409C11.1878 21.6696 11.4286 22.2509 11.4286 22.8571C11.4286 23.4634 11.1878 24.0447 10.7591 24.4734C10.3304 24.902 9.74907 25.1429 9.14286 25.1429C8.53665 25.1429 7.95527 24.902 7.52661 24.4734C7.09796 24.0447 6.85714 23.4634 6.85714 22.8571Z" />
    </SvgIcon>
  );
}
