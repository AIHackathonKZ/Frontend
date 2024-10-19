"use client";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/high-res.css";

import React, { useEffect, useState } from "react";
import DefaultInput from "../../ui/form/defaultInput";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { patientFormScheme, registerFormScheme } from "@/lib/validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import { formTypes, RegisterUserParams, TCreateUser, User } from "@/types/userType";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { Input } from "@nextui-org/input";
import { div, em, p } from "framer-motion/client";
import { createPatient, createUser } from "@/lib/actions/patient.actions";
import PhoneInputControlled from "@/components/ui/form/phoneInput";
import { Tab, Tabs } from "@nextui-org/tabs";
import { patientFormTabs } from "@/constants/conts";
import CardUI from "@/components/ui/card";

type TRegisterForm = {
  user: TCreateUser;
};
const PatientTabs = ({ user }: {user: User}) => {
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState<string>("0");
  const form = useForm<z.infer<typeof patientFormScheme>>({
    resolver: zodResolver(patientFormScheme),
    defaultValues: {
      gender: "Male",
      email: user.email,
      phone: user.phone,
      name: user.name
    },
  });

  const [isPending, setIsPending] = useState<boolean>(false);

  const submitForm = async (values: z.infer<typeof patientFormScheme>) => {
    console.log("send");
    setIsPending(true);
    const data = {
      userId: user.$id,
      name: values.name,
      email: values.email,
      phone: values.phone,
      birthDate: new Date(values.birthDate),
      gender: values.gender,
      address: values.address,
      occupation: values.occupation,
      emergencyContactName: values.emergencyContactName,
      emergencyContactNumber: values.emergencyContactNumber,
      primaryPhysician: values.primaryPhysician,
      insuranceProvider: values.insuranceProvider,
      insurancePolicyNumber: values.insurancePolicyNumber,
      allergies: values.allergies,
      currentMedication: values.currentMedication,
      familyMedicalHistory: values.familyMedicalHistory,
      pastMedicalHistory: values.pastMedicalHistory,
      identificationType: values.identificationType,
      identificationNumber: values.identificationNumber,
      privacyConsent: values.privacyConsent,
    };
    try {
      RegisterQuery.mutate(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsPending(false);
    }
  };
  const RegisterQuery = useMutation({
    mutationFn: async (values: RegisterUserParams) => {
      const response = await createPatient(values);
      return response;
    },
    onSuccess: () =>{
      router.push('/successful')
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return (
    <FormProvider {...form}>
      <form
        className="flex flex-col gap-4"
        onSubmit={form.handleSubmit(submitForm)}
      >
        <Tabs
          selectedKey={selectedTab}
          onSelectionChange={(val) => setSelectedTab(val as string)}
        >
          {patientFormTabs.map((item, index, array) => {
            const Form = item.form;
            return (
              <Tab key={index} title={item.title}>
                <CardUI>
                  {<Form />}
                  {index != array.length - 1 && (
                    <Button
                      className="mt-4"
                      color="primary"
                      onClick={() => setSelectedTab((index + 1).toString())}
                    >
                      Next
                    </Button>
                  )}
                </CardUI>
              </Tab>
            );
          })}
        </Tabs>
      </form>
    </FormProvider>
  );
};

export default PatientTabs;
