import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Response} from "../../interfaces/response/Response";
import {Course} from "../../interfaces/courses/Course";
import {GetItemsDto} from "../../dto/getItemsDto";
import {CourseVideos} from "../../interfaces/courses/CourseVideos";


@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) {
  }

  activeCourse?: Course;
  activeCourseVideo?: CourseVideos;

  // courses index page
  getCourses(limit = 20, offset = 0) {
    return this.http.get<Response<GetItemsDto<Course>>>(environment.apiUrl + 'courses');
  }

  // course single show page
  getCourse(id: number) {
    return this.http.get<Response<Course>>(environment.apiUrl + 'courses/' + id);
  }
}
