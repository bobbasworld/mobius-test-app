import React, {useEffect, useState} from 'react'

import BomDetail from './BomDetail'
import BomForm from './BomForm'

import axios from 'axios'



const BomCard = () => {

    const [item, setItem] = useState({
        bom: '',
        item_unit_cost: '',
        quantity: '',
        specific_part: ''
    })

    const addItem = (newItem) => {
        setItem(newItem)
    }


    useEffect( () => {
        axios.get('https://run.mocky.io/v3/cc19c73b-076c-473d-b695-38f1316ac7aa')
        .then(response => {
            console.log("response data: ", response.data)
            setItem(response.data.fields)
        })
        .catch(err => console.log(err))
    }, [])


    return (
        <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
                <BomDetail item={item}/>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
                <BomForm addItem={addItem}/>
            </div>
        </div>
    )
}

export default BomCard;