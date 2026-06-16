import AccordionDoc from "./accordion/index";
import AlertDoc from "./alert/index";
import ButtonDoc from "./button/index";
import type { Component } from "solid-js";

export const docs: Record<string, Component> = {
  accordion: AccordionDoc,
  alert: AlertDoc,
  button: ButtonDoc,
};
