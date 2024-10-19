"use client";

import React, { Key, useState } from "react";
import CardUI from "../ui/card";
import { Tab, Tabs } from "@nextui-org/tabs";
import RegisterForm from "./registerForm";
import { formTypes } from "@/types/userType";
import { useRouter } from "next/navigation";

const RegisterTabs = () => {

  const [selectedForm, setSelectedForm] = useState<string>("signin");
  const tabsTitles: { name: string; key: formTypes }[] = [
    {
      name: "Sign up",
      key: "signup",
    },
    {
      name: "Sign in",
      key: "signin",
    }
  ];

  return (
    <div className="flex flex-col w-full">
      <Tabs
        aria-label="register tabs"
        selectedKey={selectedForm}
        onSelectionChange={(key) => setSelectedForm(key.toString())}
      >
        {tabsTitles.map((item) => {
          return (
            <Tab key={item.key} title={item.name}>
              <CardUI>
                <RegisterForm type={item.key} />
              </CardUI>
            </Tab>
          );
        })}
      </Tabs>
    </div>
  );
};

export default RegisterTabs;
