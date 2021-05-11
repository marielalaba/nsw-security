import React from "react";
import { Navlink } from "../elements/navlink";

export const Footer = () => (
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
      <Navlink href="/impressum">Impressum</Navlink>
      <Navlink href="/agb">AGB</Navlink>
    </div>
  </footer>
);
