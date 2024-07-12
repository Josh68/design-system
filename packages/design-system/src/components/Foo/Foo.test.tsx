import Foo from './Foo';
import { render, screen } from '@testing-library/react';

const defaultProps = {
  children: 'Hello, world!',
};

function renderFoo(props = {}) {
  return render(<Foo {...defaultProps} {...props} />);
}

describe('Foo', () => {
  it('should render a default foo', () => {
    renderFoo();
    const f = screen.getByText('Hello, world!');
    expect(f).toMatchSnapshot();
  });

  it('applies a mistyrose background', () => {
    renderFoo({ bool: true });
    const f = screen.getByText('Hello, world!');
    expect(f.style.backgroundColor).toContain('mistyrose');
  });
});
