import { h, cloneElement, render, hydrate } from 'preact';

// The main function that registers a Preact component as a custom element.
export default function register(Component, tagName, propNames, options) {

  // Define a new constructor function for the custom element.
  function PreactElement() {
    const inst = Reflect.construct(HTMLElement, [], PreactElement); // Create an instance of the custom element.
    inst._vdomComponent = Component; // Store the Preact component for rendering.
    inst._root = options && options.shadow ? inst.attachShadow({ mode: 'open' }) : inst; // Create a shadow DOM if specified.
    return inst;
  }

  // Set up the prototype chain for the custom element.
  PreactElement.prototype = Object.create(HTMLElement.prototype);
  PreactElement.prototype.constructor = PreactElement;
  PreactElement.prototype.connectedCallback = connectedCallback; // Called when the element is connected to the DOM.
  PreactElement.prototype.attributeChangedCallback = attributeChangedCallback; // Called when attributes change.
  PreactElement.prototype.detachedCallback = detachedCallback; // Called when the element is removed from the DOM.
  PreactElement.observedAttributes =
    propNames || Component.observedAttributes || Object.keys(Component.propTypes || {}); // Define which attributes to observe.

  propNames.forEach((name) => {
    Object.defineProperty(PreactElement.prototype, name, {
      get() {
        return this._vdom.props[name];
      },
      set(v) {
        if (this._vdom) {
          this.attributeChangedCallback(name, null, v);
        } else {
          if (!this._props) this._props = {};
          this._props[name] = v;
          this.connectedCallback();
        }

        const type = typeof v;
        if (v == null || type === 'string' || type === 'boolean' || type === 'number') {
          this.setAttribute(name, v);
        }
      },
    });
  });

  // Register the custom element with the given tag name or use defaults.
  return customElements.define(
    tagName || Component.tagName || Component.displayName || Component.name,
    PreactElement
  );
}

// Callback function called when the custom element is connected to the DOM.
function connectedCallback() {
  this._vdom = toVdom(this, this._vdomComponent); // Convert the custom element to a virtual DOM representation.
  // Decide whether to hydrate (update) or render the virtual DOM into the custom element.
  (this.hasAttribute('hydrate') ? hydrate : render)(this._vdom, this._root);
}

// Callback function called when attributes of the custom element change.
function attributeChangedCallback(name, oldValue, newValue) {
  if (!this._vdom) return;
  const props = {};
  props[name] = newValue;
  this._vdom = cloneElement(this._vdom, props); // Update the virtual DOM with the new attribute value.
  render(this._vdom, this._root); // Re-render the virtual DOM into the custom element.
}

// Callback function called when the custom element is removed from the DOM.
function detachedCallback() {
  render((this._vdom = null), this._root); // Render null to clear the custom element's content.
}

// Convert a DOM element and its children to a Preact virtual DOM representation.
function toVdom(element, nodeName) {
  if (element.nodeType === 3) return element.data; // Text nodes are represented as strings.
  if (element.nodeType !== 1) return null; // Ignore non-element nodes.
  let children = [],
    props = {},
    i = 0,
    a = element.attributes,
    cn = element.childNodes;

  for (i = a.length; i--; ) props[a[i].name] = a[i].value; // Extract attributes.

  for (i = cn.length; i--; ) children[i] = toVdom(cn[i]); // Recursively convert children.

  // Empty the original HTML to avoid duplication of children between DOM and virtual DOM.
  element.innerHTML = ``;

  return h(nodeName || element.nodeName.toLowerCase(), props, children); // Create a Preact virtual DOM node.
}
