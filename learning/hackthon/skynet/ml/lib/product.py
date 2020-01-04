import urllib
from .http import HTTP

class Product:

  url = 'http://localhost:10010/transactions/report?year={}&product={}'

  @classmethod
  def search_by_year_and_product(cls, year, product):
    url = cls.url.format(year, urllib.parse.quote(product))
    result = HTTP.get(url)
    return result