import React, { useState } from 'react';
import Nav from './component/Nav';

export default function Signup() {
    const [redirect, setRedirect] = useState(false);
    const Handlesumbit = async (e) => {
        e.preventDefault();
        const first = e.target.first.value;
        const last = e.target.last.value;
        const username = e.target.username.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const reqbody = {
            first: first,
            last: last,
            username: username,
            email: email,
            password: password
        }
        const url = `http://127.0.0.1:5000/api/signup`
        const options = {
            method: 'POST',
            body: JSON.stringify(reqbody),
            headers: {
                'Content-type': 'application/json'
            }
        }


        const res = await fetch(url, options);
        const data = await res.json();
        console.log(data)
        if (data.status === 'ok') {
            setRedirect(true)
        }


    };


    return redirect ? <Nav to='/login' /> :
        (
            <div className='container'>
                <h1 className='row d-flex justify-content-center'>Signup</h1>
                <div className='row d-flex justify-content-center my-5'>
                    <form className='col-3 text-center' onSubmit={Handlesumbit}>
                        <input type='text' className='form-control' placeholder='first name' name="first"></input>
                        <input type='text' className='form-control' placeholder='last name' name="last"></input>
                        <input type='text' className='form-control' placeholder='Username' name="username"></input>
                        <input type='text' className='form-control' placeholder='Email' name="email"></input>
                        <input type='password' className='form-control' placeholder='Password' name="password"></input>
                        <button type='submit' className='btn btn-primary'>Submit</button>
                    </form>
                </div>
            </div>
        )
}

