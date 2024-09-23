import type * as React from 'react';
// TODO: Update react-transition-group once we update react peer dep
import CSSTransition from 'react-transition-group/CSSTransition';
import { useState, useRef, useEffect, useLayoutEffect } from 'react';
import classNames from 'classnames';
import { createPopper, Placement } from '@popperjs/core';
import useId from '../utilities/useId';
import usePrevious from '../utilities/usePrevious';

export interface BaseTooltipProps {
  /**
   * Classes applied to the tooltip trigger when the tooltip is active
   */
  activeClassName?: string;
  /**
   * Helpful description of the tooltip for screenreaders
   */
  ariaLabel?: string;
  /**
   * Tooltip trigger content
   */
  children: React.ReactNode;
  /**
   * Classes applied to the tooltip trigger
   */
  className?: string;
  /**
   * When provided, will render the passed in component for the tooltip trigger. Typically will be a `button`, `a`, or rarely an `input` element.
   */
  component?: React.ReactElement<any> | any | ((...args: any[]) => any);
  /**
   * Heading for the tooltip content. This will show above 'title' content and inline with 'closeButton' if closeButton is set
   */
  contentHeading?: React.ReactNode;
  /**
   * `id` applied to tooltip body container element. If not provided, a unique id will be automatically generated and used.
   */
  id?: string;
  /**
   * Sets the size of the invisible border around interactive tooltips that prevents it from immediately hiding when the cursor leaves the tooltip.
   */
  interactiveBorder?: number;
  inversed?: boolean;
  /**
   * Applies `skidding` and `distance` offsets to the tooltip relative to the trigger. See the [`popperjs` docs](https://popper.js.org/docs/v2/modifiers/popper-offsets/) for more info.
   */
  offset?: [number, number];
  /**
   * Called when the tooltip is hidden
   */
  onClose?: () => any;
  /**
   * Called when the tooltip is shown
   */
  onOpen?: () => any;
  /**
   * Placement of the tooltip body relative to the trigger. See the [`popperjs` docs](https://popper.js.org/docs/v2/constructors/#options) for more info.
   */
  placement?: Placement;
  /**
   * `maxWidth` styling applied to the tooltip body
   */
  maxWidth?: string;
  /**
   * Content inside the tooltip body or popover. If contains interactive elements use the `dialog` prop.
   */
  title: React.ReactNode;
  /**
   * Duration of the `react-transition-group` CSSTransition. See the [`timeout` option](http://reactcommunity.org/react-transition-group/transition#Transition-prop-timeout) for more info.
   */
  transitionDuration?: number;
  /**
   * `zIndex` styling applied to the tooltip body
   */
  zIndex?: number;
}

// Similarly to the Button component, we want to expand the props type definition to
// permit pass-through props for the most commonly used underlying components.
// However, unlike in Button, we have not removed the ability for applications to
// define a custom `component` prop, which means there are theoretically props
// specific to that component type which will not be available in the TooltipProps
// definition. The strategy here is to keep the types simple by including just the
// possible attributes of button and anchor, but it comes at the expense of accuracy.
// If applications have extra props for their custom components, they will need to
// tell TypeScript to ignore those props for now. We'd like to revisit Tooltip in
// the future and improve it.
type OtherProps = Omit<
  // All other props that could be passed to buttons or anchors
  React.ComponentPropsWithRef<'button'> & React.ComponentPropsWithRef<'a'>,
  // Omit any properties that we're defining on our own `BaseTooltipProps`
  keyof BaseTooltipProps
>;

export type TooltipProps = BaseTooltipProps & OtherProps;

/**
 * Tooltips provide additional information upon hover, focus or click.
 * For information about how and when to use this component,
 * [refer to its full documentation page](https://design.cms.gov/components/tooltip/).
 *
 * When using the `<TooltipIcon>` as the only child of `<Tooltip>`, be sure to
 * provide an `aria-label` on the `<Tooltip>` to ensure an accessible name for
 * the trigger.
 */
export const Tooltip = (props: TooltipProps) => {
  const popper = useRef(null);
  const contentId = useId('tooltip-trigger--', props.id);
  const triggerElement = useRef(null);
  const tooltipElement = useRef(null);

  const setTriggerElement = (elem) => {
    triggerElement.current = elem;
  };
  const setTooltipElement = (elem) => {
    tooltipElement.current = elem;
  };

  const [active, setActive] = useState<boolean>(false);
  const [isHover, setIsHover] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const prevActiveStateVar = usePrevious(active);

  const handleEscapeKey = (event: KeyboardEvent) => {
    const ESCAPE_KEY = 27;
    if (active && event.keyCode === ESCAPE_KEY) {
      setActive(false);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (active && isMobile) {
      const clickedTrigger = triggerElement.current?.contains(event.target);
      const clickedTooltip = tooltipElement.current?.contains(event.target);
      if (!clickedTooltip && !clickedTrigger) {
        setActive(false);
      }
    }
  };

  const handleBlur = (event: Event) => {
    setTimeout(() => {
      if (!isHover && event.currentTarget !== event.target) setActive(false);
    }, 10);
  };

  const handleTouch = () => {
    // On mobile, touch -> mouseenter -> click events can all be fired simultaneously
    // `isMobile` flag is used inside onClick and onMouseEnter handlers, so touch events can be used in isolation on mobile
    // https://stackoverflow.com/a/65055198
    setIsMobile(true);
    setActive(!active);
  };

  useEffect(() => {
    if (!triggerElement.current || !tooltipElement.current) return;

    popper.current = createPopper(triggerElement.current, tooltipElement.current, {
      placement: props.placement,
      modifiers: [{ name: 'offset', options: { offset: props.offset } }],
    });

    return () => {
      if (popper.current) popper.current.destroy();
    };
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [handleClickOutside, handleEscapeKey]);

  useEffect(() => {
    if (active) {
      props.onOpen && props.onOpen();
    } else {
      props.onClose && props.onClose();
    }
  }, [active]);

  useLayoutEffect(() => {
    if (popper.current) {
      popper.current.setOptions(props);
      popper.current.forceUpdate();
    }
  });

  const renderTrigger = (props: TooltipProps): React.ReactElement => {
    const {
      activeClassName,
      ariaLabel,
      children,
      className,
      component,
      id,
      offset,
      onClose,
      onOpen,
      inversed,
      interactiveBorder,
      placement,
      maxWidth,
      title,
      transitionDuration,
      zIndex,
      contentHeading,
      ...others
    } = props;

    const TriggerComponent = component;
    const triggerClasses = classNames('ds-c-tooltip__trigger', className, {
      [activeClassName]: activeClassName && active,
      'ds-c-tooltip__trigger--inverse': inversed,
    });
    const linkTriggerOverrides = {
      tabIndex: TriggerComponent === 'a' ? 0 : undefined,
    };
    const eventHandlers = {
      onTouchStart: () => handleTouch(),
      onClick: () => {
        if (!isMobile) {
          setActive(!active);
        }
      },
      onFocus: () => setActive(true),
      onBlur: (event) => handleBlur(event),
    };

    return (
      <TriggerComponent
        type={TriggerComponent === 'button' ? 'button' : undefined}
        aria-label={ariaLabel || undefined}
        aria-describedby={contentId}
        className={triggerClasses}
        ref={setTriggerElement}
        {...others}
        {...linkTriggerOverrides}
        {...eventHandlers}
      >
        {children}
      </TriggerComponent>
    );
  };

  const renderContent = (props: TooltipProps): React.ReactElement => {
    const {
      contentHeading,
      inversed,
      interactiveBorder,
      placement,
      maxWidth,
      title,
      transitionDuration,
      zIndex,
    } = props;

    const tooltipStyle = { maxWidth, zIndex };
    const interactiveBorderStyle: React.CSSProperties = {
      left: `-${interactiveBorder}px`,
      top: `-${interactiveBorder}px`,
      border: `${interactiveBorder}px solid transparent`,
      zIndex: -999, // ensures interactive border doesnt cover tooltip content
    };
    const eventHandlers = { onBlur: (event) => handleBlur(event) };

    const tooltipContent = (
      <div
        id={contentId}
        tabIndex={null}
        ref={setTooltipElement}
        className={classNames('ds-c-tooltip', { 'ds-c-tooltip--inverse': inversed })}
        style={tooltipStyle}
        data-placement={placement}
        aria-hidden={!active}
        role={'tooltip'}
        {...eventHandlers}
      >
        <span className="ds-c-tooltip__arrow" data-popper-arrow />
        <div className="ds-c-tooltip__content">
          {contentHeading ? (
            <div
              className={classNames('ds-c-tooltip__header', {
                'ds-c-tooltip__header--right': !contentHeading,
              })}
            >
              {contentHeading}
            </div>
          ) : null}
          {title}
        </div>
        <span className="ds-c-tooltip__interactive-border" style={interactiveBorderStyle} />
      </div>
    );

    return (
      <CSSTransition in={active} classNames="ds-c-tooltip" timeout={transitionDuration}>
        {tooltipContent}
      </CSSTransition>
    );
  };

  const mainEventHandlers = {
    onMouseEnter: () => {
      if (!isMobile) {
        setIsHover(true);
        setActive(true);
      }
    },
    onMouseLeave: () => {
      if (!isMobile) {
        setIsHover(false);
        setActive(false);
      }
    },
  };

  return (
    <div className="ds-c-tooltip__container" {...mainEventHandlers}>
      {renderTrigger(props)}
      {renderContent(props)}
    </div>
  );
};

Tooltip.defaultProps = {
  component: 'button',
  interactiveBorder: 15,
  maxWidth: '300px',
  offset: [0, 5],
  placement: 'top',
  transitionDuration: 250, // Equivalent to $animation-speed-1
  zIndex: 9999,
};

export default Tooltip;
