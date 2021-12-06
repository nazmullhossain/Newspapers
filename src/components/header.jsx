import React, { Component } from 'react'
import newCatagory from '../news/index'

export default class Header extends Component {
    state={
        searchTerm:''
    }

        handleChange=e=>{
            this.setState({searchTerm: e.target.value})

        }
        handleKeyPress=e=>{
            //implement later
        }

    render() {
        const catagory=this.props
        return (
            <div className='my-4'>
                <h1 className='mb-4' style={{fontWeight:'300'}}>
                    Block Buster Headline
                </h1>

                <input 
                className="form-control"
                type="text" 
                placeholder="Type anything & press enter to search"
                value={this.state.searchTerm}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
                />
                        <div className='my-4'>
                            {
                                newCatagory && Object.keys(newCatagory).map(item=>{
                                    if(catagory==newCatagory[item]){
                                            return(
                                                <button className='btn btn-sm btn-warning mr-2 mb-2'>{`#${newCatagory[item]}`}</button>
                                            )
                                    }
                                    return(
                                        <button className='btn btn-sm btn-light mr-2 mb-2'>{`#${newCatagory[item]}`}</button>
                                    )
                                })
                            }
                        </div>

            </div>
        )
    }
}
