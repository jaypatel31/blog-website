import React, { useEffect, useContext } from 'react'
import Sawo from 'sawo'
import { useHistory } from 'react-router-dom'

import { API_KEY } from '../../config'
import { AccountContext } from '../../context/AccountProvider'

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
                    id:payload.user_id
                }
                localStorage.setItem('user',JSON.stringify(data))
                setAccount(data)
                history.push('/')
            },
        }
        let sawo = new Sawo(config)
        sawo.showForm()
    }, [])

    return (
        <div className="mt-4">
            <h2 className="text-4xl text-center">Login Page</h2>
            <div id="sawo-container" style={{height:"300px", width:"400px", margin:"auto", marginTop:"15px"}}></div>
        </div>
    )
}

export default LoginPage