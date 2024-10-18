import { Input } from "@nextui-org/input";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

type TDefaultInput = {
  formName: string;
};
export const DefaultInput = ({ formName }: TDefaultInput) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={formName}
      control={control}
      render={({ field }) => (
        <Input value={field.value} onChange={field.onChange} />
      )}
    />
  );
};

export default DefaultInput;
