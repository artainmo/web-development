from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager

app = Flask(__name__)

login = LoginManager(app)

login.login_view = 'login'

import routes, models

app.myconfig['SQLALCHEMY_DATABASE_URI'] = 'sqlite://my_database.db'

db = SQLAlchemy(app)
