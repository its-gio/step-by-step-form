import React from "react";
import FormUserDetails from "./FormUserDetails.jsx";
import FormPersonalDetails from "./FormPersonalDetails.jsx";
import Confirm from "./Confirm.jsx";

export default class UserForm extends React.Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: ""
  };

  // Proceed to next step
  nextStep = () => {
    // Destructure step (from state)
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Takes an input and event
  handleChange = input => e => {
    // Sets state for input and adds it for the target value
    this.setState({ [input]: e.target.value });
  };

  render() {
    const {
      firstName,
      lastName,
      email,
      occupation,
      city,
      bio,
      step
    } = this.state;
    const values = { firstName, lastName, email, occupation, city, bio };

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return <h1>Sucess</h1>;
      default:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
    }
  }
}
