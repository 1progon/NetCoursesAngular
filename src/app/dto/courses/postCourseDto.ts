import {CourseVideoSource} from "../../enums/courses/CourseVideoSource";
import {CourseVideoType} from "../../enums/courses/CourseVideoType";

export interface PostCourseDto {
  name: string;
  link?: string;
  videoLink?: string;
  description: string;
  article?: string;
  videoType: CourseVideoType;
  videoSource: CourseVideoSource;
  postedByAuthor: Date;
  languageId: number;
}
