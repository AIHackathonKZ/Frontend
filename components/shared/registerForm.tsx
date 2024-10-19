"use client";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/high-res.css";

import React, { useEffect, useState } from "react";
import DefaultInput from "../ui/form/defaultInput";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { registerFormScheme } from "@/lib/validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import { formTypes, TCreateUser } from "@/types/userType";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { Input } from "@nextui-org/input";
import { div, em, p } from "framer-motion/client";
import { createUser } from "@/lib/actions/patient.actions";
import PhoneInputControlled from "../ui/form/phoneInput";

type TRegisterForm = {
  type: formTypes;
};
const RegisterForm = ({ type }: TRegisterForm) => {
  const router = useRouter();

  const form = useForm<z.infer<typeof registerFormScheme>>({
    resolver: zodResolver(registerFormScheme),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  const [isPending, setIsPending] = useState<boolean>(false);

  const submitForm = async (values: z.infer<typeof registerFormScheme>) => {
    setIsPending(true);
    console.log("dasdasd");
    const user = {
      email: values.email,
      name: values.name,
      phone: `+${values.phone}`,
    };
    try {
      if (type == "signup") {
        CreateUserQuery.mutate(user);
      } else if (type == "signin") {
        //Sign in logic
      } else {
        //Recovery Logic
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsPending(false);
    }
  };
  const CreateUserQuery = useMutation({
    mutationFn: async (userData: TCreateUser) => {
      const user = await createUser(userData);
      return user;
    },
    onSuccess: (user) => {
      router.push(`/user/${user?.$id}/register`);
    },
    onError: () => {
      console.log("error");
    },
  });

  return (
    <FormProvider {...form}>
      <form
        className="flex flex-col gap-4"
        onSubmit={form.handleSubmit(submitForm)}
      >
        {type == "signup" && (
          <>
            <PhoneInputControlled phoneName={"phone"} />
            {form.formState.errors.phone?.message && (
              <p className="text-red-500 text-xs">
                {form.formState.errors.phone?.message}
              </p>
            )}
            <DefaultInput
              formName="name"
              placeholder="Muratbekov Aman"
              label="Full name"
            />
          </>
        )}
        <DefaultInput
          formName="email"
          placeholder="example@email.com"
          label="Email"
        />

        <Button color="primary" type="submit">
          Let's go
        </Button>
      </form>
    </FormProvider>
  );
};

export default RegisterForm;
