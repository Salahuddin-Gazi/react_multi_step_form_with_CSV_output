import React from "react";
import { Button, Container, TextField } from "@material-ui/core";

export const Contact = (props) => {
  const { phone, email, fax } = props.formData;
  const { setForm } = props;
  // console.log(phone);
  //   console.log(city);
  //   console.log(state);
  //   console.log(zip);
  return (
    <Container maxWidth="xs" back>
      <h3>Contacts</h3>
      <TextField
        label="Phone Number"
        name="phone"
        // type="number"
        value={phone}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="Fax"
        name="fax"
        // type="number"
        value={fax}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="Email"
        name="email"
        type="email"
        value={email}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <Button
        variant="contained"
        color="secondary"
        style={{ marginTop: "1rem", width: "100%" }}
        onClick={() => props.navigation.previous()}
      >
        PREVIOUS
      </Button>
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
