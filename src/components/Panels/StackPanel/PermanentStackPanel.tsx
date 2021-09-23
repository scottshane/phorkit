import { cx } from '@emotion/css';
import React from 'react';
import styles from './styles/StackPanel.module.css';

export interface PermanentStackPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  fixed?: boolean;
  height?: number;
  position: 'top' | 'bottom';
  /** Raise the panel above other elements by using a high z-index */
  raised?: boolean;
  style?: React.CSSProperties;
  unit?: 'px' | 'percent';
}

export const PermanentStackPanel = React.forwardRef<HTMLDivElement, PermanentStackPanelProps>(
  (
    { children, className, fixed, height, position, raised, style: initStyle, unit: initUnit = 'px', ...props },
    forwardedRef,
  ): React.ReactElement<PermanentStackPanelProps> => {
    const classes = cx(
      styles.sidePanel,
      fixed && styles['stackPanel--fixed'],
      raised && styles['stackPanel--raised'],
      styles[`stackPanel--${position}`],
      className,
    );

    const style = { ...initStyle };

    const unit = initUnit === 'percent' ? '%' : initUnit;
    height && (style.height = `${height}${unit}`);

    return (
      <div className={classes} ref={forwardedRef} style={style} {...props}>
        {children}
      </div>
    );
  },
);

PermanentStackPanel.displayName = 'PermanentStackPanel';
