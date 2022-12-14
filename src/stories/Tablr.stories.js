import { Tablr } from '../Tablr';

export default {
    title: 'Tablr - A Customizable React Table Component',
    component: Tablr,
    argTypes: {
      rows: { control: '' }
    }
};

const Template = args => <Tablr {...args} />;

export const Default = Template.bind({});

Default.args = {
  headers: ['Col 1', 'Col 2', 'Col 3', 'Col 4', 'Col 5'],
  rows: [
    ['This', 'is', 'just', 'a', 'test'],
    ['This', 'is', 'also', 'a', 'test'],
    ['Just', 'a', 'little', 'more', 'data'],
    ['Row', 'number', 'four', 'right', 'here'],
  ],
};