import './Mailbox.scss';
import axios from 'axios';
import React, {createRef, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'



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
            '/api/post/tome',
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

        

        const data = {title, content, receiver }
        sendEmail(data);

    };
    const sendEmail = async (data) => {
        await axios.post('/api/mailbox', data,{
            headers: {
                Authentication: localStorage.getItem('token')
                
            }
        }
        );
        await Swal.fire({
            icon: 'success',
            title: 'Wysłano',
            text: 'Wysłano wiadomość',
            timer: 3000
        });
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
            <br></br>
            <div>
            {messages.map(message => <div className="Mailboxmessage" key={message._id}>
                <div className='Mailbox-message'>
                <h2 >Temat: {message.title}</h2>
                <p>Treść: {message.content}</p>
                <p>Od: {message.sender}</p>
                <p>{message.receiver}</p>
            </div>
            <br></br></div>)}
            <br></br>
            </div>
        </div>
    )
}


export default Mailbox;