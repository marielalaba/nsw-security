import React, { FC } from "react";

type Props = {
  imgSrc: string;
  imgDescription?: string;
};

export const ImageTeaser: FC<Props> = ({
  children,
  imgSrc,
  imgDescription = "",
}) => (
  <div className="flex gap-4">
    <img src={imgSrc} alt={imgDescription} />
    <div>{children}</div>
  </div>
);
