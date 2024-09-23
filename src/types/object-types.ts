import { ServerKeys } from "@/services/server-keys";
import { type MenuProps } from "antd";
import { type DefaultOptionType } from "antd/es/select";
import { ColorCode } from "./constants-type";

export type LoginCarouselObj = {
  headline: string;
  para: string;
};

export type MenuItem = Required<MenuProps>["items"][number];

export type LegendObject = {
  legend: string;
  legendObj: Record<ColorCode, string>;
};

export type CommonReducerPayload<T> = {
  stateKey: keyof T,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any;
}

export type ISelectOption = {
  [ServerKeys.LABEL]?: React.ReactNode;
  [ServerKeys.VALUE]?: string | number | null;
  children?: Omit<DefaultOptionType, "children">[];
}

export type MessageModalCallObj = {
  title?: string;
  message?: string;
}