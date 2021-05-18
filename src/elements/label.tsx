import React, { FC } from "react";

type Props = {
  forInput: string;
};

export const Label: FC<Props> = ({ children, forInput }) => (
  <label htmlFor={forInput} className="mb-2">
    {children}
  </label>
);
