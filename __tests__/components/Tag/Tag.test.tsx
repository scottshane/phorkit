import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { Tag } from 'lib';
import { AsTypeA } from '__mocks__/AsType.mock';

describe('<Tag />', () => {
  it('should render a basic tag', () => {
    const { container, getByText } = render(<Tag label="Click me!" />);
    expect(container.firstChild?.nodeName).toBe('DIV');
    expect(getByText('Click me!')).toBeTruthy();
  });

  it('should render a tag as an anchor', () => {
    const { container, getByText } = render(<Tag<'a'> actionable as="a" href="#tag" label="Click me!" />);
    expect(container.firstChild?.nodeName).toBe('A');
    expect(container.firstChild).toHaveAttribute('href', '#tag');
    expect(getByText('Click me!')).toBeTruthy();
  });

  it('should render a tag as a clickable button', () => {
    const onClick = jest.fn();
    const { container, getByText } = render(
      <Tag<'button'> actionable as="button" label="Click me!" onClick={onClick} />,
    );
    expect(container.firstChild?.nodeName).toBe('BUTTON');
    expect(getByText('Click me!')).toBeTruthy();

    expect(onClick).not.toHaveBeenCalled();

    const tag = getByText('Click me!');
    fireEvent.click(tag);

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should render a tag using a functional component', () => {
    const { container, getByText } = render(<Tag<'a'> actionable as={AsTypeA} href="#tag" label="Click me!" />);
    expect(container.firstChild?.nodeName).toBe('A');
    expect(container.firstChild).toHaveAttribute('href', '#tag');
    expect(getByText('Click me!')).toBeTruthy();
  });
});
