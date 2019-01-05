from httper import HTTP
from flask import current_app

class YuShuBook:

    isbn_url = 'http://t.yushu.im/v2/book/isbn/{}'
    keyword_url = 'http://t.yushu.im/v2/book/search?q={}&count={}&start={}'

    @classmethod
    def search_by_isbn(cls, isbn, page=1):
        url = cls.isbn_url.format(isbn)
        result = HTTP.get(url)
        return result

    @classmethod
    def search_by_keyword(cls, keyword, page=1):
        start = cls.calculate_start(page)
        url = cls.keyword_url.format(keyword, current_app.config['PER_PAGE'], start)
        result = HTTP.get(url)
        return result
        pass

    @staticmethod
    def calculate_start(page):
        return (page - 1) * current_app.config['PER_PAGE']