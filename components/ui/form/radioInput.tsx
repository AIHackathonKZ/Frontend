import React, { useEffect } from "react";
import { RadioGroup, Radio } from "@nextui-org/radio";
import { Controller, useFormContext } from "react-hook-form";

export type TCheckboxOptions = {
  key: string;
  title: string;
};
type TCheckboxInputUI = {
  options: TCheckboxOptions[];
  name: string;
  title: string
};
const RadioInputUI = ({ options, name , title}: TCheckboxInputUI) => {
  const { control, watch } = useFormContext();

  const date = watch("gender", "male");
  useEffect(() => {
    console.log(date);
  }, [date]);
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <RadioGroup
          orientation="horizontal"
          label={title}
          value={field.value}
          onValueChange={(val) => {
            field.onChange(val);
          }}
        >
          {options.map((item) => {
            return (
              <Radio key={item.key} value={item.key}>
                {item.title}
              </Radio>
            );
          })}
        </RadioGroup>
      )}
    />
  );
};

export default RadioInputUI;
