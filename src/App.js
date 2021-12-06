import React, { Component } from 'react'
import PureCom from './components/pureCom'
import RegCom from './components/regCom'

export default class App extends Component {

  state={
    name: 'Hossain'
}

   componentDidMount(){
       setInterval(()=>{
           this.setState({name:'Hossain'})
       },1000)
   }
  render() {
    return (
      <div className='App'>
      
        <PureCom name={this.state.name}/>
        <RegCom name={this.state.name}/>
      </div>
    )
  }
}
