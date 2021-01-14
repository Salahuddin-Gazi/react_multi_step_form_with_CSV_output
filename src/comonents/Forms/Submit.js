import React from "react";
import { Button, Container } from "@material-ui/core";
import { CSVLink } from "react-csv";
export const Submit = ({ formData }) => {
  {/* prettier-ignore */}
  const data = `Name
  First Name, ${formData.firstName}
  Last Name, ${formData.lastName}
  Nick Name, ${formData.nickName}

Address
  Road No, ${formData.address}
  City, ${formData.city}
  State, ${formData.state}
  ZIP, ${formData.zip}

Contact
  Phone, ${formData.phone},
  Email, ${formData.email},
  FAX, ${formData.fax},
  `;

  return (
    <Container maxWidth="sm" style={{ marginTop: "4rem" }}>
      <h3>Thank You for submitting, we will be in touch!</h3>
      <CSVLink
        filename={formData.firstName + "_" + formData.lastName + ".csv"}
        data={data}
        style={{ textDecoration: "none" }}
      >
        <p>Click here to download your form</p>
      </CSVLink>
      {/* {JSON.stringify(props)} */}
    </Container>
  );
};
