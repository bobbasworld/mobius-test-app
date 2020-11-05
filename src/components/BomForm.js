import React, {useState, useEffect} from 'react'

const BomForm = () => {
  const [data, setData] = useState({})

  



  return(
      <div className="bomcardContainer2">
          <form>
            <div className="form-group">
              <input type="text" className="form-control" id="name" placeholder="Name"/>
            </div>
            <div className="form-group">
              <input type="text" className="form-control" id="username" placeholder="Username"/>
            </div>
            <div className="form-group">
              <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Email"/>
            </div>
            <div className="form-group">
              <input type="text" className="form-control" id="phone" placeholder="Phone"/>
            </div>
            <button type="submit" className="btn btnEdit">Update</button>
        </form>
      </div>
  )
}

export default BomForm