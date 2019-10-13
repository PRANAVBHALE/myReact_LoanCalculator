import React from 'react'
import './index.css'

const Slider = (props) => {

    let {sliderValue} = props

    return <div className="slidecontainer">
                <p>Loan Range:</p>
                
                <input value = {sliderValue} type="range" min="500" max="5000"  className="slider" id="myRange" onChange = {props.onSliderChange} />
                <div className = "loanRange" >
                <div>$500</div><div>$5000</div>
                </div>
                
          </div>
}


export default Slider