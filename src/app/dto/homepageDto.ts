import {Job} from "../interfaces/jobs/Job";
import {Course} from "../interfaces/courses/Course";

export interface HomepageDto {
  jobs: Job[];
  courses: Course[];
}
