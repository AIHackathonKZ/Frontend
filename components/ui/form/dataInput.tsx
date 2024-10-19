import React, { useEffect } from "react";
import { DateInput } from "@nextui-org/date-input";
import { Controller, useFormContext } from "react-hook-form";
import { CalendarDate } from "@internationalized/date";

type TDataInputUI = {
  name: string;
};
const DataInputUI = ({ name }: TDataInputUI) => {
  const { control, formState, watch } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <DateInput
          label={"Birth date"}
          placeholderValue={new CalendarDate(1995, 11, 6)}
          className="max-w-sm"
          onChange={(val) => field.onChange(val)}
          value={field.value}
        />
      )}
    />
  );
};

export default DataInputUI;
