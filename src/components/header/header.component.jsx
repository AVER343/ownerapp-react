import React from "react";
import { Link, Redirect } from "react-router-dom";
import "./header.styles.scss";
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth , signInWithGoogle } from "../../firebase.utils";
const HeaderComponent =(props)=>{
    return(<div className='header'>
       <Link style={{width:300}}className='logo-container' to='/'>
        <Logo className='logo' />
        {props.currentUser?`${props.currentUser.displayName} - ${props.currentUser.email}`:'HOME'}
        </Link>
        
          
      <div className='options'>
        {props.currentUser ? (

<div className='options'>  
            <div className='option'>
           <Link to='/add'>
               + ADD
               </Link>
            </div>
            <div className='option' onClick={() => auth.signOut()}>
              SIGN OUT
            </div>
       
          </div>
          ) : (
          <div className='option' onClick={signInWithGoogle}>
            SIGN IN
          </div>
        )}
      </div>
    </div>
  );}
export default HeaderComponent
