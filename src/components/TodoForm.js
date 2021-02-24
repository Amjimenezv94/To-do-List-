import React, { Component } from 'react';


class TodoForm extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            responsible: '',
            description: '',
            priority: 'low',
        };
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleInputChange(e){
        const {value,name}=e.target;
        

        this.setState({
            [name]:value,
        });
        
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.onAddTodo(this.state);
        console.log('sending the data...');
        
    }



    render() {

        return (
            <div className='card'>
                <form onSubmit={this.handleSubmit} className='card-body' >
                    <div className='form-group'>
                        <input
                            type='text'
                            name='title'
                            onChange={this.handleInputChange}
                            className='form-control'
                            value={this.state.title}
                            placeholder='title'
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            type='text'
                            name='responsible'
                            value={this.state.responsible}
                            onChange={this.handleInputChange}
                            className='form-control'
                            
                            placeholder='Responsible'
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            type='text'
                            value={this.state.description}
                            onChange={this.handleInputChange}
                            name='description'
                            className='form-control'
                           
                            placeholder='Description'
                        />
                    </div>
                    <div className='form-group'>
                        <select
                        name='priority'
                        className='form-control'
                        value={this.state.priority}
                        onChange={this.handleInputChange}
                        >
                           <option>low</option> 
                           <option>medium</option>
                           <option>high</option> 
                               
                        </select>
                         
                    </div>
                    <button type="submit" className='btn btn-primary'>
                    Save
                </button>
                </form>
                

            </div>
        )
    }
};
export default TodoForm;