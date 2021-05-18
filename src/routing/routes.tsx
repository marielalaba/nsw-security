import { NextRouter } from "next/router";

export const ANGEBOTE = "/angebote";
export const REFERENZEN = "/referenzen";
export const FAQ = "/faq";
export const KONTAKT = "/kontakt";
export const IMPRESSUM = "/impressum";
export const AGB = "/agb";

export const routeIsActive = (router: NextRouter, route: string) =>
  router.pathname === route;
