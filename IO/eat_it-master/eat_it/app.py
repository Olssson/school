from flask import Flask, Response, request, jsonify

from eat_it.controllers import AddUserController, UserRequest, \
                               DeleteUserController, UpdateUserController, \
                               PutUserController, GetUserController
from eat_it.repositories import UserRepository

app = Flask(__name__)


@app.get("/ping")
def ping():
    return Response(status=501)


@app.post('/users')
def create_user() -> Response:
    user = request.json
    repository = UserRepository()
    controller = AddUserController(repository=repository)
    add_user_request = UserRequest(user=user)
    controller.add(request=add_user_request)
    return jsonify(user)


@app.delete('/users/<user_id>')
def delete_user() -> Response:
    user = request.json
    repository = UserRepository()
    controller = DeleteUserController(repository=repository)
    delete_user_request = UserRequest(user=user)
    controller.delete(request=delete_user_request)
    return jsonify(user)


@app.patch('/users/<user_id>')
def update_user() -> Response:
    user = request.json
    repository = UserRepository()
    controller = UpdateUserController(repository=repository)
    update_user_request = UserRequest(user=user)
    controller.update(request=update_user_request)
    return jsonify(user)


@app.put('/users/<user_id>')
def put_user() -> Response:
    user = request.json
    repository = UserRepository()
    controller = PutUserController(repository=repository)
    put_user_request = UserRequest(user=user)
    controller.replace(request=put_user_request)
    return jsonify(user)


@app.get('/users/<user_id>')
def get_user() -> Response:
    user = request.json
    repository = UserRepository()
    controller = GetUserController(repository=repository)
    get_user_request = UserRequest(user=user)
    user = controller.get(request=get_user_request)
    return jsonify(user)

@app.get('/users/<id>')
def get_users(id):
    user = request.json
    repository = UserRepository()
    controller = GetUserController(repository=repository)
    get_user_request = UserRequest(user=user)
    user = controller.get(request=get_user_request)
    return 501