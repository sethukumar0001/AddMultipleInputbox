import React, { Component } from 'react';

class ChildrenPage extends Component {
    render(){
        const { fName, lName, age } = this.props.data;
    return (
        <div>
            FName:<input 
            type="text"
            name="fname"
            name={fName}
            value={fName}
            onChange={e =>this.props.handleFname(e, this.props.index)}
            />
            LName:<input 
            type="text"
            name={lName}
            value={lName}
            onChange={d=>this.props.handleLname(d,this.props.index)}
            />
            Age:<input 
            type="number"
            name={age}
            value={age}
            onChange={e=>this.props.handleAge(e,this.props.index)}
            />
            <button onClick={()=>this.props.handleRemove(this.props.index)}>Remove</button>
        </div>
    );
}
}

export default ChildrenPage;