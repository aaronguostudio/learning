# Filter
- Multi filters
  {{ product.price | currency | lowercase }}
- Parameters
  {{ product.price | currence: 'USD':'symbol':'1.2-2' }}