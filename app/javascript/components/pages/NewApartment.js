import React from "react"
import {Redirect, Link} from "react-router-dom"



class NewApartment extends React.Component {
constructor(props){
  super(props)
  this.state = {
    success: false,
    apartmentAttributes: {
      name: '', 
      street: '',
      street2: '',
      city: '',
      zip_code: '',
      state: '',
    }
  }
}


  handleSubmit = (event)=>{
    event.preventDefault()
    fetch('/apartments.json', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({apartment:this.state.apartmentAttributes})
    })
    .then((response)=>{
      this.setState({success: true})
    })
  }

  handleChange = (event)=>{
    const { apartmentAttributes } = this.state
    apartmentAttributes[event.target.name] = event.target.value
    this.setState({ apartmentAttributes: apartmentAttributes})
}


  render () {
    const { apartmentAttributes, success } = this.state
    return (
      <div>
      {success &&
        <Redirect to="/all-apartments" />
      }
      {!success &&
        <div>

      <h1>Add a new Apartment</h1>
        <form
        onSubmit={this.handleSubmit}
        >

        <label htmlFor="name">Name</label>
        <input
          type='text'
          name='name'
          value={apartmentAttributes.name}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="street">Street 1</label>
        <input
          type='text'
          name='street'
          value={apartmentAttributes.street}
          onChange={this.handleChange}
        />
        <br />

        <label htmlFor="street2">Street 2</label>
        <input
          type='text'
          name='street2'
          value={apartmentAttributes.street2}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="city">City</label>
        <input
          type='text'
          name='city'
          value={apartmentAttributes.city}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="zip_code">Zip Code</label>
        <input
          type='number'
          name='zip_code'
          value={apartmentAttributes.zip_code}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="state">State</label>
        <input
          type='text'
          name='state'
          value={apartmentAttributes.state}
          onChange={this.handleChange}
        />
        <br />

        <button type="submit">Add</button>

        </form>
        </div>
      }
      <Link to="all-apartments">Back</Link>
    </div>
    );
  }
}

export default NewApartment