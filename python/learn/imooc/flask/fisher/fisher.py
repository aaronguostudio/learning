import json

from flask import Flask, jsonify
from helper import is_isbn_or_key
from yushu_book import YuShuBook

app = Flask(__name__)
app.config.from_object('config')


@app.route('/book/search/<q>/<page>')
def search(q, page):
    """
        :param
        q - 普通关键字或者 ISBN
        page
    """
    isbn_or_key = is_isbn_or_key(q)
    if isbn_or_key == 'isbn':
        result = YuShuBook.search_by_isbn(q)
    else:
        result = YuShuBook.search_by_keyword(q)

    return jsonify(result)
    # return json.dumps(result), 200, {'content-type': 'application/json'}


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=app.config['DEBUG'], port=5000)


# 生产环境下的服务器可以使用 nginx + uwsgi
