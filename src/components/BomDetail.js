import React, {Fragment} from 'react'

const BomDetail = ({user}) => {
    return (
        <Fragment>
            <div className="bomcardContainer">
                <div className="container">
                    <img className="bomcardImage" src="https://media.digikey.com/Renders/Yageo%20Renders/CFR-12JR-10K.jpg" alt="logo"/>
                </div>
                    <h3 className="bomcardHeader">Details:</h3>
                    <div className="bomcardTitles">
                        <p className="bomcardTitle">Name: {user.name}</p>
                        <p className="bomcardTitle">Username: {user.username}</p>
                        <p className="bomcardTitle">Email: {user.email}</p>
                        <p className="bomcardTitle">Phone: {user.phone}</p>
                    </div>
            </div>
        </Fragment>
    )
}

export default BomDetail