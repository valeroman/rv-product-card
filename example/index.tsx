import * as React from 'react';
import 'react-app-polyfill/ie11';
import * as ReactDOM from 'react-dom';
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../.';

const product = {
  id: '1',
  title: 'Coffee Mug - Card',
  // img: './coffee-mug.png',
}

const App = () => {
  return (
    <>
      <ProductCard
          product={ product }
          initialValues={{
              count: 4,
              // maxCount: 10
          }}
      >
          {
              ({ reset, increaseBy, maxCount, count, isMaxCountReached }) => (
                  <>
                      <ProductImage />
                      <ProductTitle />
                      <ProductButtons />
                  </>
              )
          }
      </ProductCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
