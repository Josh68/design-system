import React from 'react';
import { t } from '../i18n';
import { SvgIcon, IconCommonProps } from './SvgIcon';

const defaultProps = {
  className: '',
  viewBox: '0 0 252 252',
  ariaHidden: false,
};

export function HHSLogo(props: IconCommonProps): React.ReactElement {
  const iconCssClasses = `ds-c-icon--hhs-logo ${props.className || ''}`;

  return (
    <SvgIcon title={t('icons.hhsLogo')} {...defaultProps} {...props} className={iconCssClasses}>
      <g fillRule="evenodd">
        <path
          fillRule="nonzero"
          d="M234.016 48.515v.034l-.034.068-.068.102-.068.136-.102.204-.136.204-.17.272-.17.272-.205.34-.238.34-.272.374-.272.443-.306.408-.34.476-.34.476-.374.51-.408.544-.443.545-.442.544-.476.578-.51.578-.51.612-.544.613-.579.646-.612.612-.612.646-.646.647-.68.646-.68.646-.715.646-.748.613-.783.646c-5.952 4.863-74.044 46.664-77.377 49.317-3.367 2.619-9.49 9.66-14.489 30.407-4.047 16.734-6.666 10.475-20.033 9.965-7.823-.306-29.522-6.02-27.856 10.748 0 0 2.687-3.741 32.312.238 11.666 1.599 21.19-2.21 23.944-10.986 2.755-8.91 6.768-24.046 12.789-32.005 2.789-3.673 57.344-37.21 72.377-46.154 5.476-3.231 23.094-13.877 10.816-25.951zM62.868 174.63l.068-.034.068-.034.068-.068.136-.068.136-.102.204-.102.204-.068.238-.102.272-.136.306-.102.34-.102.34-.068.409-.102.442-.068.442-.069.51-.068.544-.034.579-.034h.578l.646.034.68.034.714.068.375.069.408.068.374.034.408.102.408.068.408.068.442.102.443.136.442.102.476.136.442.136.51.136.476.17.51.17.51.17.511.204.544.17.544.238c11.666 4.728 42.481 18.639 50.644 24.625 5 3.673 18.945 9.965 15.033 16.802-3.911 6.802-22.822 9.965-18.944 24.624 3.911 14.694 24.522 8.401 27.311 4.728 2.755-3.673-9.183 2.143-13.366-8.367-3.333-8.4 2.483-13.979 10.577-19.42 3.878-2.62 9.15-4.728 8.333-11.53-.544-4.728-8.877-8.402-17.244-13.095-8.367-4.728-40.644-19.931-53.467-25.713-12.788-5.748-26.699-3.674-25.032 6.292z"
        />
        <path
          fillRule="nonzero"
          d="M246.566 66.269l-.272.544-.306.544-.306.578-.306.613-.34.646-.17.306-.205.34-.204.34-.204.34-.238.34-.238.34-.238.375-.272.34-.306.374-.272.374-.34.34-.34.408-.375.375-.374.374-.408.374-.408.408-.476.374-.476.408-.51.408-.51.409-.579.374-.578.408c-12.176 8.163-59.215 37.345-70.065 43.841-6.122 3.64-11.02 10.51-12.516 13.605-1.667 3.435-4.15 11.972-5.272 26.631-.204 2.823-7.619 7.483-6.7 9.558.884 2.006 6.53 1.02 6.326 2.585-.204 1.36-1.87 3.435-1.87 4.761 0 1.565 3.332.136 2.516 1.837-1.394 2.789.816 3.401 1.633 5.51.85 2.075-.272 4.455.476 6.224 1.36 3.061 6.19 3.64 13.91 3.47 7.756-.137 11.259 5.203 9.558 9.965-2.21 6.292-7.38 6.19-15.407 11.598-8.061 5.374-8.401 12.21-3.708 18.026 3.572 4.422 17.006 6.564 25.441-2.007 1.735-1.938-3.809.68-11.87-3.537 0 0-5.238-3.775-2.449-8.843 2.755-5.102 7.245-7.313 12.21-10.204 4.932-2.925 11.429-4.523 11.123-10.781-.307-6.224-6.803-7.109-9.422-7.279-2.653-.136-6.734.102-10.373-.068-5.51-.272-7.177-2.89-7.517-13.4-.102-3.368-4.83-1.565-2.21-6.02 1.394-2.314-2.62-1.395-5.34-2.552-2.314-1.054 2.686-5.918 6.155-10.543 1.089-1.463-.612-3.333 0-10.238.579-6.02 3.368-13.877 11.428-19.387 3.946-2.687 21.156-13.4 26.156-16.257 7.006-4.048 40.916-25.986 46.732-30.373 10.986-8.299-.748-17.89.306-17.176zM121.912 232.723l-.034.34-.442-.068c-.51-.068-.918.068-1.156.34-.136.17-.272.579-.374 1.225l-.987 7.449c-.102.714-.068 1.19.068 1.36.204.306.545.442.987.51l.442.034-.034.34-4.966-.578c-1.837-.238-3.197-.612-4.081-1.088-.885-.51-1.565-1.259-2.041-2.245-.442-.986-.612-2.04-.442-3.265.204-1.599.918-2.857 2.075-3.81 1.326-1.054 3.163-1.462 5.544-1.19l5.441.646zm-3.57.442l-.137-.034-.136-.068-.136-.034-.136-.034-.102-.034-.136-.034-.136-.034-.102-.034h-.136l-.102-.034-.102-.034h-.102l-.136-.034h-.102l-.102-.034h-.103c-1.36-.17-2.584.136-3.639.953-1.02.816-1.666 2.006-1.87 3.605-.204 1.598.068 2.89.884 3.911.782 1.02 1.905 1.633 3.367 1.803.51.068 1.156.034 1.87-.034l1.293-9.796zm-15.952 7.79l1.122-4.456-2.619-.613c-.68-.136-1.156-.17-1.462-.034-.34.204-.647.613-.85 1.225l-.307-.068.986-3.912.34.068c-.067.579-.067.953-.033 1.123.068.204.204.408.408.578.204.17.578.306 1.054.408l2.653.578.952-3.673c.102-.544.17-.816.136-.952 0-.102-.068-.204-.17-.306-.102-.102-.306-.17-.646-.238l-2.007-.477c-.68-.136-1.19-.204-1.496-.204-.34.034-.68.136-1.02.34-.443.273-.953.68-1.497 1.293l-.408-.102 1.768-2.585 9.218 2.109-.068.306-.442-.102a1.462 1.462 0 0 0-.85.034c-.205.034-.375.102-.477.306-.102.136-.238.51-.374 1.02l-1.87 7.347c-.205.714-.205 1.19-.103 1.394.136.238.476.443.953.545l.408.102-.068.306-9.218-2.075.477-2.517.374.068c-.034.646 0 1.088.102 1.327.068.238.272.476.544.68.204.102.612.238 1.19.408l3.3.748zm-10.136-8.402l1.19-3.197c.239-.714.307-1.156.239-1.36-.137-.306-.443-.545-.85-.68l-.443-.137.102-.306 4.966 1.633-.136.272-.442-.136c-.477-.136-.885-.102-1.19.102-.17.136-.375.51-.613 1.122l-2.585 7.143c-.272.646-.34 1.122-.238 1.326.136.306.408.544.85.68l.442.137-.102.306-4.251-1.395c-1.054-.34-1.837-.714-2.347-1.088-.51-.408-.918-.919-1.156-1.53-.204-.613-.204-1.225.034-1.905a3.204 3.204 0 0 1 1.734-1.905c.817-.34 1.803-.34 2.925.034.306.102.579.238.919.34.306.17.612.34.952.544zm-.17.442l-.034-.034h-.068l-.034-.034-.068-.034-.034-.034h-.068l-.034-.034-.068-.034h-.034l-.034-.034-.068-.034h-.034l-.034-.034-.034-.034h-.068l-.034-.034c-.204-.102-.408-.17-.579-.238-.578-.17-1.156-.136-1.768.17-.578.306-.986.783-1.259 1.463-.17.476-.238.952-.17 1.428.068.476.238.885.545 1.19.272.34.68.579 1.156.715.272.102.646.17 1.156.238l1.667-4.592zm-12.142-6.768l4.387 1.837 1.53-1.293c.375-.34.613-.612.715-.816a.62.62 0 0 0-.034-.544c-.102-.17-.408-.408-.952-.68l.136-.273 3.537 1.497-.136.306c-.51-.136-.85-.17-1.054-.102-.375.136-.953.51-1.667 1.156l-8.129 7.007-.272-.102.306-10.476c0-.85-.068-1.428-.238-1.734-.136-.34-.442-.613-.884-.817l.136-.306 4.421 1.905-.136.272c-.442-.17-.782-.238-.986-.17-.238.034-.374.17-.476.34-.102.204-.136.612-.17 1.224l-.034 1.769zm-.034.68l-.136 5.102 4.013-3.47-3.877-1.632zm-13.64-12.142l2.858 1.565.68 6.666c.238.136.476.272.612.34a.548.548 0 0 0 .238.136c.068.034.136.102.205.136l1.836-2.925c.374-.612.578-1.054.51-1.292-.068-.306-.272-.579-.68-.783l-.408-.238.17-.272 4.524 2.517-.17.272-.409-.238c-.408-.238-.816-.272-1.19-.102-.204.102-.476.408-.85.986l-4.048 6.463c-.408.612-.544 1.054-.51 1.292.068.306.272.612.714.816l.374.204-.17.307-3.843-2.177c-1.122-.612-1.905-1.157-2.347-1.599a2.895 2.895 0 0 1-.816-1.598c-.136-.647 0-1.225.374-1.803.374-.612.918-1.02 1.633-1.224.714-.204 1.564-.17 2.585.136l-.409-4.116c-.102-.918-.238-1.598-.476-2.006-.204-.443-.612-.817-1.156-1.19l.17-.273zm4.32 9.32h-.034v-.035h-.034l-.034-.034h-.034l-.034-.034-.034-.034h-.034c-.102-.068-.136-.102-.204-.136-.986-.544-1.87-.748-2.619-.612-.782.136-1.36.51-1.768 1.156-.374.613-.51 1.225-.34 1.871.17.612.578 1.088 1.258 1.463.306.17.748.34 1.292.51l2.62-4.116zm-19.25-5.307l1.564-2.312.272.204c-.238.442-.374.748-.408.986-.034.374 0 .714.136.986.17.306.442.613.85.885l1.429.952 5.51-7.177c.442-.544.646-.952.646-1.19-.068-.34-.272-.612-.646-.884l-.374-.238.204-.272 4.251 2.89-.204.273-.34-.238c-.442-.306-.816-.375-1.19-.272-.204.102-.51.374-.919.918l-5.51 7.142 1.19.85c.477.307.817.51 1.055.579.306.068.68.068 1.055-.068.374-.136.714-.374 1.088-.782l.272.17-1.802 2.142-8.13-5.544zm1.02-14.489l-3.571 10.17 5.578-5.68c.51-.544.782-.918.782-1.122 0-.34-.17-.647-.51-.953l-.306-.272.204-.238 3.163 2.755-.238.204-.306-.272c-.374-.34-.783-.476-1.123-.374-.238.034-.578.306-1.054.782l-5.476 5.578c-.34.374-.578.68-.646.918-.068.17-.034.375.034.613.102.238.34.51.68.816l-.204.238-2.585-2.245 3.265-9.455-9.761 3.843-2.551-2.245.238-.238.306.272c.374.34.782.477 1.156.409.205-.068.579-.307 1.02-.783l5.477-5.578c.51-.544.748-.918.748-1.156.034-.34-.136-.646-.51-.952l-.306-.273.238-.204 3.843 3.334-.238.238-.306-.272c-.408-.34-.782-.477-1.156-.375-.239.034-.579.307-1.02.783l-5.613 5.68 10.544-4.15.204.204zm-17.856-1.496l3.707-2.96-1.769-1.938c-.476-.51-.85-.816-1.156-.85-.408-.034-.884.136-1.428.51l-.239-.238 3.232-2.585.238.238c-.408.408-.647.714-.715.884-.102.204-.102.443-.034.68.068.239.273.545.613.919l1.768 1.939 3.061-2.483c.408-.306.647-.544.715-.646a.403.403 0 0 0 .034-.34c0-.137-.136-.34-.34-.579l-1.361-1.462c-.442-.51-.816-.85-1.088-1.02-.273-.137-.613-.273-1.02-.273-.545-.068-1.225 0-2.041.204l-.239-.272 3.027-1.122 6.157 6.768-.238.204-.307-.306a1.643 1.643 0 0 0-.68-.476.843.843 0 0 0-.578 0c-.204.068-.51.306-.986.646l-6.088 4.932c-.579.442-.885.816-.953 1.02-.034.306.102.647.442.987l.272.34-.238.204-6.19-6.803 2.007-1.768.204.272c-.408.476-.646.85-.748 1.122a1.35 1.35 0 0 0 .034.817c.102.238.34.578.748 1.02l2.177 2.415zm-6.088-5.748l-1.905-2.585 3.333-10.714-5.85 3.741c-.578.409-.952.749-1.02.987-.068.306.034.646.306 1.02l.238.306-.272.204-2.45-3.367.307-.17.238.34c.306.408.612.612 1.02.612.239 0 .613-.17 1.19-.544l8.572-5.544.17.272-3.571 11.564 6.224-4.047c.646-.408.986-.714 1.02-.952.102-.306 0-.647-.272-1.02l-.238-.34.272-.205 2.449 3.367-.272.17-.272-.34c-.272-.408-.612-.612-1.02-.612-.205 0-.647.204-1.19.544l-7.075 4.592c-.136.476-.204.85-.204 1.054 0 .238.068.51.136.85.068.137.204.375.408.647l-.272.17zM14.843 176.4l2.483-1.429.136.306c-.408.272-.68.51-.817.714-.238.306-.34.647-.306.953 0 .34.102.714.34 1.156l.85 1.429 8.232-4.252c.68-.34 1.054-.612 1.156-.816.102-.306.034-.68-.17-1.055l-.238-.374.306-.17 2.517 4.354-.306.17-.204-.374c-.272-.442-.578-.68-.953-.715-.238 0-.646.137-1.258.443l-8.265 4.217.714 1.225c.272.476.51.816.68.952.273.238.579.34.987.374.408.034.85-.034 1.36-.272l.17.306-2.618 1.19-4.796-8.332zm-5.68-11.905l-.034-.136-.068-.136-.034-.136-.034-.136-.034-.136-.034-.102-.034-.136-.034-.136v-.136l-.034-.136v-.408l-.034-.136.034-.136v-.374l.034-.137v-.136l.034-.136.034-.136.034-.136.034-.136.034-.136.068-.136.034-.136.034-.136.068-.136.068-.136.068-.136.068-.136c.714-1.395 1.939-2.415 3.64-3.027 1.768-.612 3.4-.612 4.965.034 1.599.646 2.687 1.7 3.265 3.163.578 1.496.51 2.959-.204 4.353-.748 1.395-2.007 2.45-3.81 3.062-1.836.646-3.537.578-5.17-.17-1.428-.68-2.38-1.701-2.958-3.13zm.68-.068l.034.102.034.068.034.102.034.068.068.103.034.068.034.068.068.102.034.068.068.068.068.068.034.068.068.068.068.068.068.068.034.034.068.068.068.068.068.034.068.068.102.068.069.034.068.034.068.068.102.034.068.034.102.068.068.034.102.034.068.034.102.034.102.034c1.224.374 2.789.238 4.625-.408 1.871-.646 3.164-1.53 3.878-2.653.544-.85.646-1.735.272-2.687-.408-1.02-1.156-1.7-2.279-2.075-1.088-.374-2.55-.238-4.387.408-1.973.68-3.334 1.565-3.98 2.653-.544.85-.612 1.803-.204 2.823zm-3.401-10.85l4.66-1.156-.579-2.04c-.136-.477-.34-.783-.612-.953-.272-.136-.748-.17-1.428-.068l-.068-.34 4.013-.986.102.306c-.476.102-.782.238-.986.408-.17.17-.306.34-.34.578-.068.204-.068.51.034.884l.578 2.041 3.775-.952c.578-.136.986-.272 1.157-.374.136-.102.204-.238.272-.443a1.658 1.658 0 0 0 0-.816l-.102-.408.306-.068 1.36 4.796-.34.068-.102-.374c-.136-.477-.374-.783-.714-.919-.238-.068-.68-.034-1.395.136l-7.72 1.939c-.579.136-.987.272-1.157.374-.136.102-.204.238-.272.442a1.658 1.658 0 0 0 0 .817l.102.374-.306.102-2.347-8.333 2.585-.782.068.306c-.51.272-.85.544-1.088.816-.17.238-.306.51-.34.816-.034.306.034.782.17 1.36l.714 2.45zm1.496-16.427l-.68-5.306-3.503.374c-.612.068-1.02.17-1.224.238-.137.068-.239.238-.34.408-.103.272-.137.51-.103.817l.068.374-.374.068-.612-4.932.34-.034.068.408c.034.272.136.51.306.748.102.17.272.272.476.306.205.034.579.034 1.19-.034l7.926-.85c.612-.068 1.02-.17 1.19-.272.17-.068.272-.204.34-.374.136-.272.17-.544.136-.816l-.068-.374.34-.034.613 4.897-.34.034-.035-.408c-.068-.476-.272-.782-.578-.986-.204-.102-.68-.136-1.394-.034l-3.742.408.68 5.306 3.742-.408c.578-.068.986-.136 1.19-.238.136-.068.239-.205.34-.375.103-.272.137-.544.103-.816l-.034-.408.34-.034.612 4.898-.34.068-.068-.442c-.068-.443-.238-.783-.578-.953-.17-.136-.68-.136-1.395-.068l-7.925.884c-.612.069-1.02.137-1.19.239a.737.737 0 0 0-.34.374c-.136.272-.17.544-.136.816l.068.408-.34.034-.613-4.898.34-.034.034.409c.035.272.137.51.307.748.136.136.272.238.476.306.204.034.612.034 1.19-.034l3.537-.408zm-6.19-13.299l4.83-.068v-2.55c-.034-.647-.136-1.09-.34-1.327-.272-.272-.748-.442-1.463-.442v-.34l4.252-.035v.307c-.578.068-.953.17-1.123.272-.238.102-.374.238-.51.476-.102.238-.17.612-.136 1.088v2.551l4.048-.034c.544 0 .884-.034.986-.068.136-.068.238-.136.306-.272.068-.102.102-.306.102-.646l-.034-1.939c-.034-.646-.068-1.122-.17-1.428a2.106 2.106 0 0 0-.578-.85c-.374-.34-.953-.681-1.7-1.055v-.374l3.094.952.102 8.945h-.34v-.408c0-.272-.068-.51-.204-.748-.102-.204-.272-.306-.476-.374-.17-.068-.578-.102-1.156-.102l-8.027.102c-.783 0-1.259.102-1.429.238-.238.204-.34.544-.34 1.02v.408h-.34L1 118.205l2.687-.136.034.34c-.68.102-1.122.272-1.36.408-.239.136-.409.34-.545.647-.102.238-.136.612-.102 1.224l.034 3.163zm8.197-15.611l-.442 4.49 1.837.952c.476.238.816.374 1.02.374.204.034.374-.034.544-.204.136-.136.272-.51.374-1.055l.34.034-.374 3.64-.34-.035c-.034-.476-.136-.782-.272-.952-.238-.306-.816-.68-1.667-1.122l-9.659-4.966v-.272l10.612-3.163c.85-.238 1.428-.51 1.7-.748.273-.238.443-.579.51-1.055l.34.034-.441 4.558-.34-.034c0-.476-.035-.782-.17-.953a.661.661 0 0 0-.477-.306c-.272 0-.68.068-1.292.238l-1.803.545zm-.714.204l-5.136 1.496 4.762 2.483.374-3.98zm4.081-15l.136-.238 3.061 1.599-1.87 8.775-.34-.068.102-.408c.068-.476 0-.85-.306-1.123-.136-.136-.579-.306-1.259-.408l-7.823-1.496c-.748-.136-1.224-.17-1.428-.034-.306.17-.51.476-.612.884l-.102.442-.306-.068 1.088-5.136.306.068c-.102.613-.136 1.02-.068 1.293.068.272.204.442.374.578.17.136.612.272 1.293.408l7.618 1.429c.476.102.817.102 1.055.068a.8.8 0 0 0 .34-.272c.068-.136.204-.545.34-1.293l.204-.816c.17-.884.238-1.497.17-1.905-.034-.374-.204-.714-.51-1.088-.272-.34-.748-.748-1.463-1.19zM7.598 81.88l2.823.647-.102.306c-.51-.068-.884-.068-1.122-.034-.374.102-.714.238-.952.476-.239.238-.443.612-.579 1.054l-.476 1.565 9.013 2.483c.715.17 1.19.238 1.429.136.306-.136.544-.442.68-.885l.102-.374.34.102-1.462 4.728-.34-.102.136-.374c.136-.476.102-.85-.136-1.123-.17-.17-.579-.374-1.225-.544l-9.013-2.483-.442 1.36c-.136.511-.238.885-.204 1.123.034.34.136.612.408.919.238.306.646.51 1.156.714l-.102.306-2.72-.884 2.788-9.116zm7.313-3.06l2.143-4.966-3.265-1.259c-.579-.238-.987-.34-1.19-.34-.171 0-.341.034-.511.17-.238.17-.408.408-.51.646l-.136.374-.34-.136 1.972-4.557.34.136-.17.374c-.102.238-.17.51-.102.782 0 .204.068.374.238.51.136.102.51.272 1.055.51l7.38 2.824c.578.238.987.34 1.19.34.17 0 .34-.068.51-.17.205-.204.375-.408.477-.647l.204-.374.306.102-2.006 4.592-.307-.136.17-.374c.205-.442.205-.817 0-1.123-.102-.17-.51-.408-1.19-.68l-3.47-1.326-2.176 4.965 3.503 1.327c.545.204.953.34 1.157.34.17 0 .34-.068.51-.204.204-.17.408-.374.51-.612l.17-.408.306.136-1.972 4.557-.34-.102.17-.374c.204-.442.204-.816 0-1.122-.103-.204-.51-.409-1.19-.68l-7.382-2.858c-.578-.204-.986-.34-1.19-.34-.17 0-.34.068-.51.204-.204.17-.374.374-.51.647l-.17.374-.306-.136 2.006-4.558.306.136-.17.374c-.102.238-.136.51-.102.783 0 .17.102.34.238.476.136.136.51.306 1.055.51l3.299 1.292zm10.203-21.802l1.973-3.027.306.136c-.238.442-.34.85-.306 1.122.034.306.306.884.816 1.803.545.918.987 1.836 1.327 2.823.85-.136 1.462-.306 1.905-.51.442-.239.782-.51.986-.85.204-.34.306-.681.272-1.021-.034-.34-.204-.68-.544-.987l.408-.17c.612.613.952 1.225 1.054 1.803a2.502 2.502 0 0 1-.408 1.7 3.265 3.265 0 0 1-1.122 1.021c-.51.272-1.19.51-2.075.68.204.919.238 1.7.136 2.313a4.608 4.608 0 0 1-.68 1.735c-.51.782-1.157 1.292-1.905 1.496-.782.204-1.462.136-2.109-.238-.612-.374-1.088-.952-1.428-1.734-.374-.783-.51-1.94-.408-3.47-.68-.102-1.225-.204-1.599-.306-.408-.136-.782-.272-1.088-.476-.884-.476-1.36-1.19-1.429-2.075a3.125 3.125 0 0 1 .545-1.938c.374-.579.85-.953 1.462-1.089.612-.17 1.156-.068 1.7.238.545.306.919.749 1.09 1.36.17.579.203 1.463.135 2.654 1.565.068 3.027.034 4.456-.068-.51-1.497-1.123-2.483-1.871-2.891-.238-.17-.51-.204-.782-.17a.884.884 0 0 0-.544.306l-.273-.17zm3.912 4.625h-.136l-.102.034h-.476l-.102.034h-.443l-.102.034h-.476l-.068.034h-.986c-.612 0-1.293-.034-2.143-.102 0 .783.102 1.463.306 2.007a2.69 2.69 0 0 0 1.123 1.258 2.77 2.77 0 0 0 1.802.307c.612-.068 1.123-.409 1.497-.987.204-.306.34-.612.374-.986.068-.34.034-.884-.068-1.633zm-5.578-1.666l.034-.136v-.443l.034-.136v-.136l-.034-.102v-.272l-.034-.102v-.102l-.034-.136-.034-.102v-.102l-.034-.102-.034-.102a2.257 2.257 0 0 0-1.02-1.224 1.636 1.636 0 0 0-1.123-.205c-.374.103-.68.273-.884.613-.272.408-.34.85-.17 1.258.17.374.408.646.714.85.238.137.544.239.918.34.374.103.953.205 1.7.34zm11.53-13.571l3.741-4.013-2.687-2.211c-.476-.374-.782-.612-.986-.68a1.01 1.01 0 0 0-.544.034 1.7 1.7 0 0 0-.715.442l-.272.306-.272-.204 3.47-3.708.238.204-.272.307c-.205.204-.34.442-.375.714-.068.17-.034.374.068.544.068.17.375.442.817.782l6.02 4.966c.476.374.782.612.986.68.17.034.34.034.544-.034.272-.102.51-.238.715-.442l.272-.306.272.204-3.47 3.707-.238-.204.273-.306c.34-.34.442-.714.408-1.054-.068-.204-.374-.544-.919-.987l-2.823-2.346-3.74 4.047 2.822 2.313c.442.408.816.612.986.68.17.034.34.034.545-.034.272-.068.51-.238.714-.442l.272-.306.272.204-3.47 3.707-.237-.17.272-.306c.34-.374.476-.748.408-1.088-.068-.204-.34-.544-.918-.987l-6.02-4.965c-.443-.375-.783-.613-.987-.68a1.01 1.01 0 0 0-.544.033c-.272.102-.51.272-.68.443l-.306.306-.238-.204 3.435-3.708.272.204-.306.306a1.8 1.8 0 0 0-.374.715.612.612 0 0 0 .068.544c.102.17.374.442.816.816l2.687 2.177zm9.863-16.7l-.204-.238 3.197-2.721.239.238-.375.306c-.34.272-.476.646-.408 1.089.034.238.272.578.749 1.054l3.333 3.503c.816.85 1.36 1.599 1.666 2.245.272.612.306 1.326.068 2.109-.204.782-.748 1.598-1.666 2.38-.987.817-1.905 1.293-2.721 1.43-.85.101-1.633-.035-2.347-.41-.544-.237-1.293-.883-2.279-1.938l-3.197-3.367c-.51-.51-.918-.816-1.224-.85-.307-.034-.647.102-.987.408l-.34.272-.204-.238 3.877-3.3.238.205-.34.306c-.374.306-.544.646-.476 1.02.034.238.272.578.748 1.089l3.572 3.741c.34.34.714.714 1.19 1.088.51.34.918.613 1.36.715a3.35 3.35 0 0 0 1.293-.034 3.396 3.396 0 0 0 1.395-.783c.612-.51 1.02-1.088 1.258-1.734.238-.646.238-1.225.068-1.769-.204-.51-.748-1.224-1.599-2.143l-3.333-3.503c-.544-.544-.918-.816-1.156-.85-.374-.034-.714.102-1.054.374l-.34.306zm17.619 1.395l-9.728-5.544 4.626 6.394c.408.578.748.918.986.986.34.068.714-.034 1.089-.272l.374-.238.204.238-3.572 2.313-.204-.272.375-.238c.442-.272.646-.578.646-.953 0-.238-.204-.578-.578-1.122l-4.524-6.258c-.306-.442-.578-.714-.816-.85-.17-.069-.374-.103-.647-.069-.238 0-.578.17-.986.443l-.204-.272 2.925-1.871 9.047 5.136-1.768-9.796 2.857-1.836.204.238-.34.238c-.443.272-.68.612-.68.952 0 .238.203.612.578 1.157l4.523 6.258c.442.578.782.918 1.02.952.34.102.715 0 1.089-.272l.374-.204.17.238-4.32 2.789-.204-.272.375-.238c.442-.272.646-.578.646-.953 0-.204-.204-.578-.578-1.122l-4.626-6.394 1.905 10.578-.238.136zm13.23-11.667l-4.32 2.007.137 1.973c.034.476.102.816.204 1.02.068.17.238.272.442.306.238.068.612-.034 1.156-.238l.17.272-3.503 1.667-.136-.306c.408-.306.68-.544.748-.714.136-.375.17-1.02.102-1.94l-.578-10.373.238-.102 8.435 6.803c.68.544 1.19.884 1.565.952.34.102.748.068 1.224-.136l.136.272-4.32 2.075-.17-.306c.443-.238.681-.443.783-.613.102-.204.102-.374 0-.544-.102-.238-.408-.544-.884-.918l-1.429-1.157zm-.544-.442l-4.081-3.333.272 5.102 3.809-1.769zm2.415-9.013l3.163-1.054 10.136 5.782-2.347-6.258c-.272-.68-.51-1.055-.749-1.157-.272-.17-.646-.17-1.122 0l-.374.136-.136-.306 4.081-1.36.102.272-.408.17c-.51.17-.782.408-.918.748-.068.204.034.646.272 1.259l3.47 9.217-.307.068-10.952-6.224 2.551 6.7c.238.68.476 1.088.68 1.19.306.17.68.17 1.123 0l.442-.136.102.306-4.047 1.36-.137-.305.409-.136c.51-.136.816-.408.918-.749.034-.238-.034-.646-.272-1.258l-2.857-7.585c-.476-.272-.816-.442-1.055-.476-.204-.068-.51-.102-.884-.102-.17.034-.442.068-.782.204l-.102-.306zm27.924-7.687l.782 3.912-.34.068c-.238-.748-.544-1.293-.918-1.7a3.342 3.342 0 0 0-1.429-.851 3.335 3.335 0 0 0-1.633-.102 2.317 2.317 0 0 0-1.462.816c-.34.442-.442.885-.34 1.327.068.34.238.646.578.884.442.34 1.428.748 2.959 1.19 1.258.375 2.109.68 2.585.919.476.238.884.51 1.19.918.306.34.51.782.613 1.224.17.85-.034 1.667-.613 2.415-.612.749-1.462 1.225-2.55 1.429-.375.068-.68.102-1.02.102-.205.034-.58 0-1.225-.102-.613-.068-.987-.102-1.157-.068a.495.495 0 0 0-.306.204c-.068.102-.102.272-.068.544l-.34.068-.816-3.911.34-.068c.34.816.646 1.36 1.02 1.734.34.374.782.647 1.395.783.578.204 1.19.204 1.836.102.749-.136 1.293-.409 1.667-.885.34-.442.476-.918.374-1.428a1.941 1.941 0 0 0-.442-.816 2.444 2.444 0 0 0-.918-.647c-.273-.136-.953-.374-2.11-.714-1.156-.374-2.006-.68-2.482-.918a3.789 3.789 0 0 1-1.224-.885 2.904 2.904 0 0 1-.613-1.258c-.136-.816.034-1.565.579-2.279.544-.714 1.36-1.156 2.38-1.36.647-.102 1.36-.068 2.143.102.34.068.612.102.748.068a.81.81 0 0 0 .375-.204c.034-.102.102-.272.102-.579l.34-.034zm7.074.034l.408 4.558 2.721-.238c.714-.034 1.157-.204 1.36-.408.307-.272.443-.748.409-1.36l.34-.035.374 3.98-.34.034c-.102-.578-.238-.919-.34-1.055a1.107 1.107 0 0 0-.578-.442c-.272-.068-.647-.102-1.157-.068l-2.72.238.373 3.81c.068.51.102.816.17.918a.63.63 0 0 0 .273.238c.136.034.34.068.714.034l2.075-.17c.68-.068 1.156-.136 1.462-.272.306-.102.578-.306.85-.612.34-.374.68-.919 1.02-1.667l.375-.034-.782 2.993-9.456.782-.034-.306.442-.068c.273 0 .545-.102.817-.238.17-.102.272-.272.34-.442.034-.204.034-.578 0-1.122l-.714-7.517c-.102-.748-.204-1.19-.375-1.326-.238-.205-.612-.307-1.122-.239l-.442.034v-.34l9.455-.782.374 2.517-.374.034c-.17-.578-.34-1.02-.544-1.224a1.558 1.558 0 0 0-.714-.477c-.272-.034-.68-.034-1.293 0l-3.367.272z"
        />
        <path d="M133.68 12.802l-3.299-.034-4.081-5.51h-.952c-.102-.034-.204-.034-.272-.034l-.068 3.401c-.034.715.034 1.157.204 1.36.238.239.578.375 1.02.375h.476v.34l-5.238-.102v-.34l.442.034c.51 0 .885-.136 1.123-.442.136-.17.204-.612.204-1.259l.136-7.516c.034-.715-.034-1.19-.204-1.36-.238-.239-.578-.375-1.02-.375l-.477-.034V1l4.49.068c1.292.034 2.245.136 2.857.34.612.17 1.156.51 1.564 1.02.443.477.613 1.055.613 1.701 0 .748-.272 1.327-.783 1.87-.476.51-1.258.851-2.312 1.055l2.482 3.367c.579.783 1.055 1.293 1.463 1.565.442.272.986.408 1.633.51v.306zm-8.604-6.122h.306a.37.37 0 0 0 .17.034c1.156 0 2.04-.204 2.653-.68.578-.476.884-1.089.918-1.803 0-.748-.238-1.326-.68-1.803-.476-.442-1.089-.68-1.87-.714-.341 0-.817.068-1.395.17l-.102 4.796z" />
        <path
          fillRule="nonzero"
          d="M146.707 2.7l-.034.307c-.442.034-.782.136-1.02.272-.374.238-.715.646-1.02 1.19l-5.545 9.32-.34-.069-3.265-10.441a6.862 6.862 0 0 0-.374-.987c-.136-.204-.306-.34-.51-.476-.204-.136-.476-.238-.85-.306l.034-.306 5 .578-.035.306c-.544 0-.918.034-1.122.17a.599.599 0 0 0-.306.443c-.034.306.034.748.238 1.394l2.21 7.075 3.742-6.293c.374-.646.578-1.088.612-1.326.034-.17-.034-.34-.204-.51-.136-.17-.442-.306-.816-.408-.068 0-.102-.034-.17-.068l.034-.307 3.741.443zm4.524 12.517l-.102.34-5.102-1.054.068-.306.408.068c.51.102.884.034 1.19-.17.17-.17.34-.579.477-1.259l1.666-7.346c.136-.579.204-.953.17-1.157-.034-.136-.136-.272-.272-.408-.238-.204-.51-.306-.782-.374l-.442-.068.102-.306 5.136 1.02-.102.306-.409-.068c-.51-.102-.884-.068-1.156.17-.204.136-.374.578-.51 1.225l-1.667 7.38c-.136.544-.17.953-.17 1.123.034.17.136.306.306.442.204.17.476.306.749.374l.442.068zm14.931-7.959l-.952 3.844-.272-.102c0-1.225-.239-2.177-.749-2.857-.476-.68-1.224-1.157-2.142-1.429-.783-.204-1.531-.238-2.28-.034-.748.204-1.428.646-2.074 1.36-.612.715-1.122 1.701-1.53 2.891-.307 1.02-.409 1.94-.307 2.755.102.85.443 1.565.987 2.143a4.503 4.503 0 0 0 2.142 1.259c.783.238 1.497.272 2.177.102.68-.136 1.497-.545 2.483-1.259l.238.238c-.918.817-1.836 1.327-2.789 1.565-.918.238-1.939.204-2.993-.102-1.973-.544-3.231-1.667-3.877-3.333-.476-1.259-.476-2.585-.034-3.946.34-1.122.952-2.04 1.768-2.823A5.871 5.871 0 0 1 158.815 6c1.089-.272 2.177-.238 3.266.068.85.272 1.632.68 2.312 1.326.204.204.34.306.477.34.136.034.272 0 .442-.068.204-.102.374-.272.51-.51l.34.102zm5.68 3.061l-1.87 4.218 2.482.986c.646.272 1.123.34 1.429.238.374-.102.748-.476 1.054-1.054l.306.136-1.666 3.673-.307-.102c.136-.544.205-.918.205-1.088-.034-.238-.103-.442-.307-.646-.17-.17-.51-.375-.952-.579l-2.517-.986-1.564 3.537c-.238.442-.306.748-.34.885 0 .102.034.204.136.34.068.102.272.204.578.34l1.938.748c.613.238 1.123.374 1.429.408.34.034.68 0 1.054-.136.476-.204 1.055-.544 1.735-1.054l.34.136-2.177 2.279-8.74-3.47.135-.306.408.204c.273.068.545.102.85.102.205 0 .375-.102.51-.238.137-.136.307-.476.58-.986l3.094-6.973c.306-.646.408-1.088.34-1.326-.102-.272-.374-.51-.85-.714l-.408-.136.136-.306 8.741 3.469-.918 2.415-.34-.136c.136-.613.17-1.055.136-1.327s-.17-.51-.409-.714c-.204-.17-.578-.374-1.122-.612l-3.13-1.225zm15.952 6.258l-2.007 3.538-.306-.17c.272-.715.408-1.36.408-1.871a2.877 2.877 0 0 0-.544-1.497c-.306-.476-.715-.816-1.225-1.088a2.395 2.395 0 0 0-1.666-.204c-.545.136-.919.408-1.157.816-.17.306-.204.647-.136 1.02.136.545.612 1.463 1.497 2.722.748 1.02 1.19 1.768 1.428 2.21.204.477.306.953.306 1.395-.034.476-.136.952-.374 1.326-.442.783-1.122 1.293-2.109 1.53-.952.239-1.938.103-2.925-.407a5.116 5.116 0 0 1-.85-.51c-.17-.102-.442-.375-.884-.817-.408-.408-.714-.646-.85-.714-.137-.068-.239-.102-.375-.034-.136 0-.238.136-.442.34l-.306-.136 2.04-3.503.273.136c-.272.816-.408 1.462-.374 1.939.034.476.204.986.544 1.462.34.476.816.884 1.395 1.156.646.34 1.292.443 1.836.307.578-.136 1.02-.443 1.293-.885.136-.238.204-.544.204-.884 0-.306-.102-.68-.272-1.054-.136-.238-.51-.85-1.157-1.803-.646-.986-1.122-1.7-1.326-2.177a3.358 3.358 0 0 1-.34-1.428c0-.476.102-.885.34-1.327.442-.714 1.088-1.19 2.006-1.428.885-.238 1.803-.102 2.721.34.579.306 1.123.748 1.633 1.36.204.272.374.443.51.477.136.102.272.102.408.068.136-.034.306-.137.476-.34l.307.135zm18.57 12.959l.204-.272 3.333 2.55-.204.273-.34-.272c-.374-.306-.782-.374-1.258-.238-.204.068-.545.34-.987.85l-3.129 3.64c-.782.918-1.462 1.53-2.075 1.904-.646.34-1.36.476-2.244.408-.85-.034-1.769-.442-2.721-1.19-1.055-.783-1.7-1.565-1.939-2.313a3.39 3.39 0 0 1 .034-2.245c.204-.51.748-1.326 1.7-2.415l3.028-3.503c.476-.544.714-.986.68-1.258 0-.307-.17-.579-.544-.85l-.34-.273.204-.238 4.081 3.095-.204.238-.374-.272c-.374-.272-.748-.374-1.122-.272-.239.068-.579.374-1.02.85l-3.402 3.946c-.272.34-.612.748-.918 1.258-.306.51-.51.953-.544 1.36-.034.375.034.783.238 1.225.17.408.544.816 1.02 1.157.612.51 1.292.782 2.007.918.714.102 1.326.034 1.87-.238.51-.238 1.19-.85 2.007-1.837l3.163-3.64c.476-.543.714-.951.68-1.19 0-.34-.17-.612-.544-.918l-.34-.238zm10.952 8.81l-3.027 2.822-.238-.204c.51-.612.816-1.19.952-1.7a2.73 2.73 0 0 0-.034-1.565 2.992 2.992 0 0 0-.85-1.36c-.442-.443-.953-.647-1.53-.647-.545-.034-1.021.136-1.361.442a1.468 1.468 0 0 0-.442.953c-.068.544.17 1.564.612 2.993.408 1.19.612 2.04.68 2.517.068.51.034.986-.136 1.428-.136.476-.408.85-.748 1.19-.68.613-1.497.919-2.483.885-.986-.034-1.87-.408-2.687-1.19-.238-.239-.476-.477-.646-.715-.102-.136-.306-.476-.578-1.02-.307-.51-.51-.816-.613-.919a.437.437 0 0 0-.34-.136c-.136 0-.306.068-.544.239l-.238-.239 2.959-2.823.238.239c-.476.714-.816 1.292-.918 1.768-.136.442-.102.986.068 1.53a3.83 3.83 0 0 0 .986 1.497c.544.51 1.088.748 1.7.782a1.873 1.873 0 0 0 1.463-.544c.204-.17.374-.442.476-.748.102-.34.102-.68.068-1.122-.034-.272-.238-.953-.578-2.041-.34-1.088-.544-1.905-.612-2.449-.068-.51-.034-1.02.102-1.428.136-.443.408-.817.748-1.19.646-.58 1.395-.851 2.347-.851.918.034 1.769.408 2.517 1.088.442.442.85 1.02 1.122 1.7.136.34.272.545.374.647.103.102.239.17.375.17.102 0 .306-.068.544-.238l.272.238zm1.088 13.4l-3.06-3.503-2.007.544c-.51.136-.85.272-1.02.408a.692.692 0 0 0-.205.51c0 .204.17.544.51 1.02l-.272.17-2.449-2.822.272-.205c.375.34.68.477.885.51.442.069 1.122-.033 2.04-.305l10.612-2.857.17.204-5.204 9.25c-.408.75-.612 1.293-.612 1.633-.034.375.102.749.408 1.123l-.272.204-3.06-3.537.237-.204c.34.34.612.544.85.578.205.034.375 0 .545-.102.204-.17.442-.51.748-1.02l.884-1.6zm.34-.612l2.517-4.49-5.204 1.429 2.687 3.06zm18.945 49.555l-.034.034-.034.034-.034.034-.068.034-.068.068-.068.068-.102.068-.204.17-.238.238-.306.238-.306.272-.375.307-.374.306-.442.374-.442.374-.476.374-.51.408-.51.442-.545.442-.578.443-.578.476-.612.476-.579.476-1.258.952-1.292.953-1.259.952-1.292.884-.613.443-.646.408-.612.408-.578.408c-6.7 4.183-36.767 20.17-43.433 25.68-6.7 5.509-6.429 10.203-6.429 10.203l-1.088 13.638s-4.184 4.218-4.728 5.782c-.544 1.565 2.79 1.837 5.272 3.13 2.517 1.326-.476 2.516.544 3.707 1.973 2.21 3.503.408 2.177 4.183-.204.579 1.667 2.347 1.463 3.333-.34 1.565-1.19 2.62.272 4.014 1.666 1.564 7.04 4.217 19.352 1.7 13.367-2.754 22.142 7.653 28.809 9.422 2.278.578 9.829 2.959 21.733-6.292 5.136-3.98-3.163-.375-15.067-5.374-12.687-5.306-16.496-5.646-25.033-4.048-7.312 1.36-12.72 2.551-15.577 1.7-2.45-.747-.409-4.387-2.245-4.999-3.673-1.224-1.157-2.993-3.333-4.183-2.211-1.225-.919-1.701-.987-4.15-.034-1.7-1.904-1.224-4.591-2.72-2.075-1.191 2.857-3.368 3.571-5.103.816-2.142-.204-5.135.34-9.523.986-7.72 12.517-13.129 18.639-16.53 6.7-3.639 25.815-15.305 30.338-18.332 10.578-7.075 5.034-16.802 5.034-16.802zm-47.82-73.738h.17l.101-.034h.068l.102-.034h.102l.068-.034.069-.034.102-.034.068-.034.068-.034.102-.068.068-.034.068-.068.068-.034.034-.068.068-.068.068-.034.034-.068.068-.068.034-.068.034-.068.068-.068.034-.102.034-.068v-.068l.034-.102.034-.068v-.102l.034-.068v-.17c0-.953-.816-1.701-1.803-1.701-1.02 0-1.802.748-1.802 1.7 0 .919.782 1.701 1.802 1.701z"
        />
      </g>
    </SvgIcon>
  );
}
