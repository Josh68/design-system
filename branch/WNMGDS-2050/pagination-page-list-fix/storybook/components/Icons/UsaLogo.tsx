import React from 'react';
import { t } from '../i18n';
import { SvgIcon, IconCommonProps } from './SvgIcon';

const defaultProps = {
  className: '',
  viewBox: '0 0 291 89',
};

export function UsaLogo(props: IconCommonProps): React.ReactElement {
  const iconCssClasses = `ds-c-icon--usa-logo ${props.className || ''}`;

  return (
    <SvgIcon title={t('icons.usaLogo')} {...defaultProps} {...props} className={iconCssClasses}>
      <path d="M200.125 64.173c-2.305 4.42-5.158 6.965-9.647 6.965-6.614 0-11.172-6.421-11.172-15.687 0-9.51 4.558-15.87 11.351-15.87 6.012 0 8.075 4.483 9.596 7.631v-6.905h4.973v30.16c0 7.874-4.793 12.355-13.109 12.355-6.857 0-11.533-3.147-11.533-7.69 0-.728-.023-1.687.338-2.727l4.388 1.992c-.41 3.115 3.231 4.247 6.808 4.247 4.976 0 8.01-2.362 8.01-6.361v-8.11m-15.418-9.571c0 5.33.729 8.176 2.731 10.236 1.211 1.272 2.851 1.939 4.915 1.939 4.919 0 7.829-3.999 7.829-10.662 0-7.691-3.219-12.475-8.314-12.475-4.554 0-7.161 3.997-7.161 10.962m51.971.364c0 9.872-5.584 16.172-14.143 16.172-8.135 0-13.777-6.542-13.777-15.991 0-9.145 5.707-15.627 13.838-15.627 8.255 0 14.082 6.36 14.082 15.446m-22.578.485c0 7.206 3.216 11.326 8.923 11.326 5.157 0 8.314-4.301 8.314-11.45 0-8.175-3.828-11.505-8.802-11.505-5.219 0-8.435 4.058-8.435 11.629m21.798-15.144h4.963l7.467 22.836 7.288-22.836h4.895L251.09 70.23h-5.45zM83.059 7.936l8.439-.278-9.311 5.413-1.354 8.141-4.311-4.845-9.222 5.291 6.649-8.313-4.345-4.964 8.414-.277L84.455 0z" />
      <path d="M66.798 10.82C33.275 15.171 8.456 26.513 0 36.196c8.803-8.185 37.118-17.68 69.103-22.648" />
      <path d="M80.744 25.865c-.866 0-1.882.069-2.676.552-1.954 1.235-1.809 5.289-1.809 7.213v17.862c0 5.429-.29 11.612-4.633 15.667-3.835 3.573-8.833 4.536-14.046 4.536-3.328 0-6.081-.345-9.266-1.446-8.468-2.956-11.075-8.038-11.075-16.283V25.865h-5.647v-1.374h22.224v1.374H48.17v26.659c0 3.984-.362 8.519 2.245 11.954 2.533 3.365 5.789 4.467 10.062 4.467 4.778 0 9.916-1.856 12.233-6.047 1.957-3.573 1.812-7.836 1.812-11.749V33.012c0-4.192-.148-7.215-5.284-7.215h-1.377v-1.306h13.392v1.374h-.509m58.922 44.365v-1.308h5.414l-4.851-13.191H127.29l-2.814 7.627c-.422 1.101-.702 2.337-.702 3.506 0 2.334 3.516 2.058 5.131 2.058v1.308h-13.5v-1.308h1.619c3.374 0 4.639-2.336 5.695-5.153l14.838-40.535h.982l17.791 45.688h4.502v1.308h-21.166zm-5.838-32.363l-5.976 16.421h11.886l-5.91-16.421zm35.861 33.181c-2.797 0-5.126-2.373-5.126-5.228 0-2.852 2.329-5.227 5.126-5.227s5.054 2.375 5.054 5.227c0 2.855-2.257 5.228-5.054 5.228m-69.354.278c-4.156 0-7.384-1.168-11.255-2.542-.36-.136-.79-.274-1.147-.41-.788-.343-2.151-1.237-3.012-1.237-1.79 0-1.434 1.717-2.151 2.541l-.069.552H81.48l-.359-17.316h1.36c1.15 4.535 2.583 8.04 5.881 11.474 3.226 3.365 7.027 5.562 11.904 5.562 5.377 0 10.179-3.431 10.179-8.86 0-6.183-5.235-7.625-10.467-8.861l-4.163-.963c-3.724-.826-7.378-1.512-10.318-3.984-1.148-.963-1.94-1.994-2.655-3.301-1.219-2.194-1.721-4.602-1.721-7.074 0-8.452 7.096-13.673 15.487-13.673 3.869 0 7.097 1.166 10.615 2.679 1.001.413 2.219 1.1 3.368 1.1 1.648 0 1.72-1.441 1.792-2.68h1.363v14.769h-1.435c-1.434-7.415-6.527-14.494-15.131-14.494-4.874 0-9.964 2.817-9.964 7.97 0 5.429 5.735 6.665 10.252 7.557 2.438.482 4.876.824 7.241 1.374 7.887 1.785 12.19 6.527 12.19 14.36 0 9.137-7.17 15.457-16.564 15.457M91.7 82.778c-.483.592-.689.815-1.155 1.135-1.047.753-2.405 1.184-3.747 1.184-3.643 0-6.014-2.271-6.014-5.76 0-3.982 2.337-6.464 6.152-6.464 1.908 0 3.439.962 4.281 2.062l-1.001 1.283c-.79-1.168-1.973-1.904-3.365-1.904-2.665 0-4.263 1.84-4.263 4.927 0 2.799 1.58 4.449 4.247 4.449 1.769 0 2.631-.834 3.162-1.408v-1.871h-4.833v-1.424H91.7v3.791m10.48-1.951c0 2.606-1.58 4.27-4.002 4.27-2.304 0-3.902-1.726-3.902-4.22 0-2.42 1.615-4.132 3.919-4.132 2.336 0 3.985 1.681 3.985 4.082m-6.393.129c0 1.901.909 2.993 2.525 2.993 1.466 0 2.357-1.139 2.357-3.026 0-2.161-1.082-3.039-2.491-3.039-1.482 0-2.391 1.071-2.391 3.072m7.894-3.763h1.388l2.101 6.032 2.044-6.032h1.375l-2.645 7.904h-1.532zm15.788 5.635c-.324.671-.511.927-.891 1.281-.721.655-1.632.988-2.661.988-2.255 0-3.769-1.692-3.769-4.174 0-2.466 1.569-4.178 3.835-4.178 2.082 0 3.611 1.599 3.611 3.763 0 .238-.017.511-.037.846h-5.909c.134 2.672 2.074 2.672 2.389 2.672 1.63 0 2.095-1.248 2.284-1.728l1.148.53zm-1.372-2.545c-.138-2.449-1.96-2.449-2.18-2.449-1.345 0-2.151.879-2.239 2.449h4.419zm5.376-1.556c.432-.735 1.018-1.725 2.257-1.725.168 0 .374.014.599.03v1.394a5.226 5.226 0 0 0-.737-.066c-1.259 0-2.135.847-2.135 2.049v4.688h-1.426v-7.904h1.442v1.534m11.949 6.37h-1.441V80.01c0-1.187-.658-1.873-1.759-1.873-1.25 0-2.147.815-2.147 1.968v4.992h-1.441v-7.904h1.441v1.409c.792-1.074 1.719-1.616 2.768-1.616 1.531 0 2.579 1.055 2.579 2.622v5.489m14.302 0h-1.426v-5.103c0-1.171-.632-1.872-1.668-1.872-1.27 0-1.924.782-1.924 2.305v4.67h-1.444v-4.786c0-1.52-.516-2.205-1.669-2.205-1.132 0-1.922.866-1.922 2.077v4.914h-1.427v-7.904h1.427v1.458c.684-1.155 1.445-1.665 2.49-1.665 1.223 0 1.907.607 2.374 1.727.479-.688 1.185-1.727 2.646-1.727 1.478 0 2.543 1.102 2.543 2.575v5.536m9.748-2.269c-.329.671-.516.927-.893 1.281-.725.655-1.636.988-2.662.988-2.257 0-3.769-1.692-3.769-4.174 0-2.466 1.563-4.178 3.834-4.178 2.081 0 3.609 1.599 3.609 3.763 0 .238-.015.511-.036.846h-5.91c.137 2.672 2.078 2.672 2.389 2.672 1.63 0 2.097-1.248 2.285-1.728l1.153.53zm-1.376-2.545c-.14-2.449-1.96-2.449-2.179-2.449-1.346 0-2.154.879-2.241 2.449h4.42zm10.725 4.814h-1.441V80.01c0-1.187-.653-1.873-1.753-1.873-1.256 0-2.151.815-2.151 1.968v4.992h-1.442v-7.904h1.442v1.409c.793-1.074 1.723-1.616 2.767-1.616 1.531 0 2.578 1.055 2.578 2.622v5.489m4.766-11.166v3.026h1.805v1.118h-1.805v4.782c0 .833.172 1.092.755 1.092.207 0 .429-.033.947-.146v1.121c-.636.127-1 .173-1.309.173-1.321 0-1.836-.398-1.836-1.437v-5.585h-1.532v-1.118h1.532v-2.066l1.443-.96m44.63-.37h2.629v11.536h-1.529V74.84l-3.354 10.257h-1.666l-3.369-10.257v10.257h-1.527V73.561h2.646l3.09 9.393zm5.345 4.977c.31-.704.839-1.808 3.488-1.808 3.128 0 3.128 1.552 3.128 2.336l-.022 3.872c0 .978.054 1.056.673 1.073v.913c-.445.127-.673.173-.91.173-1.112 0-1.2-.863-1.2-1.55-.499.575-1.374 1.55-2.858 1.55-1.489 0-2.626-1.103-2.626-2.577 0-.622.294-1.28.774-1.74.602-.578 1.438-.882 2.814-1.01 1.223-.127 1.379-.173 1.913-.687-.018-.96-.36-1.199-1.615-1.199-1.307 0-1.979.351-2.377 1.247l-1.182-.593zm5.174 1.553c-.604.431-.771.496-1.756.655-.979.159-1.423.353-1.806.769-.272.287-.431.638-.431 1.024 0 .866.656 1.472 1.601 1.472.586 0 1.187-.24 1.631-.64.571-.514.761-1.008.761-2v-1.28zm9.78-6.757h1.444v11.54h-1.423v-1.841c-.535.879-.998 2.064-2.726 2.064-1.954 0-3.191-1.632-3.191-4.178 0-2.449 1.291-4.128 3.182-4.128 1.665 0 2.267 1.138 2.714 2.05v-5.507m-4.395 7.779c0 1.792.756 2.847 2.04 2.847.549 0 1.135-.221 1.529-.607.589-.512.826-1.264.826-2.448 0-3.009-2.181-3.009-2.339-3.009-1.36.049-2.056 1.15-2.056 3.217m15.587 1.715c-.327.671-.515.927-.893 1.281-.722.655-1.632.988-2.664.988-2.258 0-3.768-1.692-3.768-4.174 0-2.466 1.568-4.178 3.833-4.178 2.084 0 3.613 1.599 3.613 3.763 0 .238-.021.511-.036.846h-5.911c.141 2.672 2.078 2.672 2.39 2.672 1.633 0 2.093-1.248 2.282-1.728l1.154.53zm-1.375-2.545c-.141-2.449-1.96-2.449-2.182-2.449-1.343 0-2.15.879-2.234 2.449h4.416zm8.013-6.722h7.712l-.462 1.358h-5.573v3.538h5.108v1.377h-5.108v3.887h5.59l.496 1.376h-7.763zm9.741 5.041c.311-.703.841-1.81 3.491-1.81 3.127 0 3.127 1.555 3.127 2.338l-.022 3.873c0 .975.057 1.055.677 1.071v.912c-.446.128-.677.176-.915.176-1.118 0-1.201-.865-1.201-1.552-.5.576-1.375 1.552-2.852 1.552-1.497 0-2.632-1.104-2.632-2.577 0-.622.294-1.282.774-1.741.6-.579 1.44-.881 2.819-1.009 1.22-.129 1.377-.176 1.903-.688-.014-.961-.357-1.2-1.611-1.2-1.31 0-1.977.352-2.37 1.248l-1.188-.593zm5.17 1.553c-.6.432-.771.495-1.75.654-.98.16-1.428.354-1.805.77-.277.288-.427.64-.427 1.024 0 .866.65 1.471 1.598 1.471a2.48 2.48 0 0 0 1.63-.64c.57-.511.754-1.009.754-1.999v-1.28zm5.09 2.126c.136 1.198.945 1.791 2.438 1.791 1.168 0 2.046-.513 2.046-1.185 0-.687-.635-1.07-2.213-1.325-1.654-.29-3.167-.8-3.167-2.466 0-1.374 1.346-2.321 3.303-2.321 2.453 0 3.194 1.6 3.265 2.129l-1.016.638c-.29-1.133-1.031-1.662-2.288-1.662-1.077 0-1.94.481-1.94 1.088 0 .64.655 1.008 2.201 1.248.38.065 3.25.34 3.282 2.464 0 .065 0 2.482-3.64 2.482-1.018 0-1.844-.24-2.462-.707-.497-.365-.705-.702-.964-1.534l1.155-.64m7.515-5.114h1.357l2.221 6.173 1.976-6.173h1.378l-2.739 8.205-.135.45c-.435 1.344-.738 2.306-2.684 2.306-.238 0-.515-.02-.977-.067v-1.12c.497.079.705.096.943.096.914 0 1.141-.24 1.636-1.776l-2.976-8.094" />
    </SvgIcon>
  );
}
