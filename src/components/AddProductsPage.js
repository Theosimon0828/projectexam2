import React from "react";
import { Link } from "react-router-dom";
import AddForm from "./AddForm";

class AddProductPages extends React.Component{
    render() {

        const token = localStorage.getItem('token')
        if(token == null) {
            return (
                <div className="mt-5"><h1>You need to login to see this page</h1></div>
            );
        } else {

            return (
                <>
                <AddForm/>
                </>
            );
        }




    }

}

export default AddProductPages;