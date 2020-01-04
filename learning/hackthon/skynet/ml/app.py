"""
ML endpoint
"""
from flask import Flask, make_response, jsonify
from flask_cors import CORS
from lib.predict import predict_year_budget

app = Flask(__name__)
CORS(app)
app.config.from_object('config')

print('Debug Mode', app.config['DEBUG'])


@app.route('/status')
def status():
  """
    Status Endpoint
  """
  headers = {
    'content-type': 'application/json'
  }
  return jsonify({'state': 'OK'})


@app.route('/predict/<year>/<product>')
def predict(year, product):
  """
    Predict Endpoint
    q: year, product
  """
  result = predict_year_budget(year, product)
  return jsonify(result)

if __name__ == '__main__':
  app.run(host='0.0.0.0', port=5000, debug=app.config['DEBUG'])