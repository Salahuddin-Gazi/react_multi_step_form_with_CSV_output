import React from "react";
import { Button, Container, TextField } from "@material-ui/core";

export const Names = (props) => {
  // console.log(props);
  const { firstName, lastName, nickName } = props.formData;
  const { setForm } = props;
  //   console.log(lastName);
  //   console.log(nickName);
  return (
    <Container maxWidth="xs" back>
      <h3>Names</h3>
      <TextField
        label="First Name"
        name="firstName"
        value={firstName}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="Last Name"
        name="lastName"
        value={lastName}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="Nick Name"
        name="nickName"
        value={nickName}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: "1rem", width: "100%" }}
        onClick={() => props.navigation.next()}
      >
        NEXT
      </Button>
    </Container>
  );
};
