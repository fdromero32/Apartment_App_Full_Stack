import React from "react"
import { Link } from "react-router-dom"


class Apartments extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      apartments: []
    }
  }

  componentDidMount(){
    fetch('/apartments.json')
	      .then((response) => {
	        return response.json()
	      })
	      .then((json) => {
	        this.setState({apartments: json})
	      })
	      .catch((e)=>{
	        console.log("Error", e)
	      })
	  }

  render () {
    return (
      <div>
      <h1>My Apartments</h1>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Street 1</th>
            <th>Street 2</th>
            <th>City</th>
            <th>Zip Code</th>
            <th>State</th>
          </tr>

          {this.props.apartments.map((apartment, index) => {
            return(
          <tr key={index}>
              <td>{apartment.name}</td>
              <td>{apartment.street}</td>
              <td>{apartment.street2}</td>
              <td>{apartment.city}</td>
              <td>{apartment.zip_code}</td>
              <td>{apartment.state}</td>
          </tr>
        )
      })}
        </tbody>
      </table>
      <Link to="new-apartment">Add New</Link>
    </div>


    );
  }
}

export default Apartments