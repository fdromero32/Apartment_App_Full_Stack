import React from "react"
import {Redirect, Link} from "react-router-dom"



class NewApartment extends React.Component {
constructor(props){
  super(props)
  this.state = {
    success: false,
    form: {
      name: '', 
      street: '',
      street2: '',
      city: '',
      zip_code: '',
      state: ''
    }
  }
}


  handleChange = (event) => {
        let { form } = this.state
        form[event.target.name] = event.target.value
        this.setState({ form: form })
      }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.handleCreateApartment(this.state.form)
    this.setState({ success: true })
  }

  render () {
    const { form, success } = this.state
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
          value={form.name}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="street">Street 1</label>
        <input
          type='text'
          name='street'
          value={form.street}
          onChange={this.handleChange}
        />
        <br />

        <label htmlFor="street2">Street 2</label>
        <input
          type='text'
          name='street2'
          value={form.street2}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="city">City</label>
        <input
          type='text'
          name='city'
          value={form.city}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="zip_code">Zip Code</label>
        <input
          type='number'
          name='zip_code'
          value={form.zip_code}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="state">State</label>
        <input
          type='text'
          name='state'
          value={form.state}
          onChange={this.handleChange}
        />
        <br />

        <button type="submit" onClick={this.handleSubmit}>Add</button>

        </form>
        </div>
      }
      <Link to="all-apartments">Back</Link>
    </div>
    );
  }
}

export default NewApartment