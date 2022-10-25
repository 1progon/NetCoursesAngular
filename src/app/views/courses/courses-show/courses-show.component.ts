import {Component, OnInit} from '@angular/core';
import {Course} from "../../../interfaces/courses/Course";
import {CoursesService} from "../../../services/courses/courses.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DomSanitizer, SafeHtml, SafeResourceUrl} from "@angular/platform-browser";
import {CourseVideoType} from "../../../enums/courses/CourseVideoType";
import {HttpErrorResponse} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-courses-show',
  templateUrl: './courses-show.component.html',
  styleUrls: ['./courses-show.component.scss']
})
export class CoursesShowComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              public courseService: CoursesService,
              private sanitizer: DomSanitizer,
              private router: Router) {
  }

  course: Course = <Course>{};
  videoUrl?: SafeResourceUrl;

  domainUrl = environment.domainUrl;
  sanitizedArticle: SafeHtml = '';

  links: any;

  ngOnInit(): void {
    // get param slug
    this.route.params.subscribe({
      next: params => {

        // get single course by id param
        this.courseService.getCourse(params['id'])
          .subscribe({
            next: response => {
              // set data to course model
              this.course = response.data;

              // if course single video
              if (response.data.videoType == CourseVideoType.SingleVideo) {
                if (response.data.videoLink) {
                  this.videoUrl = this.sanitizer
                    .bypassSecurityTrustResourceUrl(response.data.videoLink);
                }
              } else if (response.data.videoType == CourseVideoType.PlaylistVideo) {
                // if course playlist video redirect to children outlet
                if (response.data.courseVideos && response.data.courseVideos.length > 0) {
                  this.courseService.activeCourse = response.data;
                  this.courseService.activeCourseVideo = response.data.courseVideos[0];
                  this.router
                    .navigateByUrl('/courses/' + params['id'] + '/' + response.data.courseVideos[0].order)
                    .finally();
                }
              }

              // set sanitized article html
              this.sanitizedArticle = this.sanitizer.bypassSecurityTrustHtml(this.course.article ?? '');


            },
            error: (err: HttpErrorResponse) => {
              if (err.status == 404) {
                this.router.navigateByUrl('/404').finally();
              }
            }
          })
      }
    })


  }


}
