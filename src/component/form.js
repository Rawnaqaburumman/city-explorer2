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
    
    handleSubmit= async(e)=>{
        e.preventDefault();
       this.props.handleName(this.state.locationName);
       console.log(this.state.locationName);
    }

    render() {
        return (
            <div style ={{width:"15%" , position:"absolute" , left:"680px" , top: "193px"}} >
                <Form className="FormR" onSubmit={this.handleSubmit} >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label style={{fontWeight:"bolder"}} >Enter The City: </Form.Label>
                        <Form.Control type="text"  onChange={this.getLocation} placeholder="Enter city name" style={{borderBlockWidth:"10px" , borderBlockColor:"burlywood"}}  />
                    </Form.Group>
                    <Button variant="primary" type="submit" style={{color:"wight" , backgroundColor:"black"}}>
                        Explore!
                    </Button>
                </Form>
            </div>
        );
    }
}

export default Theform;