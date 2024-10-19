import { Input } from "@nextui-org/input";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

type TDefaultInput = {
  formName: string;
  placeholder?: string;
  label?: string;
  errorMessage?: string
};
export const DefaultInput = ({
  formName,
  placeholder,
  label,
  errorMessage
}: TDefaultInput) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={formName}
      control={control}
      render={({ field }) => (
        <Input
          value={field.value}
          onChange={field.onChange}
          placeholder={placeholder}
          label={label}
          errorMessage={errorMessage}
          isInvalid={errorMessage ? true : false}
        />
      )}
    />
  );
};

export default DefaultInput;
