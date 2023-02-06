import './Mailbox.scss';
import axios from 'axios';
import React, {createRef, useEffect, useState} from 'react';



const Mailbox = () => {
    const titleRef = createRef();
    const contentRef = createRef();
    const senderRef = createRef();
    const receiverRef = createRef();
    const [users, setUsers] = useState([]);

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

    useEffect(() => {
        getUsers();
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
                <button className="olsonMaMałego"onClick={sendEmailHandler}>Wyślij</button>
                <div id = 'email'>
                
                </div>
            </form>
            
        </div>
    )
}


export default Mailbox;