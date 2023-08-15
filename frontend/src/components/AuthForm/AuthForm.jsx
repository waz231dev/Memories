import React from 'react';
import './AuthForm.scss';
import { BsXCircle } from "react-icons/bs";
import Buttons from '../Buttons/Buttons';

const AuthForm = ({ isSignup, onLogin, onSignup, isOpen, onClose, onOpen }) => {

    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="close-btn" onClick={onClose}>
                {<BsXCircle />}
            </div>
            <div className="form-container">
                <form action="" method="post">
                    {isSignup &&
                        <div>
                            <label htmlFor="name">Name</label>
                            <br />
                            <input type="text" name="" id="name" placeholder='Name' />
                        </div>
                    }
                    <div>
                        <label htmlFor="email">Email Address</label>
                        <br />
                        <input type="email" name='' id='email' placeholder='Email' />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <br />
                        <input type="password" name='' id='password' placeholder='Password' />
                    </div>
                    <div>
                        <button type="submit">{isSignup ? 'Sign up' : 'Log in'}</button>
                    </div>
                </form>
            </div>
            <div>
                {isSignup ?
                    (
                        <span>
                            Already have an account ?
                            <Buttons.Login className='sec-btn' login={onLogin} openModal={onOpen} />
                        </span>
                    ) :
                    (
                        <span>
                            Don't have an account ?
                            <Buttons.Signup className='sec-btn' signup={onSignup} openModal={onOpen} />
                        </span>
                    )
                }
            </div>
        </div>
    )
}

export default AuthForm 