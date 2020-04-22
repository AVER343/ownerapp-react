import React from 'react'
import './edit.styles.scss'
import './edit.styles'
import FormInput from '../form-input/form-Input'
import { SignInContainer } from './edit.styles'
import CustomButton from '../custom-button/custom-button.compo'
import { connect } from 'react-redux'
import { changeItem, DELETE_USER } from '../../redux/json_data/json_data.actions'

class EditPage extends React.Component{
    constructor(props){
        super(props)
        const {match,this_json}=props
        const index=match.params.index
        this_json.index=index
        this.state={
            index:index,
            id:this_json[index].id,
            product:this_json[index].product,
            quantity:this_json[index].quantity,
            customer_email:this_json[index].customer_email,
            customer_name:this_json[index].customer_name
        }
    }
    handleChange = event => {
        const { value, name } = event.target;
    
        this.setState({ [name]: value });
      };
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
            label='id'/>
        <FormInput 
            name='customer_name'
            type='text'
            handleChange={this.handleChange}
            value={this.state.customer_name}
            label='customer_name'/>
        <FormInput 
            name='customer_email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.customer_email}
            label='customer_email'/>
        <FormInput 
            name='product'
            type='text'
            handleChange={this.handleChange}
            value={this.state.product}
            label='product'/>
            <FormInput 
            name='quantity'
            type='number'
            handleChange={this.handleChange}
            value={this.state.quantity}
            label='quantity'/>
            </SignInContainer>
            <div className="buttons">
                <CustomButton type="submit" onClick={()=>this.props.UPDATE_ITEM(this.state)}>SAVE</CustomButton>
                <CustomButton onClick={()=>this.props.DELETE_USER(this.state)}>DELETE</CustomButton>
                <CustomButton onClick={()=>this.props.history.push('/')}>GO BACK</CustomButton>
            </div>
           </div>)
    }
}
const mapStateToProps=(state)=>({
    this_json:state.json_data.JSON_DATA
})
const mapDispatchToProps = dispatch => ({
    UPDATE_ITEM: (item) => dispatch(changeItem(item)),
    DELETE_USER: (item)=>dispatch(DELETE_USER(item))
  });
  
export default connect(mapStateToProps,mapDispatchToProps)(EditPage)