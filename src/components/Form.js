import React, {useState} from "react"
function Form(){
  const [firstName, setfirstName] = useState("John");
  const [lastName, setlastName] = useState("Henry");
  
  function handleFirstNameChange(event){
      setfirstName(event.target.value)
  }

  function handleLastNameChange(event){
     setlastName(event.target.value)
  }

  return(
    <form>
      <input
        type="text"
        onChange={handleFirstNameChange}
        value={firstName}
      />
      <input
        type="text"
        onChange={handleLastNameChange}
        value={lastName}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
export default Form;



//class Component version
// import React from 'react';

// class Form extends React.Component {
//   state = {
//     firstName: "John",
//     lastName: "Henry"
//   }

//   handleFirstNameChange = event => {
//     this.setState({
//       firstName: event.target.value
//     })
//   }

//   handleLastNameChange = event => {
//     this.setState({
//       lastName: event.target.value
//     })
//   }

//   render() {
//     return (
//       <form>
//         <input type="text" name="firstName" onChange={event => this.handleFirstNameChange(event)} value={this.state.firstName} />
//         <input type="text" name="lastName" onChange={event => this.handleLastNameChange(event)} value={this.state.lastName} />
//       </form>
//     )
//   }
// }

// export default Form;