from flask import Response, jsonify, request
from flask.views import MethodView
from eat_it.controllers import GetUsersRequest, AddUserRequest, PatchUserRequest, PutUserRequest, DeleteUserRequest
from eat_it.controllers import GetUserController, AddUserController, PutUserController, PatchUserController, DeleteUserController


class UserView(MethodView):
    def __init__(self, controller: GetUserController) -> None:
        self.controller = controller
        pass

    def get(self) -> Response:
        try:
            add_user_request = GetUsersRequest()
            self.controller.get(request=add_user_request)
        except NotImplementedError:
            pass
        return Response(status=501)

class UserAddView(MethodView):
    def __init__(self, controller: AddUserController) -> None:
        self.controller = controller
        pass

    def post(self) -> Response:
        try:
            add_user_request = AddUserRequest()
            self.controller.add(request=add_user_request)
        except NotImplementedError:
            pass
        return Response(status=501)

class UserPutView(MethodView):
    def __init__(self, controller: PutUserController) -> None:
        self.controller = controller
        pass

    def put(self, id: int) -> Response:
        try:
            add_user_request = PutUserRequest()
            self.controller.put(request=add_user_request)
        except NotImplementedError:
            pass
        return Response(status=501)

class UserPatchView(MethodView):
    def __init__(self, controller: PatchUserController) -> None:
        self.controller = controller
        pass

    def patch(self, id: int) -> Response:
        try:
            add_user_request = PatchUserRequest()
            self.controller.patch(request=add_user_request)
        except NotImplementedError:
            pass
        return Response(status=501)
    
class UserDeleteView(MethodView):
    def __init__(self, controller: DeleteUserController) -> None:
        self.controller = controller
        pass

    def delete(self, id: int) -> Response:
        try:
            add_user_request = DeleteUserRequest()
            self.controller.delete(request=add_user_request)
        except NotImplementedError:
            pass
        return Response(status=501)