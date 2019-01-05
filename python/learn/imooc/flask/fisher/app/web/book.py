from flask import jsonify, request
from helper import is_isbn_or_key
from yushu_book import YuShuBook
from . import web
from app.forms.book import SearchForm

__author__ = 'Aaron'


@web.route('/book/search')
def search():
    """
        :param
        q - 普通关键字或者 ISBN
        page
        ?q=...&page=...
    """

    # request 需要时视图函数中使用，这是一种代理模式。类似 express 传入的 request
    # request.args 返回的是 immutablemultidict
    # 如果要转成普通字典，可以：temp = request.args.to_dict()

    # 参数验证
    # 至少一个字符，长度限制
    # 正整数，需要最大值限制
    # 这里使用 wtforms 库

    try:
        q = request.args['q']
        page = request.args['page']
        form = SearchForm(request.args)
        if form.validate():
            q = form.q.data.strip()
            page = form.page.data
            isbn_or_key = is_isbn_or_key(q)
            if isbn_or_key == 'isbn':
                result = YuShuBook.search_by_isbn(q, page)
            else:
                result = YuShuBook.search_by_keyword(q, page)
            return jsonify(result)
        else:
            return jsonify(form.errors)
    except:
        return jsonify({'msg': '服务器内部错误'})

