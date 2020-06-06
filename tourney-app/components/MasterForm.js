import UserDetails from "./UserDetails";
import SaveAndConfirm from "./SaveAndConfirm";
import ChoiceCard from "./ChoiceCard";
import CardContainer from "./CardContainer";
import { useState, useEffect } from "react";

const MasterForm = (props) => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  if (step === 1) {
    return <UserDetails nextStep={nextStep} />;
  }

  if (step === 2) {
    return <CardContainer nextStep={nextStep} prevStep={prevStep} />;
  }

  if (step === 3) {
    return (
      <SaveAndConfirm
        nextStep={nextStep}
        prevStep={prevStep}
        // saveForm={saveForm}
      />
    );
  }

  return null; // just in case
};

export default MasterForm;
