import {BaseModel} from "../BaseModel";
import {Company} from "../companies/Company";
import {JobsPaid} from "./JobsPaid";
import {Status} from "../../enums/Status";

export interface Job extends BaseModel {
  level: string;
  description: string;
  article: string;
  image: string;
  location: string;
  url: string;
  tags: string[];
  company: Company;

  paid: JobsPaid;

  status: Status;

}


