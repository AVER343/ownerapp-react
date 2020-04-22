import React from 'react';
import { connect } from 'react-redux';
import {
  CheckoutItemContainer,
  TextContainer,
  QuantityContainer,RemoveButtonContainer} from './checkout-item.styles';
import { Link } from 'react-router-dom';
import { INCREMENT_QUANTITY ,DECREMENT_QUANTITY, REMOVE_ITEM, DELETE_USER} from '../../redux/json_data/json_data.actions';
import { deleteUser } from '../../redux/json_data/data.utils';

const CheckoutItem = (props) => {
  const {customer_name,product,quantity,customer_email} =props.JSON_DATA[props.index]
  const {INCREMENT_QUANTITY,DECREMENT_QUANTITY}=props
  return (
    <CheckoutItemContainer>
       {props.index+1}
    <TextContainer>{customer_name}</TextContainer>
    <QuantityContainer >
      <div onClick={() =>DECREMENT_QUANTITY(props.JSON_DATA[props.index])}>&#10094;</div>
      <span>{quantity}</span>
     <div onClick={() =>INCREMENT_QUANTITY(props.JSON_DATA[props.index])}>&#10095;</div>
   </QuantityContainer>
  <TextContainer>{product}</TextContainer>
  <TextContainer>{customer_email}</TextContainer>
<TextContainer><Link to={`/edit/${props.index}`}>EDIT</Link></TextContainer>
<RemoveButtonContainer onClick={()=>props.deleteUser(props.JSON_DATA[props.index])}>
        &#10005;
      </RemoveButtonContainer>
  </CheckoutItemContainer>
  );
};
const mapStateToProps=(state)=>({
  JSON_DATA:state.json_data.JSON_DATA
})
const mapDispatchToProps=dispatch=>({
  INCREMENT_QUANTITY:item=>dispatch(INCREMENT_QUANTITY(item)),
  DECREMENT_QUANTITY:item=>dispatch(DECREMENT_QUANTITY(item)),
  deleteUser:item=>dispatch(DELETE_USER(item))
})
export default connect(mapStateToProps,mapDispatchToProps)(CheckoutItem)
