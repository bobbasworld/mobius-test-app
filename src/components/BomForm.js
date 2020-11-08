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

    let newDate = new Date()
    let updatedDate = newDate.toISOString()

    console.log('updatedDate: ', updatedDate)

    const putData = {
      fields: {
        uuid: "0b1ee8c4-03bd-4fd8-a016-226dba25f0f6",
        created_at: "2020-08-27T00:38:01.689Z",
        updated_at: updatedDate,
        is_active: true,
        bom: parseInt(data.bom),
        item_unit_cost: data.item_unit_cost,
        quantity: parseInt(data.quantity),
        specific_part: parseInt(data.specific_part)
      }
    }

    axios.put('https://run.mocky.io/v3/cc19c73b-076c-473d-b695-38f1316ac7aa', putData)
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

  

  return (
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