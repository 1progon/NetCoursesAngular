import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Response} from "../../interfaces/response/Response";
import {Course} from "../../interfaces/courses/Course";
import {GetItemsDto} from "../../dto/getItemsDto";
import {CourseVideos} from "../../interfaces/courses/CourseVideos";
import {PostCourseDto} from "../../dto/courses/postCourseDto";


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

  // post a job from form
  postCourse(coursePostDto: PostCourseDto, image: File) {

    let data = new FormData();
    data.append('file', image);
    data.append('courseDto', JSON.stringify(coursePostDto));

    return this.http.post<Response<Course>>(environment.apiUrl + 'courses',
      data
    )
  }
}
