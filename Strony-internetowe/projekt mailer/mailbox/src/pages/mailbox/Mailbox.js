import './Mailbox.scss';
import axios from 'axios';
import React, {createRef, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';



const Mailbox = () => {
    const titleRef = createRef();
    const contentRef = createRef();
    const senderRef = createRef();
    const receiverRef = createRef();
    const [users, setUsers] = useState([]);

    const navigate = useNavigate();

    const getUsers = async () => {
        const response = await axios.get(
            '/api/mailbox',
        {
            headers: {
                Authentication: localStorage.getItem('token')
            }
        }
        );
        setUsers(response.data.users);
    };

    const [messages, setMessages] = useState([]);

    const getMessages = async () => {
        const response = await axios.get(
            '/api/posts',
        {
            headers: {
                Authentication: localStorage.getItem('token')
            }
        }
        );
        setMessages(response.data.messages);
    };

    useEffect(() => {
        if (!localStorage.getItem('token')) navigate('/');
        getUsers();
        getMessages();
    }, []);

    

    const sendEmailHandler = (e) => {
        e.preventDefault();
    const
            title = titleRef.current.value,
            content = contentRef.current.value,
            receiver = receiverRef.current.value;

        

        sendEmail({ title, content, receiver});

        const data = {title, content, receiver }
        

        console.log(data);
    };
    const sendEmail = async (data) => {
        await axios.post('/api/mailbox', data,{
            headers: {
                Authentication: localStorage.getItem('token')
                
            }
        }
        );
        document.getElementById("email").innerHTML = 'Wysłano wiadomość'
        getUsers();
    };
    

    

    return (
        <div className='Mailbox-container'>
            <h1>Mailer admin</h1>
            <form>
                <div className='Mailbox-inputs'>
                    <input type='text' ref={titleRef} placeholder='Tytuł' />
                    <textarea type='text' ref={contentRef} placeholder='Treść' />
                    <select ref={receiverRef}>
                        {users.map(user => <option key={user._id} value={user.email}>{user.email}</option>)}
                    </select>
                </div>
                <button className="o"onClick={sendEmailHandler}>Wyślij</button>

            </form>
            <div id="email">
            {messages.map(message => <div className="Mailbox-message" key={message._id}>
                <h2>{message.title}</h2>
                <p>{message.content}</p>
                <p>{message.sender}</p>
                <p>{message.receiver}</p>
                <p>{message.read}</p>
            </div>)}
            </div>
        </div>
    )
}


export default Mailbox;