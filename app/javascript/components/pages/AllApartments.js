import React from "react"

class AllApartments extends React.Component {
  render () {
    return (
      <div>
        <h1>All Listings</h1>
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
              {console.log("This is the props", this.props.apartments)}
              {/* TODO: review props & copied examples.  */}
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
      </div>

    );
  }
}

export default AllApartments