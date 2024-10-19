import React, { useEffect } from "react";
import { CheckboxGroup, Checkbox, CheckboxGroupProps } from "@nextui-org/react";
import { Controller, useFormContext } from "react-hook-form";

export type TCheckboxOptions = {
  key: string;
  title: string;
};
type TCheckboxInputUI = {
  name: string;
  orientation?: "horizontal" | "vertical";
  classNameText?: string;
  text: string;
};
const CheckboxInputUI = ({ text, name, classNameText }: TCheckboxInputUI) => {
  const { control, watch } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Checkbox
          color="warning"
          onValueChange={field.onChange}
          isSelected={field.value}
        >
          <p className={classNameText ? "classNameText" : "text-sm"}>{text}</p>
        </Checkbox>
      )}
    />
  );
};

export default CheckboxInputUI;
