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
  <div className="inline-grid grid-rows-2 gap-4">
    <img src={imgSrc} alt={imgDescription} />
    <div className="content-center">{children}</div>
  </div>
);
