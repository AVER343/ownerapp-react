import React from 'react';
import './App.css';
import AddPage from './components/add-page/add-page.component'
import {auth, createUserProfileDocument} from './firebase.utils'
import { Switch, Route } from 'react-router-dom';
import HeaderComponent from './components/header/header.component';
import CheckoutPage from './components/collection-component/collection-component';
import EditPage from './components/Edit/edit.component';
class App extends React.Component{
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }
      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
render(){
  return (
      <div>
        <HeaderComponent currentUser={this.state.currentUser}/>
       
        <Switch>
            {this.state.currentUser?<Route exact path='/' component={CheckoutPage}/>:<div style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)' , fontSize:75
    }}>LOGIN TO CONTINUE !</div>}
            {this.state.currentUser?<Route path='/edit/:index' component={EditPage}/>:<CheckoutPage/>}
            {this.state.currentUser?<Route exact path='/add' component={AddPage}/>:null}
          </Switch>
       </div> 
    )}
  }
export default App;
