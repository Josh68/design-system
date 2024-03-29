import type * as React from 'react';
import { SvgIcon } from '@cmsgov/design-system';
import { IconCommonProps } from '@cmsgov/design-system';

const defaultProps = {
  className: '',
  title: 'Drugs',
  viewBox: '0 0 40 32',
};

function DrugsIcon(props: IconCommonProps): React.ReactElement {
  const iconCssClasses = `ds-c-icon--drugs ${props.className || ''}`;

  return (
    <SvgIcon {...defaultProps} {...props} className={iconCssClasses}>
      <g transform="translate(-2.090042, -0.955121)">
        <path d="M42.0900178,23.3073393 C41.7639042,27.1440385 38.4535835,30.1590739 34.4180081,30.1590739 C30.3824328,30.1590739 27.072112,27.1440385 26.7459984,23.3073393 Z M34.4180081,15.2093066 C38.4533751,15.2093066 41.7635623,18.2240306 42.0899672,22.0604469 L26.746049,22.0604469 C27.0724539,18.2240306 30.3826411,15.2093066 34.4180081,15.2093066 Z" />
        <path
          d="M24.1535009,24.5529112 C24.1535009,25.0880565 24.0839999,25.6074403 23.9532841,26.103017 L23.9183853,26.2249566 C23.0739297,29.5600519 20.0527112,32.0277948 16.4551205,32.0277948 C12.2034225,32.0277948 8.75674016,28.5811125 8.75674016,24.3294144 L8.75674016,8.58082666 C8.75674016,4.32912858 12.2034225,0.882446283 16.4551205,0.882446283 C20.7068186,0.882446283 24.1535009,4.32912858 24.1535009,8.58082666 L24.1535009,24.5529112 Z M16.4551205,2.12826022 C12.9890623,2.12826022 10.1650004,4.87697307 10.0438531,8.31348038 L10.0398036,8.54357721 L10.0398036,24.3666639 C10.0398036,27.9097456 12.9120388,30.7819809 16.4551205,30.7819809 C16.6708546,30.7819809 16.8841014,30.7713322 17.0943642,30.7505318 C13.8533512,30.4371922 11.322867,27.7819856 11.322867,24.5529112 L11.322867,16.4551205 L22.8697402,16.4544463 L22.8704375,8.54357721 C22.8704375,5.00049547 19.9982023,2.12826022 16.4551205,2.12826022 Z"
          transform="translate(16.455121, 16.455121) rotate(45.000000) translate(-16.455121, -16.455121) "
        />
      </g>
    </SvgIcon>
  );
}

export default DrugsIcon;
