import React, { Component } from 'react'
import Header from './header'
import newCatagory from '../news'

class App extends Component {
    render() {
        return (
            <div className='container'>
                <div className="row"> 
                <div className='col-sm-6 offset-md-3'> 
                <Header catogory={newCatagory.tecnology}/>
            </div>
            </div>
            </div>
        )
    }
}
export default App