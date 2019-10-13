import React from 'react'
import './index.css'

const InputField = (props) => {

    let {fieldTitle,value,changeHandle} = props

    return <div className = "inputfield">
            <label>{fieldTitle}</label>
            <input placeholder = {value} type="text" value = {value} onChange = {changeHandle} />
            </div>
   
}

export default InputField