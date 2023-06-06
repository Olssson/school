import axios from 'axios';
import React, {createRef, useEffect, useState} from 'react';
import './Dashboard.scss';
import Swal from 'sweetalert2'


const Dashboard = () => {
    const nameRef = createRef();
    const surnameRef = createRef();
    const emailRef = createRef();
    const passwordRef = createRef();
    const [users, setUsers] = useState([]);
    const _isIncorrectEmail = (mail) => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) return false;
    
        return true;
    };

    const getUsers = async () => {
        const response = await axios.get(
            '/api/users',
        {headers: "Authorization: " + localStorage.getItem('token')});
        setUsers(response.data.users);
    };

    useEffect(() => {
        getUsers();
    }, []);


    const addEmailHandler = (e) => {
        e.preventDefault();
        
        const name = nameRef.current.value,
              surname = surnameRef.current.value,
              email = emailRef.current.value,
              password = passwordRef.current.value;
        
        if (name === '' || surname === '' || email === '' || password === '') {
            alert('Wypełnij wszystkie pola');
            return;
        }

        if (_isIncorrectEmail(email)) {
            alert('Niepoprawny email');
            return;
        }

        addUser({name, surname, email, password});
        

        const data = { name, surname, email, password };

        console.log(data);
    };

    const deleteUser = async (id) => {
        await axios.delete(`/api/users/${id}`);
        getUsers();
    };
    const addUser = async (data) => {
        await axios.post('/api/users', data);
        getUsers();
    };

    

    return (
        <div className='Dashboard-container'>
            <h1>Welcome in mailer Dashboard</h1>
            <form>
                <input ref={nameRef} type='text' placeholder='Imię' />
                <input ref={surnameRef} type='text' placeholder='Nazwisko' />
                <input ref={emailRef} type='text' placeholder='Email' />
                <input ref={passwordRef} type='password' placeholder='Hasło' />
                <button onClick={addEmailHandler}>Dodaj</button>
            </form>
            <div className='userlist'>
                <h2>Lista użytkowników</h2>
                <ul>
                    {users.map((user, index) => {
                        return (
                            <li key={index}>
                                <p>{user.name}</p>
                                <p>{user.surname}</p>
                                <p>{user.email}</p>
                                <p>{user.password}</p>
                                <button onClick={() => deleteUser(user._id)}>Usuń</button>
                            </li>
                        )
                    }
                    )}
                </ul>
            </div>
        </div>
    )
};

export default Dashboard;