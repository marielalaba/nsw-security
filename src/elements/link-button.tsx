import Link from "next/link";
import React, { FC } from "react";

type Props = {
  href: string;
};

export const LinkButton: FC<Props> = ({ href, children }) => (
  <Link passHref href={href}>
    <a className="">{children}</a>
  </Link>
);
