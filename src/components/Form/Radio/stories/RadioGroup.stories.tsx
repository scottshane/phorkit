import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { Mutable } from 'types/utils';
import { Rhythm } from 'components/Rhythm';
import { Typography } from 'components/Typography';
import { FormComponentDemo } from '../../stories/helpers/FormComponentDemo';
import { RadioGroup, RadioGroupProps } from '../RadioGroup';
import { radios } from './helpers/options';
import RadioGroupDocumentation from './RadioGroup.docs.mdx';

export default {
  title: 'Form/RadioGroup',
  component: RadioGroup,
  argTypes: {
    layout: {
      table: {
        category: 'Appearance',
      },
    },
    legend: {
      control: { type: 'text' },
      table: {
        category: 'Appearance',
      },
    },
    size: {
      table: {
        category: 'Appearance',
      },
    },

    variant: {
      table: {
        category: 'Appearance',
      },
    },

    name: {
      table: {
        category: 'Input',
      },
    },
    radios: {
      table: {
        category: 'Input',
      },
    },
    value: {
      table: {
        category: 'Input',
      },
    },

    onChange: {
      table: {
        category: 'Actions',
      },
    },

    className: {
      control: {
        disable: true,
      },
      table: {
        category: 'Uncommon',
      },
    },
    contrast: {
      table: {
        category: 'Uncommon',
      },
    },
    style: {
      table: {
        category: 'Uncommon',
      },
    },
    themeId: {
      control: {
        disable: true,
      },
      table: {
        category: 'Uncommon',
      },
    },
    unthemed: {
      table: {
        category: 'Uncommon',
      },
    },
  },
  decorators: [
    (Story, { args }) => (
      <FormComponentDemo initialValue={args.value} property="value" type="radio">
        {Story()}
      </FormComponentDemo>
    ),
  ],
  parameters: {
    controls: {
      exclude: ['ref'],
      sort: 'requiredFirst',
    },
    docs: {
      page: RadioGroupDocumentation,
      description: {
        component: 'A group of radios in a fieldset with a legend.',
      },
    },
    layout: 'centered',
  },
} as ComponentMeta<typeof RadioGroup>;

const Template: ComponentStory<typeof RadioGroup> = args => <RadioGroup {...args} />;

const defaultArgs = {
  radios: radios as Mutable<typeof radios>,
  contrast: false,
  layout: 'inline' as RadioGroupProps['layout'],
  legend: 'Super fantastic legend',
  size: 'medium' as RadioGroupProps['size'],
  value: 'one',
  variant: 'primary' as RadioGroupProps['variant'],
};

export const Default = Template.bind({});
Default.args = {
  ...defaultArgs,
};

export const InlineLayout = Template.bind({});
InlineLayout.storyName = 'Layout: Inline';
InlineLayout.args = {
  ...defaultArgs,
  layout: 'inline',
};

export const StackedLayout = Template.bind({});
StackedLayout.storyName = 'Layout: Stacked';
StackedLayout.args = {
  ...defaultArgs,
  layout: 'stacked',
};

export const CustomLabel = Template.bind({});
CustomLabel.args = {
  ...defaultArgs,
  legend: (
    <Rhythm mb={1}>
      <Typography as="legend" variants="medium-caps">
        Super fantastic legend
      </Typography>
    </Rhythm>
  ),
};