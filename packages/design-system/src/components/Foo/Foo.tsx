import classNames from 'classnames';

/**
 * Foo does things!!!
 *
 * @param bool
 */
export const Foo = (props) => {
  const bgColor = props.bool ? 'mistyrose' : 'lightblue';
  return (
    <p
      style={{ backgroundColor: bgColor }}
      className={classNames('ds-u-color--base ds-u-padding--2', props.className)}
    >
      {props.children}
    </p>
  );
};

export default Foo;
