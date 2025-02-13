import { Delete } from 'lucide-react';

export const buttonsMap = [
  { value: 'AC', type: 'clear' },
  { value: '( )', type: 'parentheses' },
  { value: '%', type: 'operator' },
  { value: '÷', type: 'operator' },
  { value: '7', type: 'digit' },
  { value: '8', type: 'digit' },
  { value: '9', type: 'digit' },
  { value: '×', type: 'operator' },
  { value: '4', type: 'digit' },
  { value: '5', type: 'digit' },
  { value: '6', type: 'digit' },
  { value: '-', type: 'operator' },
  { value: '1', type: 'digit' },
  { value: '2', type: 'digit' },
  { value: '3', type: 'digit' },
  { value: '+', type: 'operator' },
  { value: '0', type: 'digit' },
  { value: '•', type: 'dicimalPoint' },
  { value: 'delete', type: 'delete', icon: Delete },
  { value: '=', type: 'equals' }
];
