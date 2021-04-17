import {Store} from './store';

export const 2ndhnd: Store = {
  currency: '£',
  labels: {
    inStock: {
      container: 'button[data-test="product-form--atc-button"',
      text: ['Add to cart'],
    },
    maxPrice: {
      container: 'li[itemprop="price"]',
    },
  },
  links: [
    {
      brand: 'hermanmiller',
      model: 'aeron',
      series: 'sizec',
      url: 'https://www.2ndhnd.com/collections/herman-miller/products/copy-of-herman-miller-aeron-chair-size-c',
    },
  ],
  name: '2ndhnd',
};
