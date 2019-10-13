import React from 'react'

const EmiDetails = (props) => {

    let {detailType,detailValue} = props

    return  <div>
        <span>{detailType}:     </span>
        <span>{detailValue}</span>
        </div>
}

export default EmiDetails