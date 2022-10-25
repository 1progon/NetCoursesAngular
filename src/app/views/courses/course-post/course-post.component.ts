import {Component, OnInit} from '@angular/core';
import {PostCourseDto} from "../../../dto/courses/postCourseDto";
import {CourseVideoType} from "../../../enums/courses/CourseVideoType";
import {CourseVideoSource} from "../../../enums/courses/CourseVideoSource";
import {CoursesService} from "../../../services/courses/courses.service";
import {Response} from "../../../interfaces/response/Response";
import {Course} from "../../../interfaces/courses/Course";
import {ActivatedRoute, Router} from "@angular/router";
import {Language} from "../../../interfaces/Language";
import {LanguagesService} from "../../../services/languages.service";
import {environment} from "../../../../environments/environment";
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-course-post',
  templateUrl: './course-post.component.html',
  styleUrls: ['./course-post.component.scss']
})
export class CoursePostComponent implements OnInit {

  constructor(private service: CoursesService,
              private router: Router,
              private langService: LanguagesService,
              private route: ActivatedRoute,
              private san: DomSanitizer) {
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

  dateInForm: string = '';

  fromClipBoard?: {
    title: string,
    desc: string,
    date: string,
    videoId: string,
    image: string
  };

  isClipSet = false;

  uploadedImageUrl?: string | SafeUrl;
  isCopiedLink = false;
  localFile: any = '';


  ngOnInit(): void {
    // get from clipboard
    this.route.queryParams.subscribe({
      next: value => {
        if (value['code'] == environment.code) {

          window.addEventListener('DOMContentLoaded', () => {
            navigator.clipboard.readText()
              .then(clip => {
                this.fromClipBoard = JSON.parse(clip);
                this.isClipSet = true;
              })
          })


        }
      }
    })


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

    let file = (<HTMLInputElement>e.target).files?.item(0);

    if (file) {
      this.courseImage = file;
      this.uploadedImageUrl = this.san.bypassSecurityTrustUrl(URL.createObjectURL(file));
    }


  }

  setData() {
    this.courseForm.name = this.fromClipBoard?.title ?? '';
    this.courseForm.description = this.fromClipBoard?.desc ?? '';
    this.courseForm.postedByAuthor = new Date(this.fromClipBoard?.date ?? '');
    this.dateInForm = this.fromClipBoard?.date ?? '';
    this.courseForm.videoLink = 'https://www.youtube.com/embed/' + this.fromClipBoard?.videoId;

    this.copyImageUrlToClipboard();
  }

  copyImageUrlToClipboard() {
    navigator.clipboard.writeText(this.fromClipBoard?.image ?? '').finally();
    this.isCopiedLink = true;

    setTimeout(() => {
      this.isCopiedLink = false;
    }, 500)
  }

  changeDate() {
    this.courseForm.postedByAuthor = new Date(this.dateInForm);
  }
}
