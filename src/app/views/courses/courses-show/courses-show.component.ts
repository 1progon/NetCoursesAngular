import {Component, OnInit} from '@angular/core';
import {Course} from "../../../interfaces/courses/Course";
import {CoursesService} from "../../../services/courses/courses.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {CourseVideoType} from "../../../enums/courses/CourseVideoType";

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

  links: any;

  ngOnInit(): void {
    // get param slug
    this.route.params.subscribe({
      next: value => {
        console.log(value)

        // get single course by slug param
        this.courseService.getCourse(value['slug'])
          .subscribe({
            next: course => {
              this.course = course;

              // if course single video
              if (course.videoType == CourseVideoType.SingleVideo) {
                if (course.videoLink) {
                  this.videoUrl = this.sanitizer
                    .bypassSecurityTrustResourceUrl(course.videoLink);
                }
              } else if (course.videoType == CourseVideoType.PlaylistVideo) {
                // if course playlist video redirect to children outlet
                if (course.courseVideos && course.courseVideos.length > 0) {
                  this.courseService.activeCourse = course;
                  this.courseService.activeCourseVideo = course.courseVideos[0];
                  this.router
                    .navigateByUrl('/courses/' + value['slug'] + '/' + course.courseVideos[0].order)
                    .finally();
                }
              }


            }
          })
      }
    })


  }


}
