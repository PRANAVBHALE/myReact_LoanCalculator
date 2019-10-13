import React ,{Component} from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import InputField from '../../components/inputField'
import Slider from '../../components/slider'
import EmiDetails from '../../components/emiDetails'
import { fetchEmiSettings } from './actions';
import './index.css'



class EmiCalculator extends Component {

    state = {
        loanAmount: 500,
        duration:6,
        sliderValue:500
      }
      
      handleSliderChange(e){
    
        var slider = document.getElementById("myRange");
    
        this.setState(() => ({
          sliderValue : slider.value,
          loanAmount :  slider.value
        }),() => {
            let {duration, loanAmount } = this.state

            this.props.getEmiSettings(loanAmount,duration)
        })
    
      }
    
      handleLoanChange(e){
    
        this.setState({
          loanAmount :  e.target.value,
          sliderValue :e.target.value,
        },() => {
            let {duration, loanAmount } = this.state

            this.props.getEmiSettings(loanAmount,duration)
        })
    
      }
    
      handleDurationChange(e){
        this.setState({
          duration :  e.target.value,
        },() => {
            let {duration, loanAmount } = this.state

            this.props.getEmiSettings(loanAmount,duration)
        })
      }

      getEmiDetails(){
        let {interestRate , monthlyAmount, principalAmount } = this.props.emiDetail

          return <div className = "emiDetails">
          <EmiDetails detailType = "Interest Rate" detailValue = {interestRate}></EmiDetails>
          <EmiDetails detailType = "Monthly Payment" detailValue = {"$" + monthlyAmount}></EmiDetails>
          <EmiDetails detailType = "PrincipalAmount" detailValue = {"$" + principalAmount}></EmiDetails>

          </div>
      }

      getErrorMessage(){

      //  let {message} = this.props.emiDetail

        let message = "Please Put loan Range from $500 and $5000 \n And 6 to 12 months Range "

          return (<div className = "emiDetails">
              {message}
          </div>)
      }

      runLoader(){
        return (<div  className = "emiDetails">
           <img style = {{width:"150px" , height:"100px"}} src = {require("../../assests/greenloader.gif")} alt="loader"/>
        </div>)
      }
    
      render(){
    
        let {loanAmount,duration,sliderValue} = this.state
        let { error,requesting } = this.props.emiDetail
    
        return (
          <div className = "emiCalculator" >

            <div className = "emiFeeds">
            <InputField fieldTitle = "loanAmount" value = {loanAmount} changeHandle = {(e) => {this.handleLoanChange(e)}}></InputField>
            <InputField fieldTitle = "Duration" value = {duration} changeHandle = {(e) => {this.handleDurationChange(e)}} ></InputField>
            <Slider sliderValue = {sliderValue} onSliderChange = {(e) => this.handleSliderChange(e) }>  </Slider>
            </div>

            {
                requesting ? this.runLoader() :  error ? this.getErrorMessage() : this.getEmiDetails()
            }


            
                 
          </div>
        );
      }
}

function mapStateToProps (state)  {  

    return {
        emiDetail: state.emiDetail
    }
  }
  
  function mapDispatchToProps(dispatch) {
    return {
        getEmiSettings : (loanAmount,duration) => dispatch(fetchEmiSettings(loanAmount,duration))
    };
  }

  const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
  );


  export default compose(withConnect)(EmiCalculator);