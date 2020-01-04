# 环境要求
- python 3.6
- pip 9.0
- pipenv
  - pip install pipenv
  - pipenv install
  - pipenv shell // 开启虚拟环境
  - pipenv install flask // 这里是在虚拟环境中安装
  - exit
  - pipenv uninstall package-name // 卸载
  - pipenv graph // 查看包的依赖
  - pipenv --venv // 查看虚拟环境的路径

# IDE 注意需要配置解析器的路径

# 项目使用 requests 包进行 http 请求
- pipenv install requests