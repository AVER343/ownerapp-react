import React from 'react';
import './collection-component.scss';
import CheckoutItem from '../checkout-item/checkout-item.component';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.compo';
import { SignInContainer } from '../Edit/edit.styles';
// import { INCREMENT_PAGE, DECREMENT_PAGE } from '../../redux/json_data/json_data.actions';
class CheckoutPage extends React.Component{
  constructor(props)
  {
    super(props)
  this.state={
    page:0,
    dataJSON:props.dataJSON.slice(0*(this.page-1),10*this.page)
    }
  }
  setDataJSON=()=>{
    let pageValue=this.state.page
    this.setState({dataJSON:this.props.dataJSON.slice((pageValue-1)*0,pageValue*10)})
  }
  incrementPageValue=()=>{
    this.setState({page:this.state.page+1},()=>this.setDataJSON())

  }
  decrementPageValue=()=>{
    this.setState({page:this.state.page-1},()=>this.setDataJSON())

  }
  GetTen=(array)=>{
    return array.filter((Element,index)=>index>0 && index<=10 ?Element:null)
} 
    render(){
    return(
        <div className='checkout-page'>
        <div className='checkout-header'>
        <div style={{width:50}}>
          </div>
          <div className='header-block'>
            <span>CUSTOMER NAME</span>
          </div>
          <div className='header-block'>
            <span>QUANTITY</span>
          </div>
          <div className='header-block'>
            <span>PRODUCT</span>
          </div>
          <div className='header-block'>
            <span>EMAIL</span>
          </div>
          <div className='header-block'>
            <span></span>
          </div>
          <div className='header-block'>
            <span>REMOVE</span>
          </div>
        </div>
        {this.state.dataJSON.length>0?this.state.dataJSON.map((props,index)=> (
                <CheckoutItem key={`${props.id}`} index={index} pro={props} />
        )):null}
          <SignInContainer>
            <div className="buttons">
        {this.state.page>0?<CustomButton type="submit" onClick={this.decrementPageValue}>PREVIOUS</CustomButton>:null}
        <CustomButton type="submit" onClick={this.incrementPageValue}>NEXT</CustomButton>
      </div></SignInContainer>
        <div style={{fontSize:65}}>TOTAL VIEWED: {this.state.dataJSON.length}</div>
        <div className='total'>TOTAL:{this.props.dataJSON.length}</div>
      </div>)
    }
}
const mapStateToProps=(state)=>({
  dataJSON:state.json_data.JSON_DATA
})
// const mapDispatchToProps=dispatch=>({
//   incrementPageValueRedux:()=>dispatch(INCREMENT_PAGE()),
//   decrementPageValueRedux:()=>dispatch(DECREMENT_PAGE())
// })
export default connect(mapStateToProps,null)(CheckoutPage);