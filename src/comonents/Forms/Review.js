import React from "react";
import {
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  ListItemText,
  IconButton,
  Button,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

// import { Button } from "bootstrap";

export const Review = (props) => {
  const {
    phone,
    email,
    fax,
    address,
    city,
    state,
    zip,
    firstName,
    lastName,
    nickName,
  } = props.formData;
  // const name_prop = {
  //   { "First Name": firstName },
  //   { "Last Name": lastName },
  //   { "Nick Name": nickName },
  // };
  // console.log(props.formData);
  // const address_prop = [
  //   { Address: address },
  //   { City: city },
  //   { State: state },
  //   { "Zip/Postal Code": zip },
  // ];
  const { go } = props.navigation;
  // const contact_prop = [{ Phone: phone }, { Email: email }, { Fax: fax }];

  return (
    <Container maxWidth="sm">
      <h3>Review</h3>
      <RenderAccordion
        summary="name"
        name="Names"
        com_prop={[
          { "First Name": firstName },
          { "Last Name": lastName },
          { "Nick Name": nickName },
        ]}
        go={go}
      />
      <RenderAccordion
        summary="address"
        name="Address"
        com_prop={[
          { Address: address },
          { City: city },
          { State: state },
          { "Zip/Postal Code": zip },
        ]}
        go={go}
      />
      <RenderAccordion
        summary="contact"
        name="Contact"
        com_prop={[{ Phone: phone }, { Email: email }, { Fax: fax }]}
        go={go}
      />

      {/* <Button
        variant="contained"
        color="secondary"
        style={{ marginTop: "1rem", width: "100%" }}
        onClick={() => props.navigation.previous()}
      >
        PREVIOUS
      </Button> */}

      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: "1rem" }}
        onClick={() => props.navigation.next()}
      >
        Submit
      </Button>
    </Container>
  );
};

export const RenderAccordion = ({ summary, com_prop, go, name }) => (
  <Accordion>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>{name}</AccordionSummary>
    <AccordionDetails>
      <div>
        {com_prop.map((data, index) => {
          const objKey = Object.keys(data)[0];
          const objValue = data[Object.keys(data)[0]];
          // console.log({ com_prop });
          return (
            <ListItemText key={index}>{`${objKey}: ${objValue}`}</ListItemText>
          );
        })}
        <IconButton
          color="primary"
          component="span"
          // onClick={() => go(summary)}
          onClick={() => go(`${name.toLowerCase()}`)}
        >
          <EditIcon />
        </IconButton>
      </div>
    </AccordionDetails>
  </Accordion>
);
