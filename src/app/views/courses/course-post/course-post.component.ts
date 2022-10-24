import {Component, OnInit} from '@angular/core';
import {PostCourseDto} from "../../../dto/courses/postCourseDto";
import {CourseVideoType} from "../../../enums/courses/CourseVideoType";
import {CourseVideoSource} from "../../../enums/courses/CourseVideoSource";
import {CoursesService} from "../../../services/courses/courses.service";
import {Response} from "../../../interfaces/response/Response";
import {Course} from "../../../interfaces/courses/Course";
import {Router} from "@angular/router";
import {Language} from "../../../interfaces/Language";
import {LanguagesService} from "../../../services/languages.service";

@Component({
  selector: 'app-course-post',
  templateUrl: './course-post.component.html',
  styleUrls: ['./course-post.component.scss']
})
export class CoursePostComponent implements OnInit {

  constructor(private service: CoursesService,
              private router: Router,
              private langService: LanguagesService) {
  }

  courseForm: PostCourseDto = <PostCourseDto>{
    videoType: CourseVideoType.SingleVideo,
    videoSource: CourseVideoSource.Youtube,
    languageId: 1,
  };
  minLength: number = 5;
  courseImage: File = <File>{};

  videoSources = CourseVideoSource;
  videoSourcesValues = <number[]>Object.values(CourseVideoSource).filter(Number);

  videoTypes = CourseVideoType;
  videoTypesValues = <number[]>Object.values(CourseVideoType).filter(Number);

  languages: Language[] = [];


  ngOnInit(): void {
    this.langService.getLanguages()
      .subscribe({
        next: value => {
          this.languages = value.data;
        }
      })

  }

  submitForm() {
    this.service.postCourse(this.courseForm, this.courseImage)
      .subscribe({
        next: (value: Response<Course>) => {
          if (value.responseCode == 200) {
            this.router.navigateByUrl('/courses/' + value.data.id).finally();
          }
        },
        error: err => {
          console.log(err)
        }
      })

  }

  onFileChange(e: Event) {
    let files = (<HTMLInputElement>e.target).files;

    if (files?.[0]) {
      this.courseImage = files[0];
    }


  }
}