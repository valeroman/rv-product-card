# RV-Product-Card
  Es un paquete de pruebas de despliegue a NPM

### Román Valero

## Ejemplo
```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'rv-product-card';
```

```
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
  ```