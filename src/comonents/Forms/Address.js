import React from "react";
import { Button, Container, TextField } from "@material-ui/core";

export const Address = (props) => {
  const { address, city, state, zip } = props.formData;
  const { setForm } = props;
  //   console.log(address);
  //   console.log(city);
  //   console.log(state);
  //   console.log(zip);
  return (
    <Container maxWidth="xs" back>
      <h3>Address</h3>
      <TextField
        label="Type Address"
        name="address"
        value={address}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="City"
        name="city"
        value={city}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="State/Province"
        name="state"
        value={state}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="ZIP/Postal Code"
        name="zip"
        type="number"
        value={zip}
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
