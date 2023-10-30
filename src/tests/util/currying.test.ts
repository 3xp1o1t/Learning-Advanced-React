import { describe, expect, it } from 'vitest';
import {
  applyDiscount,
  calculateTotal,
  compose,
  filterByPrice,
} from '../../util/currying';

describe('Currying test', () => {
  const products = [
    { id: 1, name: 'Laptop', price: 1000 },
    { id: 2, name: 'Mouse', price: 50 },
    { id: 3, name: 'Keyboard', price: 150 },
    { id: 4, name: 'Monitor', price: 300 },
    { id: 5, name: 'Headphones', price: 80 },
  ];

  it('should filter products if price >= 100', () => {
    const getFilteredProductsCompositor = compose(filterByPrice(100));

    expect(getFilteredProductsCompositor(products)).toEqual([
      { id: 1, name: 'Laptop', price: 1000 },
      { id: 3, name: 'Keyboard', price: 150 },
      { id: 4, name: 'Monitor', price: 300 },
    ]);
  });

  it('should apply 10% discount to all filtered products with prices >= 100', () => {
    const getDiscountCompositor = compose(
      filterByPrice(100),
      applyDiscount(0.1),
    );

    expect(getDiscountCompositor(products)).toEqual([
      { id: 1, name: 'Laptop', price: 900 },
      { id: 3, name: 'Keyboard', price: 135 },
      { id: 4, name: 'Monitor', price: 270 },
    ]);
  });

  it('calculate the total of all filtered products with prices >= 100 and discount of 10% to equal 1305', () => {
    const getCalculateTotalCompositor = compose(
      filterByPrice(100),
      applyDiscount(0.1),
      calculateTotal,
    );

    expect(getCalculateTotalCompositor(products)).toEqual(1305);
  });
});
