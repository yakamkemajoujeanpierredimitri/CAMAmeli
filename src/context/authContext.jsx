import { createContext , useContext ,useReducer , useEffect } from "react";
import { userCheck } from "../service/user.service";
const AuthContext = createContext();
const authInitialState = 
{
    user:null,
    isAuthenticated:false,
    loading:false,
    error:null
}
const authReducer = (state,action)=>{
    switch(action.type){
        case "LOGIN_SUCCESS":
            return{
                ...state,
                user:action.payload,
                isAuthenticated:true,
            }
        case "LOGOUT":
            return{
                ...authInitialState
            }
        case "AUTH_CHECK":
            //console.log('Auth Check User:', action.payload.user);
            return{
                user:action.payload.user,
                isAuthenticated:action.payload.check,
                loading:false,
                error:null
            }
        case "ERROR":
            return{
                ...state,
                error:action.payload,
                loading:false
            }
        case "LOADING":
            return{
                ...state,
                loading:true
            }
        case "USER_UPDATE":
            return{
                ...state,
                user:action.payload
            }
        default:
            return state;
    };
}
export const AuthProvider = ({children})=>{
    const [state,dispatch] = useReducer(authReducer,authInitialState);
    useEffect(()=>{
        authCheck();
    },[]);
    const authCheck = async ()=>{
        dispatch({type:"LOADING"});
        const res = await userCheck();
        if(res.error){
            dispatch({type:"ERROR",payload:res.error});
        }else{
            ///console.log('Auth Check User:', res.data);
            dispatch({type:"AUTH_CHECK",payload:{user:res.data,check:true}});
        }
    }
    return(
        <AuthContext.Provider value={{state,dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth = ()=> useContext(AuthContext);