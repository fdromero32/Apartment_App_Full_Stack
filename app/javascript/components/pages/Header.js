import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';

class Header extends Component {
 render(){
     return(
            <div>
            <Jumbotron>
                <h1 className="display-3">Zillow Clone! Find your listing!</h1>
                <p className="lead">Find your home <span role="img" aria-label="heart">💕</span>:)</p>
            </Jumbotron>
            </div>
     )
 }
}

export default Header;