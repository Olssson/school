from flask import Flask, Response, request, jsonify

from eat_it.controllers import AddUserController, AddUserRequest
from eat_it.repositories import UserRepository

app = Flask(__name__)


class User:
    def __init__(self, id, name, age):
        self.id = id
        self.name = name
        self.age = age

class UserDTO:
    def __init__(self, name, age):
        self.name = name
        self.age = age


@app.route('/users', methods=['GET'])
def get_users():
    raise NotImplementedError()

@app.route('/users', methods=['POST'])
def create_user():
    data = request.get_json()
    user_dto = UserDTO(**data)
    user = User(id=1, **data)
    return jsonify({'id': user.id, 'name': user.name, 'age': user.age}), 201

@app.route('/users/<int:user_id>', methods=['PUT'])
def update_user(user_id):
    raise NotImplementedError()

@app.route('/users/<int:user_id>', methods=['PATCH'])
def partial_update_user(user_id):
    raise NotImplementedError()

@app.route('/users/<int:user_id>', methods=['DELETE'])
def delete_user(user_id):
    raise NotImplementedError()
