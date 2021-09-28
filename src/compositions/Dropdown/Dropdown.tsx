import React, { Reducer, useReducer } from 'react';
import { InteractiveGroupStateAction } from '../../components/InteractiveGroup/interactiveGroupActions';
import {
  getInteractiveGroupInitialState,
  interactiveGroupReducer,
  InteractiveGroupState,
} from '../../components/InteractiveGroup/interactiveGroupReducer';
import { PartialDropdown, PartialDropdownHandles, PartialDropdownProps } from './PartialDropdown';
import { DropdownOption } from './types';

export interface DropdownProps extends Omit<PartialDropdownProps, 'reducer'> {
  initialSelected: DropdownOption[];
}

export function DropdownBase(
  { initialSelected, options, ...props }: DropdownProps,
  forwardedRef: React.ForwardedRef<PartialDropdownHandles>,
): React.ReactElement<DropdownProps> {
  const reducer = useReducer<Reducer<InteractiveGroupState<string>, InteractiveGroupStateAction<string>>>(
    interactiveGroupReducer,
    getInteractiveGroupInitialState({ items: [], selectedIds: initialSelected?.map(({ id }) => id) }),
  );

  return <PartialDropdown options={options} reducer={reducer} ref={forwardedRef} {...props} />;
}

export const Dropdown = React.forwardRef(DropdownBase);

// note that the base element cannot have a displayName because it breaks Storybook
Dropdown.displayName = 'Dropdown';
