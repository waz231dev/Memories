import { useState } from 'react'
import logo from '../../assets/Logo.svg'
import AuthForm from '../AuthForm/AuthForm'
import './Navbar.scss'
import Overlay from '../Overlay/Overlay'
import Buttons from '../Buttons/Buttons'
const Navbar = () => {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isSignup, setIsSignup] = useState(false)

    const openModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    const signup = () => {
        setIsSignup(true)
    }

    const login = () => {
        setIsSignup(false)
    }

    return (
        <>
            <header>
                <nav>
                    <div className="left">
                        <div className="logo">
                            <img src={logo} alt="Logo" />
                        </div>
                        <div className="brandName">Timeline</div>
                    </div>
                    <div className="right">
                        <div className='login-btn-container'>
                            <Buttons.Login
                                className='btn'
                                login={login}
                                openModal={openModal}
                            />
                        </div>
                        <div className='signup-btn-container'>
                            <Buttons.Signup
                                className='sec-btn'
                                signup={signup}
                                openModal={openModal}
                            />
                        </div>
                    </div>
                </nav>
            </header>
            <Overlay
                isOpen={isModalOpen}
                onClose={closeModal}
            />
            <AuthForm
                isSignup={isSignup}
                onLogin={login}
                onSignup={signup}
                isOpen={isModalOpen}
                onClose={closeModal}
                onOpen={openModal}
            />
        </>
    )
}

export default Navbar