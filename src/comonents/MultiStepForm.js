import React from "react";
import { useForm, useStep } from "react-hooks-helper";
import { Address } from "./Forms/Address";
import { Contact } from "./Forms/Contact";
import { Names } from "./Forms/Names";
import { Review } from "./Forms/Review";
import { Submit } from "./Forms/Submit";

export const MultiStepForm = () => {
  const steps = [
    { id: "name" },
    { id: "address" },
    { id: "contact" },
    { id: "review" },
    { id: "submit" },
  ];

  const defaultData = {
    firstName: "",
    lastName: "",
    nickName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    email: "",
    phone: "",
    fax: "",
  };
  //   console.log(defaultData);

  const [formData, setForm] = useForm({
    defaultData,
  });
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });
  //   console.log({ setForm });
  const props = { formData, setForm, navigation };
  //   const t = { ...props };
  //   console.log(t);
  switch (step.id) {
    case "name":
      return <Names {...props} />;
    case "address":
      return <Address {...props} />;
    case "contact":
      return <Contact {...props} />;
    case "review":
      return <Review {...props} />;
    case "submit":
      return <Submit {...props} />;
  }

  return <div>Hola</div>;
};
