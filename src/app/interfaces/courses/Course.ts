import {BaseModel} from "../BaseModel";
import {CourseVideoSource} from "../../enums/courses/CourseVideoSource";
import {CourseVideoType} from "../../enums/courses/CourseVideoType";
import {CourseVideos} from "./CourseVideos";
import {Status} from "../../enums/Status";
import {Language} from "../Language";

export interface Course extends BaseModel {
  link?: string;
  videoLink?: string;
  videoType?: CourseVideoType;
  videoSource: CourseVideoSource;
  description: string;
  article?: string;
  image?: string;

  courseVideos?: CourseVideos[];

  postedByAuthor: Date;
  updatedByAuthor?: Date;

  status: Status;

  language?: Language;
  languageId?: number;


}



