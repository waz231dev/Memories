import './Buttons.scss'
const Login = ({ className, login, openModal }) => {
    return <button className={className} onClick={() => { login(), openModal() }}>Log in</button>
}

const Signup = ({ className, signup, openModal }) => {
    return <button className={className} onClick={() => { signup(), openModal() }}>Sign up</button>
}

export default { Login, Signup };