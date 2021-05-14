export type DropdownOption = {
  id: string;
  value?: string | number;
  /** The label is the line item shown in the dropdown */
  label: React.ReactElement | string;
  /** The selectedLabel is what's shown in the main dropdown view when the item is selected */
  selectedLabel?: string;
  [x: string]: unknown;
};

export type DropdownInputVariant = 'underline' | 'filled' | 'outline' | 'minimal';
export type DropdownLayout = 'raised' | 'contained';
export type DropdownListVariant = 'bordered' | 'shadowed' | 'divided' | 'unboxed';
export type DropdownListSize = 'xsmall' | 'small' | 'medium';
export type DropdownListColor = 'primary' | 'minimal';
