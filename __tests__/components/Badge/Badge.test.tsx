import React from 'react';
import { Badge } from 'lib';
import { render } from '../../utils';

describe('<Badge />', () => {
  it('should render a marker badge', () => {
    const { container } = render(<Badge shape="marker" />);
    expect(container.firstChild?.nodeName).toBe('DIV');
  });

  it('should render a point badge', () => {
    const { container } = render(<Badge shape="point" />);
    expect(container.firstChild?.nodeName).toBe('DIV');
  });

  it('should render a count badge', () => {
    const { getByText } = render(<Badge shape="count">213</Badge>);
    expect(getByText('213')).toBeTruthy();
  });

  it('should render a label badge', () => {
    const { getByText } = render(<Badge shape="label">Beta</Badge>);
    expect(getByText('Beta')).toBeTruthy();
  });

  it('should render the contrast colors', () => {
    const { getByText } = render(
      <Badge contrast shape="label">
        Beta
      </Badge>,
    );
    expect(getByText('Beta')).toBeTruthy();
  });

  it('should accept the rest of the props', () => {
    const { getByText } = render(
      <Badge
        outlined
        pulsing
        unthemed
        className="badgeTest"
        color="success"
        position="top-left"
        shape="label"
        style={{ color: 'red' }}
      >
        Beta
      </Badge>,
    );
    expect(getByText('Beta')).toBeTruthy();
  });
});
