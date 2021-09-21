import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { Typography } from 'components/Typography';
import { Link } from '../Link';
import LinkDocumentation from './Link.docs.mdx';

export default {
  title: 'Navigation/Link',
  component: Link,
  argTypes: {
    children: {
      control: { type: 'text' },
    },

    underline: {
      table: {
        category: 'Appearance',
      },
    },
    block: {
      control: { type: 'text' },
      table: {
        category: 'Appearance',
      },
    },

    href: {
      table: {
        category: 'Anchor',
      },
    },
    target: {
      table: {
        category: 'Anchor',
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
    unstyled: {
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
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
    docs: {
      page: LinkDocumentation,
      description: {
        component: 'An anchor tag with some standardized styles.',
      },
    },
    layout: 'centered',
  },
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = args => <Link {...args} />;

const defaultArgs = {
  children: 'I am a link.',
  contrast: false,
  href: 'https://phorkit.org',
  target: '_blank',
  underline: false,
  unstyled: false,
  unthemed: false,
};

export const Default = Template.bind({});
Default.args = {
  ...defaultArgs,
};

export const Inline = Template.bind({});
Inline.args = {
  ...defaultArgs,
};

Inline.decorators = [Story => <Typography size="large">Hello world. {Story()}</Typography>];
Inline.parameters = {
  docs: {
    source: {
      excludeDecorators: false,
    },
  },
};

export const Block = Template.bind({});
Block.args = {
  ...defaultArgs,
  block: true,
};

Block.decorators = [Story => <Typography size="large">Hello world. {Story()}</Typography>];
Block.parameters = {
  docs: {
    source: {
      excludeDecorators: false,
    },
  },
};

export const Underlined = Template.bind({});
Underlined.args = {
  ...defaultArgs,
  underline: true,
};

export const Unstyled = Template.bind({});
Unstyled.args = {
  ...defaultArgs,
  unstyled: true,
  unthemed: true,
};
