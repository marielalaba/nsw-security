import React, { FC } from "react";

type Props = {
  id: string;
  placeholder?: string;
};

export const Input: FC<Props> = ({ children, id, placeholder = "" }) => (
  <input type="text" id={id} placeholder={placeholder} className="border p-4">
    {children}
  </input>
);
