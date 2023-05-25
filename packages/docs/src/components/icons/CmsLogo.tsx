import React from 'react';

/**
 * SVG for CMS Logo
 */
const CmsLogo = () => {
  // "#323a45" was what Brent originally sent
  const fill = 'var(--color-base)';

  return (
    <div className="c-cms-logo-icon">
      <svg aria-hidden="true" viewBox="-2 0 88 30" width="100">
        <path
          d="M10.472 27.532c-4.186-1.961-6.55-4.52-6.416-7.499C4.435 11.69 24.288 3.125 48.254.973 55.465.327 62.247.332 68.199.882 61.36-.108 53.109-.304 44.2.496 20.238 2.649.385 11.21.005 19.556-.18 23.651 4.361 26.953 11.868 29Z"
          fill={fill}
        />
        <path
          d="M8.482 24.888c-1.249-1.247-1.847-2.604-1.782-4.044.35-7.586 18.679-15.361 40.86-17.331 3.395-.302 6.763-.455 10.013-.455 6.063 0 11.744.54 16.431 1.56l.077-.314C69.106 3.026 62.88 2.35 56.078 2.35c-3.221 0-6.56.152-9.926.45-22.069 1.96-40.308 9.777-40.66 17.426-.095 2.097 1.116 3.994 3.598 5.638Z"
          fill={fill}
        />
        <path
          d="M27.806 25.639c-6.273 0-11.313-2.874-11.313-7.163 0-4.31 5.04-7.143 11.313-7.143 2.987 0 5.726.75 7.726 1.936l-2.493 1.75c-1.096-.666-2.767-1.416-4.794-1.416-2.904 0-4.766 1.457-4.766 4.873 0 3.373 1.862 4.83 4.766 4.83 2.027 0 3.698-.707 4.794-1.373l2.493 1.748c-2 1.208-4.74 1.958-7.726 1.958M41.51 16.81v8.392h-4.208V11.77h8.166l5.269 8.08 4.71-8.08h7.19V25.2h-6.521V16.81l-4.85 8.393h-4.237zM73.916 25.639c-4.74 0-7.726-1.583-8.876-2.645l2.548-1.624c1.26.979 3.945 2.124 6.328 2.124 2.109 0 3.15-.375 3.15-1.02 0-1.188-2.492-1.479-5.04-2.02-3.78-.813-6.603-1.812-6.603-4.373 0-3.165 3.863-4.727 8.739-4.727 3.534 0 5.917.687 7.945 2.103l-2.466 1.541c-1.452-1-4-1.541-5.397-1.541-2.246 0-3.123.48-3.123 1.104 0 .978 1.973 1.082 5.123 1.77 3.918.854 6.849 2.061 6.849 4.664 0 2.832-3.48 4.644-9.177 4.644"
          fill={fill}
        />
      </svg>
    </div>
  );
};

export default CmsLogo;
