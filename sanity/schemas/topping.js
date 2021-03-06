import { FaPepperHot as pepper } from 'react-icons/fa';
import { MdCheckBox } from 'react-icons/md';

export default {
  // computer name
  name: 'topping',
  // visibile title
  title: 'Toppings',
  type: 'document',
  icon: pepper,
  fields: [
    {
      name: 'name',
      title: 'Topping Name',
      type: 'string',
      description: 'What is the name of the topping',
    },
    {
      name: 'vegetarian',
      title: 'Vegetarian',
      type: 'boolean',
      description: 'What is the name of the topping',
      options: {
        layout: 'checkbox',
      },
    },
  ],
  preview: {
    select: {
      name: 'name',
      vegetarian: 'vegetarian',
    },
    prepare: ({ name, vegetarian }) => ({
      title: `${name} ${vegetarian ? '🌱' : ''}`,
    }),
  },
};
