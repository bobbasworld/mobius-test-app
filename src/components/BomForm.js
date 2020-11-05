import React, {useState, useEffect} from 'react'
import axios from 'axios'
import userEvent from '@testing-library/user-event'

const BomForm = ({addUser}) => {

  const[data, setData] = useState({
    name: '',
    username: '',
    email: '',
    phone: ''
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
    axios.put('https://jsonplaceholder.typicode.com/users/1', data)
    .then(res => {
      console.log('PUT res: ', res)
      addUser(data)
      setEditing(false)
      setData({
        name: '',
        username: '',
        email: '',
        phone: ''
      })

      console.log("form data state: ", data)
    })
    .catch(err => console.log(err))
  }

  

  return(
      <div className="bomcardContainer2">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input value={data.name} onChange={handleChange} name="name" type="text" className="form-control" id="name" placeholder="Name"/>
            </div>
            <div className="form-group">
              <input value={data.username} onChange={handleChange} name="username" type="text" className="form-control" id="username" placeholder="Username"/>
            </div>
            <div className="form-group">
              <input value={data.email} onChange={handleChange} name="email" type="text" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Email"/>
            </div>
            <div className="form-group">
              <input value={data.phone} onChange={handleChange} name="phone" type="text" className="form-control" id="phone" placeholder="Phone"/>
            </div>
            <button disabled={!editing} onChange={handleChange} type="submit" className="btn btnEdit">Update</button>
        </form>
      </div>
  )
}

export default BomForm