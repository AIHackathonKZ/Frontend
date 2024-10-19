import AutocompleteUI from "@/components/ui/form/autocomplete";
import DefaultInput from "@/components/ui/form/defaultInput";
import { doctors } from "@/constants/conts";
import { Autocomplete, AutocompleteItem } from "@nextui-org/autocomplete";
import { h1 } from "framer-motion/client";
import React from "react";

const MedicalForm = () => {
  return ( <div className="flex flex-col gap-4">
    {/* Autocomplete for selecting a doctor */}
    <AutocompleteUI
      name="primaryPhysician"
      title="Select doctor"
      options={doctors}
    />

    <h3 className="text-small">Insurance provider</h3>
    <DefaultInput
      formName="insuranceProvider"
      placeholder="ex: BlueCross"
    />

    <h3 className="text-small">Insurance policy number</h3>
    <DefaultInput
      formName="insurancePolicyNumber"
      placeholder="ex: ABC1234567"
    />

    <h3 className="text-small">Allergies (if any)</h3>
    <DefaultInput
      formName="allergies"
      placeholder="ex: Peanuts, Penicillin, Pollen"
    />

    <h3 className="text-small">Current medications</h3>
    <DefaultInput
      formName="currentMedication"
      placeholder="ex: Ibuprofen 200mg, Levothyroxine 50mcg"
    />

    <h3 className="text-small">Family medical history (if relevant)</h3>
    <DefaultInput
      formName="familyMedicalHistory"
      placeholder="ex: Mother had breast cancer"
    />

    <h3 className="text-small">Past medical history</h3>
    <DefaultInput
      formName="pastMedicalHistory"
      placeholder="ex: Asthma diagnosis in childhood"
    />
  </div>
  );
};

export default MedicalForm;
