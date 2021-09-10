import { isVisible } from 'dom-helpers';
import React from 'react';
class Header extends React.Component {


    render() {
        return (
            <div style={{ padding: "30px"}}>

            <h1 style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '50px' }}> Cities Information </h1>
            </div>
        )}
}

export default Header;