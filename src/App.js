export const add = (x, y) => x + y;

export const total = (subtotal, shipping) => {
  return '$' + add(subtotal, shipping);
};
