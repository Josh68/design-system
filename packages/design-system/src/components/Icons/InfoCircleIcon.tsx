import { t } from '../i18n';
import SvgIcon, { IconCommonProps } from './SvgIcon';

const defaultProps = {
  className: '',
  viewBox: '37 2 135 135',
};

function InfoCircleIcon(props: IconCommonProps): React.ReactElement {
  const iconCssClasses = `ds-c-icon--info-circle ${props.className || ''}`;

  return (
    <SvgIcon title={t('icons.infoCircle')} {...defaultProps} {...props} className={iconCssClasses}>
      <path d="M162.18 41.592c-5.595-9.586-13.185-17.176-22.771-22.771-9.588-5.595-20.055-8.392-31.408-8.392-11.352 0-21.822 2.797-31.408 8.392-9.587 5.594-17.177 13.184-22.772 22.771-5.596 9.587-8.393 20.057-8.393 31.408 0 11.352 2.798 21.82 8.392 31.408 5.595 9.585 13.185 17.176 22.772 22.771 9.587 5.595 20.056 8.392 31.408 8.392s21.822-2.797 31.408-8.392c9.586-5.594 17.176-13.185 22.771-22.771 5.594-9.587 8.391-20.057 8.391-31.408 0-11.352-2.797-21.822-8.39-31.408zM97.572 26.071c0-.761.244-1.385.733-1.874.489-.488 1.114-.733 1.874-.733h15.644c.76 0 1.385.245 1.872.733.488.489.734 1.113.734 1.874v13.036c0 .76-.246 1.385-.734 1.873-.487.489-1.112.733-1.872.733h-15.644c-.76 0-1.385-.244-1.874-.733-.489-.488-.733-1.113-.733-1.873V26.071zm31.285 86.036c0 .76-.246 1.385-.733 1.872-.487.489-1.112.733-1.874.733h-36.5c-.761 0-1.385-.244-1.874-.733-.489-.488-.733-1.113-.733-1.873V99.07c0-.762.244-1.385.733-1.874.489-.488 1.114-.733 1.874-.733h7.822V70.392H89.75c-.761 0-1.385-.244-1.874-.733-.489-.488-.733-1.113-.733-1.874V54.75c0-.761.244-1.385.733-1.874.489-.489 1.114-.733 1.874-.733h26.073c.76 0 1.385.244 1.872.733.488.489.734 1.113.734 1.874v41.714h7.82c.761 0 1.386.245 1.874.733.487.488.733 1.113.733 1.874v13.036z" />
    </SvgIcon>
  );
}

export default InfoCircleIcon;
