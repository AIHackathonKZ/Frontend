import React from "react";
import { Card, CardBody } from "@nextui-org/react";

type TCardUI = {
  children: React.ReactNode;
};
const CardUI = ({ children }: TCardUI) => {
  return (
    <Card>
      <CardBody>{children} </CardBody>
    </Card>
  );
};

export default CardUI;
