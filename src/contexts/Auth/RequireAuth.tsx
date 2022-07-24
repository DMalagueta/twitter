import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Login  from "../../components/layout/Login";
import { AuthContext } from "./AuthContext";

export const RequireAuth = ({children} : {children:JSX.Element}) => {

    const auth = useContext(AuthContext);

    if (!auth.user){
        return <Login />
    }

    return children;
}