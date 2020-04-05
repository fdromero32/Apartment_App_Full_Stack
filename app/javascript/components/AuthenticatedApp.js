import React, { Component } from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { Button, Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';
import Header from './pages/Header'
import NewApartment from './pages/NewApartment'
import AllApartments from './pages/AllApartments'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      apartments: [], // We start with an empty array, so the component can finish rendering before we make our fetch request
    }
    this.getApartments() // Calls our fetch method when the component loads for the first time
  }

  // componentDidMount() {
  //   this.getApartments()
  // }

  getApartments = () => {
    // Making a fetch request to the url of our Rails app
    // fetch returns a promise
    fetch("http://localhost:3000/apartments")
      .then((response) => {
        //Make sure we get a successful response back
        console.log(response)
        if (response.status === 200) {
          // We need to convert the response to JSON
          // This also returns a promise
          return (response.json())
        }
      })
      .then((apartmentArray) => {
        //Finally, we can assign the cats to state, and they will render
        console.log("is this array?", typeof apartmentArray)
        this.setState({
          apartments: [apartmentArray]
        })
      })
  }

  handleCreateApartment = (newapartment) => {
    return fetch("http://127.0.0.1:3000/apartments", {
      // converting an object to a string
    	body: JSON.stringify(newapartment),
      // specify the info being sent in JSON and the info returning should be JSON
    	headers: {
    		"Content-Type": "application/json"
    	},
      // HTTP verb so the correct endpoint is invoked on the server
    	method: "POST"
    })
    .then((response) => {
      // if the response is good call the getCats method
      if(response.ok){
        return this.getApartments()
      }
    })
  }

  render() {
    const {
      logged_in,
      sign_in_route,
      sign_out_route
    } = this.props

    console.log("Here is the state!",this.state.apartments)
    console.log(typeof this.state.apartments)
    return ( 
    <React.Fragment>
      <Header/>
        <Router>
        <Navbar bg="dark" variant="dark">
          <NavbarBrand href="#">Home</NavbarBrand>
            <Nav className="nav-bar">
          <NavItem>
            <NavLink to="/apartmentindex" tag={ Link }>Listings</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/newapartment" tag={ Link }>Create a Listing</NavLink>
          </NavItem>
        <Link to = "/newapartment">
            <Button className="button"> Add a Listing! </Button> 
        </Link>
        <Link to = "/apartmentindex" >
            <Button className="button"> All Apartment </Button> 
        </Link> 
          <br/>
        <Switch >
            <Route exact path = "/newapartment" render = { props => <NewApartment handleCreateApartment= { this.handleCreateApartment }/>}/> 
            <Route exact path = "/apartmentindex" render = { props => <AllApartments apartments = { this.state.apartments }/>} />
        </Switch> 
            </Nav>
        </Navbar>
            {logged_in && <div><a href={sign_out_route}>Sign Out</a></div>}
            {!logged_in && <div><a href={sign_in_route}>Sign In</a> </div>}
        </Router>
      </React.Fragment>
      )
    }
  }

  export default App