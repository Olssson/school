from eat_it.app import app

UNIMPLEMENTED = 501

def test_get_users():
    with app.test_client() as client:
        response = client.get('/users')
        assert response.status_code == 501

def test_create_user():
    with app.test_client() as client:
        data = {'name': 'John', 'age': 30}
        response = client.post('/users', json=data)
        assert response.status_code == 201
        assert response.get_json() == {'id': 1, 'name': 'John', 'age': 30}

def test_update_user():
    with app.test_client() as client:
        user_id = 1
        data = {'name': 'John', 'age': 30}
        response = client.put(f'/users/{user_id}', json=data)
        assert response.status_code == 501

def test_partial_update_user():
    with app.test_client() as client:
        user_id = 1
        data = {'name': 'John'}
        response = client.patch(f'/users/{user_id}', json=data)
        assert response.status_code == 501

def test_delete_user():
    with app.test_client() as client:
        user_id = 1
        response = client.delete(f'/users/{user_id}')
        assert response.status_code == 501


def test_integration_create_user():
    with app.test_client() as client:
        data = {'name': 'John', 'age': 30}
        response = client.post('/users', json=data)
        assert response.status_code == 201
        assert response.get_json() == {'id': 1, 'name': 'John', 'age': 30}

        user_id = response.get_json()['id']
        response = client.get(f'/users/{user_id}')
        assert response.status_code == 501

        data = {'name': 'John Smith', 'age': 35}
        response = client.put(f'/users/{user_id}', json=data)
        assert response.status_code == 501

        data = {'age': 40}
        response = client.patch(f'/users/{user_id}', json=data)
        assert response.status_code == 501

        response = client.delete(f'/users/{user_id}')
        assert response.status_code == 501