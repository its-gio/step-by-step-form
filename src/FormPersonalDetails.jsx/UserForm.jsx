import React from "react";

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

  render() {
    return <div>This be a user form test!</div>;
  }
}
