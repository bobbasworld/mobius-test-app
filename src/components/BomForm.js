import React, {useState} from 'react'
import axios from 'axios'

const BomForm = ({addItem}) => {

  const[data, setData] = useState({
    bom: '',
    item_unit_cost: '',
    quantity: '',
    specific_part: ''
  })

  const [editing, setEditing] = useState(false)
  
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name] : e.target.value
    })
    setEditing(true)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.put('https://run.mocky.io/v3/cc19c73b-076c-473d-b695-38f1316ac7aa', {fields: data})
    .then(res => {
      console.log('PUT res: ', res)
      addItem(data)
      setEditing(false)
      setData({
        bom: '',
        item_unit_cost: '',
        quantity: '',
        specific_part: ''
      })

      console.log("form data state: ", data)
    })
    .catch(err => console.log(err))
  }

  

  return(
      <div className="bomcardContainer2">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input value={data.bom} onChange={handleChange} name="bom" type="text" className="form-control" id="name" placeholder="BOM"/>
            </div>
            <div className="form-group">
              <input value={data.item_unit_cost} onChange={handleChange} name="item_unit_cost" type="text" className="form-control" id="cost" placeholder="Cost"/>
            </div>
            <div className="form-group">
              <input value={data.quantity} onChange={handleChange} name="quantity" type="text" className="form-control" id="quantity" placeholder="Quantity"/>
            </div>
            <div className="form-group">
              <input value={data.specific_part} onChange={handleChange} name="specific_part" type="text" className="form-control" id="specific_part" placeholder="Specific Part"/>
            </div>
            <button disabled={!editing} onChange={handleChange} type="submit" className="btn btnEdit">Update</button>
        </form>
      </div>
  )
}

export default BomForm