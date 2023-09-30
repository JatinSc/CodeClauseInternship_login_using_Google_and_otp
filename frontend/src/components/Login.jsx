import { React } from 'react'
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup , GithubAuthProvider} from 'firebase/auth'
import { NavLink, useNavigate } from "react-router-dom";
import '../Styles/auth.css'
import { useUser } from '../Context/UserContext';



const Login = () => {
    const { user, setUser } = useUser()
    const navigate = useNavigate()

    const firebaseConfig = {
        apiKey: "AIzaSyB5Q4gljYCV3iojpMWSLxaHdYWFBvYB7KQ",
        authDomain: "authwith-e6e3a.firebaseapp.com",
        projectId: "authwith-e6e3a",
        storageBucket: "authwith-e6e3a.appspot.com",
        messagingSenderId: "330965295846",
        appId: "1:330965295846:web:0a43a7d2f64979c56b9127"
    };

    //?// Initialize Firebase
    const app = initializeApp(firebaseConfig);

    //# its used to get info about who is currently authenticated
    const auth = getAuth(app)
    const GoogleProvider = new GoogleAuthProvider()
    const GitHubProvider = new GithubAuthProvider()
    

    const signInWithGoogle = () => {
        signInWithPopup(auth, GoogleProvider)
            .then((result) => {
                const name = result.user.displayName
                const email = result.user.email
                const photoURL = result.user.photoURL
                const userId = result.user.reloadUserInfo.localId
                const userInfo = { name, email, photoURL, userId };
                localStorage.setItem("user", JSON.stringify(userInfo))
                setUser(userInfo)
                navigate('/', { replace: true })
                console.log(user)
                console.log(result.user)

            })
            .catch((error) => {
                console.log(error)
            })

    }

    const signInWithGitHub = () => {
        signInWithPopup(auth, GitHubProvider)
            .then((result) => {
                const name = result.user.reloadUserInfo.screenName
                const email = result.user.email
                const photoURL = result.user.photoURL
                const userId = result.user.reloadUserInfo.localId
                const userInfo = { name, email, photoURL, userId };
                localStorage.setItem("user", JSON.stringify(userInfo))
                setUser(userInfo)
                navigate('/', { replace: true })
                console.log(user)
                console.log(result.user)

            })
            .catch((error) => {
                console.log(error)
            })

    }
    // This gives you a Google Access Token. You can use it to access the Google API.

    return (
        <>
            <div className="authContainer">
                {user && user.displayName}
                <h2>Welcome Back </h2>
                <div className="formGroup">
                    <label htmlFor="email">Email</label>
                    <input placeholder='Enter your Email' type="email" id='email'/>
                    <img src="email.svg" alt="email" />
                </div>
                <div className="formGroup">
                    <label htmlFor="password">Password</label>
                    <input placeholder='Enter your Password' type="password" id='password'/>
                    <img src="lock.svg" alt="password" />
                </div>
                <p>Forgot Password ?</p>
                <button className='signBtn' >Sign In</button>
                <div className='signup'><p id='p'>Don't have an account ? <NavLink className="NavLink" to='/register'>Sign up</NavLink></p></div>
                <hr />
                <div className='googleAuth'>

                    <button onClick={signInWithGoogle}><img src="google.svg" alt="google" />Google</button>
                    <button onClick={signInWithGitHub}><img src="github1.svg" alt="google" />GitHub</button>
                </div>
            </div>
        </>
    )
}

export default Login;