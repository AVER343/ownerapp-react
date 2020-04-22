import React from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { connect } from 'react-redux'
import FormInput from '../form-input/form-Input'
import CustomButton from '../custom-button/custom-button.compo'
import { SignInContainer } from '../Edit/edit.styles'
import { ADD_USER } from '../../redux/json_data/json_data.actions'
class AddPage extends React.Component{
    constructor(props)
    {   
        super(props)
        this.state={
            id:'',
            customer_name:'',
            customer_email:'',
            product:'',
            quantity:0
        }    
    }
    options = [
        'PRODUCT 1', 'PRODUCT 2', 'PRODUCT 3'
      ];
     
    handleChange = (event)=> {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }
    checkFields=()=>{
        const {id,customer_email,customer_name,product,quantity,productFinal}=this.state
        if(id==''&& customer_email==''&& customer_name==''&& product=='')
            {
                alert("KINDLY FILL THE FORM !")
                return
            }
            if(quantity<0)
            {
                alert('INVALID QUNATITY')
                return
            }
        this.props.addUser(this.state)
        alert("USER ADDED")
        this.props.history.push('/')
    }
    render(){
        return(
    <div style={{
        position: 'absolute', left: '40%'
      }}>   
        <SignInContainer>
<FormInput 
    name='id'
    type='text'
    handleChange={this.handleChange}
    value={this.state.id}
    required
    label='id'/>
<FormInput 
    name='customer_name'
    type='text'
    required
    handleChange={this.handleChange}
    value={this.state.customer_name}
    label='customer_name'/>
<FormInput 
    name='customer_email'
    type='email'
    required
    handleChange={this.handleChange}
    value={this.state.customer_email}
    label='customer_email'/>
    <Dropdown options={this.options} onChange={this._onSelect} value={this.state.product} placeholder="Select an option" />;
      
<FormInput 
    name='quantity'
    type='text'
    required
    handleChange={this.handleChange}
    value={this.state.quantity}
    label='quantity'/>
</SignInContainer>
    <div className="buttons">
        <CustomButton type="submit" onClick={this.checkFields}>ADD USER</CustomButton>
        <CustomButton onClick={()=>this.props.history.push('/')}>GO BACK</CustomButton>
    </div>
   </div>
)}}
const mapDispatchToProps=(dispatch)=>({
    addUser:(user)=>dispatch(ADD_USER(user))
})
export default connect(null,mapDispatchToProps)(AddPage)