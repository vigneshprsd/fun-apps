import React, { useContext } from 'react'
import {Route,Redirect} from 'react-router-dom'
import { Context } from '../store';


const PrivateRoute = ({component:Component,...rest}) => {

    const [state, dispatch] = useContext(Context);

    const { userDetails } = state.userDetails;
    
    return (
    <Route {...rest} component={(props)=>(userDetails ? (<Component {...props}/>): (<Redirect to='/login'/>) )}/>
    )
}

export default PrivateRoute