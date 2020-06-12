import UserDetails from "./UserDetails";
import SaveAndConfirm from "./SaveAndConfirm";
import ChoiceCard from "./ChoiceCard";
import CardContainer from "./CardContainer";
import AddRoster from "./AddRoster";
import { useState, useEffect } from "react";
import FormHeader from "./FormHeader";
const MasterForm = (props) => {
  const [step, setStep] = useState(1);
  //eventual admin will be a registered user
  const [form, setForm] = useState({
    name: null,
    admin: null,
    event: null,
    type: null,
    pages: ["Basic Info", "Specifications", "Add Partcipipants", "Finalize"],
  });
  const [players, setPlayers] = useState([]);

  const updateField = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const addPlayer = (player) => {
    setPlayers(...players, player);
  };
  // useEffect(() => {
  //   console.log(form);
  // }, [form]);

  const updateSpecific = (value) => {
    setForm({
      ...form,
      type: value,
    });
  };
  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  if (step === 1) {
    return (
      <>
        <FormHeader steps={step} form={form} />
        <UserDetails
          nextStep={nextStep}
          updateField={updateField}
          state={form}
        />
      </>
    );
  }

  if (step === 2) {
    return (
      <>
        <FormHeader steps={step} form={form} />
        <CardContainer
          nextStep={nextStep}
          prevStep={prevStep}
          updateField={updateField}
          updateSpecific={updateSpecific}
          state={form}
        />
      </>
    );
  }
  if (step === 3) {
    return (
      <>
        <FormHeader steps={step} form={form} />
        <AddRoster
          nextStep={nextStep}
          prevStep={prevStep}
          updateField={updateField}
          state={form}
          players={players}
          addPlayer={addPlayer}
        />
      </>
    );
  }

  if (step === 4) {
    return (
      <>
        <FormHeader steps={step} form={form} />
        <SaveAndConfirm
          nextStep={nextStep}
          prevStep={prevStep}
          // saveForm={saveForm}
        />
      </>
    );
  }

  return null; // just in case
};

export default MasterForm;
