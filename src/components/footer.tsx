import { useRouter } from "next/router";
import React from "react";
import { Navlink } from "../elements/navlink";
import { AGB, IMPRESSUM, routeIsActive } from "../routing/routes";

export const Footer = () => {
  const router = useRouter();

  return (
    <footer className="w-full flex justify-between items-center bg-darkblue text-white font-light p-8">
      <div>
        <p>NSW Security Services</p>
        <p>Postfach 3214</p>
        <p>8404 Winterthur</p>
      </div>
      <div>
        <p>Tel: +41 52 242 46 59</p>
        <p>Fax: +41 52 242 46 55</p>
        <a
          className="transition-colors hover:text-gold"
          href="mailto:kontakt@nsw.ch"
        >
          kontakt@nsw.ch
        </a>
      </div>
      <div className="flex flex-col gap-2 text-right">
        <Navlink href={IMPRESSUM} active={routeIsActive(router, IMPRESSUM)}>
          Impressum
        </Navlink>
        <Navlink href={AGB} active={routeIsActive(router, AGB)}>
          AGB
        </Navlink>
      </div>
    </footer>
  );
};
