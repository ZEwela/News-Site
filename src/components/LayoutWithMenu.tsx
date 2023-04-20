import Menu from "./Menu";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function LayoutWithMenu({ children }: Props) {
  return (
    <>
      <Menu />
      {children}
    </>
  );
}
