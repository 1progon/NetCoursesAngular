import {BaseModel} from "../BaseModel";

export interface Company extends BaseModel {
  url: string;
  foundation: number;
  country: string;
  logoImagePath?: string;
}
