import React from 'react';
import { TitledToast, TitledToastProps } from './TitledToast';

export interface StyledTitledToastProps extends Omit<TitledToastProps, 'level'> {
  levelColor: string;
  levelInverseColor: string;
}

export const StyledTitledToast = ({ levelColor, levelInverseColor, style, ...props }: StyledTitledToastProps) => {
  return (
    <TitledToast
      {...props}
      level="custom"
      style={
        {
          '--toast-level-color': levelColor,
          '--toast-level-inverse-color': levelInverseColor,
          ...style,
        } as React.CSSProperties
      }
    />
  );
};

/* [TODO:dep] something in emotion causes infinite loops in production
import styled from '@emotion/styled';
import { TitledToast, TitledToastProps } from './TitledToast';

export interface StyledTitledToastProps extends TitledToastProps {
  levelColor: string;
  levelInverseColor: string;
}

export const StyledTitledToast = styled(TitledToast, {
  shouldForwardProp: (prop: string) => !['levelColor', 'levelInverseColor'].includes(prop),
})<StyledTitledToastProps>`
  ${({ levelColor }) => levelColor && `--toast-level-color: ${levelColor};`}
  ${({ levelInverseColor }) => levelInverseColor && `--toast-level-inverse-color: ${levelInverseColor};`}
`;

StyledTitledToast.defaultProps = {
  level: 'custom',
};
*/

StyledTitledToast.displayName = 'StyledTitledToast';