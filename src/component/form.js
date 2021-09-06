import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

class Theform extends React.Component {
constructor(props){
super (props);
this.state={
    locationname:''
}
}
    getLocation = (e) => {
        this.setState({
            locationName: e.target.value
        })
    }
    
    handleSubmit=(e)=>{
        e.preventDefault();
       this.props.handleName(this.state.locationName);
    }

    render() {
        return (
            <div style ={{padding:"100px" ,width:"30%"}} >
                <Form className="FormR" onSubmit={this.handleSubmit} style ={{color:'black', fontWeight:"bolder"}}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Enter The City: </Form.Label>
                        <Form.Control type="text"  onChange={this.getLocation} placeholder="Enter city name" />
                    </Form.Group>
                    <Button variant="primary" type="submit" style={{color:"black" , backgroundColor:"greenyellow"}}>
                        Explore!
                    </Button>
                </Form>
            </div>
        );
    }
}

export default Theform;