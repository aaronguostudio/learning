
from flask import Flask, make_response
from config import DEBUG

app = Flask(__name__)
app.config.from_object('config')


# 通过装饰器定义路由
@app.route('/hello')
def hello():
    # 基于函数的视图和基于类的视图，flask 会在这个基础上
    # 添加一些附加的信息:
    #   - status code, http, headers
    #   - content-type = text/html
    # 实际上返回的是 response 对象

    headers = {
        'content-type': 'text/plain'
    }
    # response = make_response('<html></html>', 404) # 状态码只是返回的标识，返回的内容一样可以显示
    # response.headers = headers
    # return response

    # 这个返回方式是 flask 里面比较常用的
    return '<html></html>', 200, headers


# 通过类方法添加路由
# app.add_url_rule('/hello', view_func=hello)


# 开启调试的模式下，Flash自带热启动
# 0.0.0.0 代表可以通过网卡访问
if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=app.config['DEBUG'], port=5000)


# 生产环境下的服务器可以使用 nginx + uwsgi
