import React, { useState } from 'react'
import "./style.css"
import {useNavigate} from 'react-router-dom'
const Login = () => {
    const [name, setname] = useState("");
    const [pass, setPass] = useState("");
    const [isUser, setIsUser] = useState(false);
    const navigate = useNavigate()

    const listUser = [
        { name: 'danken', pass: '12345' },
        { name: 'khuong', pass: 'khuong1' },
    ]

    const handleLogin = () => {
        listUser.forEach(item => {
            if (item.name === name && item.pass === pass) {
                setIsUser(true)
               navigate('/home')
            }
        })
    }
    return (
        <div className='login'>
            <div className="form">
                {isUser ? (<p>Dang nhap thanh cong</p>) : ""}
                <div className="form-group">
                    <label htmlFor="">Tai khoan</label>
                    <input onChange={(e) => setname(e.target.value)} type="text" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Mat khau</label>
                    <input onChange={(e) => setPass(e.target.value)} type="text" />
                </div>
                <button onClick={handleLogin}>Dang nhap</button>
            </div>
        </div>
    )
}

export default Login

