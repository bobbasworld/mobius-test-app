import React, {useEffect, useState} from 'react'

import BomDetail from './BomDetail'
import BomForm from './BomForm'

import axios from 'axios'



const BomCard = () => {

    const [user, setUser] = useState({})


    useEffect( () => {
        axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(response => {
            console.log("response data: ", response.data)
            setUser(response.data)
        })
        .catch(err => console.log(err))
    }, [])



    return (
        <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
                <BomDetail user={user}/>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
                <BomForm/>
            </div>
        </div>
    )
}

export default BomCard;