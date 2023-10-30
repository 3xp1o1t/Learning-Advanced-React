/**
 * Example of currying functions.
 * Given a list of products with a prices
 * implement 3 curried functions:
 *  - product price greater or equal than 100
 *  - discount in %
 *  - final total price
 * implement a composition function helper using reduce
 *  - compose
 * export curried/compose functions just for testing purposes
 */

type ProductsProps = {
  id: number;
  name: string;
  price: number;
};

export const filterByPrice =
  (threshold: number) => (products: ProductsProps[]) =>
    products.filter((product) => product.price >= threshold);

export const applyDiscount =
  (percentage: number) => (products: ProductsProps[]) =>
    products.map((product) => ({
      ...product,
      price: product.price * (1 - percentage),
    }));

export const calculateTotal = (products: ProductsProps[]) =>
  products.reduce((total, product) => total + product.price, 0);
export const compose =
  (...funcs: ((data: ProductsProps[]) => ProductsProps[])[]) =>
  (data: ProductsProps[]) =>
    funcs.reduce((value, func) => func(value), data);

// Generic implementation -> works well.
// export const compose =
//   <TProducts>(...funcs: ((data: TProducts[]) => TProducts[])[]) =>
//   (data: TProducts[]) =>
//     funcs.reduce((value, func) => func(value), data);

export const getTotalAfterDiscount = compose(
  filterByPrice(100),
  applyDiscount(0.1),
  calculateTotal,
);
