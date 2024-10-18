"use client";

import React from "react";
import DefaultInput from "../ui/form/defaultInput";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { registerFormScheme } from "@/lib/validator";
import { zodResolver } from "@hookform/resolvers/zod";

const RegisterForm = () => {
  const form = useForm<z.infer<typeof registerFormScheme>>({
    resolver: zodResolver(registerFormScheme),
  });
  return (
    <FormProvider {...form}>
      <div>
        <DefaultInput formName="name" />
      </div>
    </FormProvider>
  );
};

export default RegisterForm;
