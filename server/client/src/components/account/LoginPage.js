import React, { useEffect, useContext } from 'react'
import Sawo from 'sawo'
import { useHistory } from 'react-router-dom'

import { API_KEY } from '../../config'
import { AccountContext } from '../../context/AccountProvider'
import { userLogin } from '../../service/api'

const LoginPage = () => {

    const {account,setAccount} = useContext(AccountContext)
    const history = useHistory()


    useEffect(() => {
        var config = {
            // should be same as the id of the container created on 3rd step
            containerID: 'sawo-container',
            // can be one of 'email' or 'phone_number_sms'
            identifierType: 'email',
            // Add the API key copied from 5th step
            apiKey: API_KEY,
            // Add a callback here to handle the payload sent by sdk
            onSuccess: payload => {
                console.log(payload)
                let data ={
                    email:payload.identifier,
                    user_id:payload.user_id,
                    name:payload.customFieldInputValues["User Name"]
                }
                const authenticate = async () =>{
                    let respose = await userLogin(data)
                    console.log(respose.data)
                    localStorage.setItem('user',JSON.stringify(respose.data.user))
                    setAccount(respose.data.user)
                    history.push('/')
                }
                authenticate()
                
            },
        }
        let sawo = new Sawo(config)
        sawo.showForm()
    }, [])

    return (
        <div className="mt-18">
            <h2 className="text-4xl text-center">Login Page</h2>
            <div id="sawo-container" style={{height:"400px", width:"400px", margin:"auto", marginTop:"100px"}}></div>
        </div>
    )
}

export default LoginPage