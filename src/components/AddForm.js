import React from "react";
import axios from "axios";

class AddForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title:'',
            info:'',
            price:0
        }
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:1337/products', this.state)
        window.location.reload()

    }

    render(){
        const {title, info, price} = this.state;
        return (

            <div className="p-5">
                <form onSubmit={this.submitHandler}>

                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input name="title" type="text" className="form-control" id="exampleFormControlInput2" value={title} onChange={this.changeHandler}/>
                    <label className="form-label">Price</label>
                    <input name="price" type="number" className="form-control" id="exampleFormControlInput2" value={price} onChange={this.changeHandler}/>
                    <label className="form-label">Info</label>
                    <input name="info" type="text" className="form-control" id="exampleFormControlInput2" value={info} onChange={this.changeHandler}/>
                </div>
                <button type="submit" className="btn-primary">Add</button>
                </form>
            </div>
    
        );
    }
}

export default AddForm;