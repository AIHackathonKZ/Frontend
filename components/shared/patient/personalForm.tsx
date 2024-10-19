import CheckboxInputUI from "@/components/ui/form/radioInput";
import CheckboxInput from "@/components/ui/form/radioInput";
import DataInputUI from "@/components/ui/form/dataInput";
import DefaultInput from "@/components/ui/form/defaultInput";
import PhoneInputControlled from "@/components/ui/form/phoneInput";
import { genderOptions } from "@/constants/conts";
import { form } from "framer-motion/client";
import React from "react";
import { useFormContext } from "react-hook-form";
import RadioInputUI from "@/components/ui/form/radioInput";

const PersonalForm = () => {
  const form = useFormContext();
  return (
    <div className="flex flex-col gap-4">
      <PhoneInputControlled phoneName={"phone"} />
      {form.formState.errors.phone?.message && (
        <p className="text-red">
          {form.formState.errors.phone?.message as string}
        </p>
      )}
      <DefaultInput
        formName="name"
        placeholder="Muratbekov Aman"
        label="Full name"
      />
      <DefaultInput
        formName="email"
        placeholder="example@email.com"
        label="Email"
      />

      <DefaultInput
        formName="address"
        placeholder="ex: 14 street, New York, NY - 5101"
        label="Address"
      />
      <DefaultInput
        formName="occupation"
        placeholder="Software Engineer"
        label="Occupation"
      />
      <DefaultInput
        formName="emergencyContactName"
        placeholder="Guardian’s name"
        label="Emergency contact name"
      />
       <DefaultInput
        formName="emergencyContactNumber"
        placeholder="ex: +1 (868) 579-9831"
        label="Emergency phone number"
      />
      <DataInputUI name="birthDate"/>
      <RadioInputUI title="Gender" name="gender" options={genderOptions}/>
    </div>
  );
};

export default PersonalForm;
