import { v4 as uuidv4 } from 'uuid';
import { Carts } from './types';

const currentDate = new Date();
export const formattedDate = currentDate.toLocaleDateString(undefined, {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
});

export const primary = '#ddddff';
export const secondary = '#9c9cff';
export const initial: Carts = [
  {
    key: uuidv4(),
    title: 'Groceriesssssssssssssssssssssssssssssssssssss',
    date: formattedDate,
    items: [],
  },
  {
    key: uuidv4(),
    title: 'Cakes',
    date: formattedDate,
    items: [],
  },
];
