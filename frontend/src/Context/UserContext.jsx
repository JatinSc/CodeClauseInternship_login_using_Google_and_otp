import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate , useLocation} from "react-router-dom";

const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate()
    const location = useLocation()
    const checkUserLoggedIn = () => {
        try {
            if (localStorage.getItem("user")) {
                if (
                    location.pathname === "/login" ||
                    location.pathname === "/register"
                ) {
                    setTimeout(() => {
                        navigate("/", { replace: true });
                    }, 1000);
                } else {
                    navigate(location.pathname ? location.pathname : "/");
                }
                setUser(JSON.parse(localStorage.getItem("user")));
                console.log(user)
            } else {
                navigate("/login", { replace: true });
            }
        } catch (error) {
            console.log(error);
        }
        
    }

    useEffect(() => {
        checkUserLoggedIn()
    },[])

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

//? this is a custom hook .
//# it's use is , when we are accessing the user state in other components so at that time
//# we don't need to import useContext(AuthContext); and use it like this const { user, setUser } = useContext(AuthContext)

export const useUser = () => {
    return useContext(UserContext);
};