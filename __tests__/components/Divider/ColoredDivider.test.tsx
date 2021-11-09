import React from 'react';
import { ColoredDivider } from 'lib';
import { render } from '../../utils';

describe('<ColoredDivider />', () => {
  it('should render a divider', () => {
    const { container } = render(<ColoredDivider colorId="P10" />);
    expect(container.firstChild?.nodeName).toBe('DIV');
  });

  it('should render a quiet divider', () => {
    const { container } = render(<ColoredDivider colorId="P10" volume="quiet" />);
    expect(container.firstChild?.nodeName).toBe('DIV');
  });
});
