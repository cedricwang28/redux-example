import React, {Component} from 'react';
import './App.css';
import store from './redux/store'
import {plus,minus} from './redux/action'


class App extends Component {

  constructor(props){
    super(props)
    this.state={
      num: store.getState()

    }
  }

  componentDidMount(){
    store.subscribe(()=>{
      this.setState({
        num: store.getState()
      })
    })

    
  }

  render(){
    return (
      <div className="App">
        <h1>the number is : {this.state.num}</h1>
        <button className="plus" onClick={()=>{store.dispatch(plus(1))}}>Plus</button>
        <button className="minus"  onClick={()=>{store.dispatch(minus(1))}}>Minus</button>
      </div>
    )
  }
  
}

export default App;


