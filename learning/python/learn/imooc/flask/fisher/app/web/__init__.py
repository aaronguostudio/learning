from flask import Blueprint

# blueprint
web = Blueprint('web', __name__)

from app.web import book