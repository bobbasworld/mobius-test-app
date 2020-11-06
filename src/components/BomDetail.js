import React, {Fragment} from 'react'

const BomDetail = ({item}) => {
    return (
        <Fragment>
            <div className="bomcardContainer">
                <div className="container">
                    <img className="bomcardImage" src="https://media.digikey.com/Renders/Yageo%20Renders/CFR-12JR-10K.jpg" alt="logo"/>
                </div>
                    <h3 className="bomcardHeader">Details:</h3>
                    <div className="bomcardTitles">
                        <p className="bomcardTitle">BOM: {item.bom}</p>
                        <p className="bomcardTitle">Cost: {item.item_unit_cost}</p>
                        <p className="bomcardTitle">Quantity: {item.quantity}</p>
                        <p className="bomcardTitle">Specific Part: {item.specific_part}</p>
                    </div>
            </div>
        </Fragment>
    )
}

export default BomDetail