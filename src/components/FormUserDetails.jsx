import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    //  Now values can be used as a variable of props
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter User Details" />
          <TextField
            hintText="Enter First Name"
            floatingLabelFixed="First Name"
            onChange={handleChange("firstName")}
            defaultValue={values.firstName}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default FormUserDetails;
