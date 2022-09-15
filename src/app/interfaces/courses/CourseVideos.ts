import {CourseVideoSource} from "../../enums/courses/CourseVideoSource";
import {BaseModel} from "../BaseModel";

export interface CourseVideos extends BaseModel {
  id: number;
  videoLink: string;
  image?: string;
  courseId: number;
  videoSource: CourseVideoSource;
  order: number;
}
