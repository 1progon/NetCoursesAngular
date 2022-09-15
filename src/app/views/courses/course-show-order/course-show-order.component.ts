import {Component, OnInit} from '@angular/core';
import {CourseVideos} from "../../../interfaces/courses/CourseVideos";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {CoursesService} from "../../../services/courses/courses.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-course-show-order',
  templateUrl: './course-show-order.component.html',
  styleUrls: ['./course-show-order.component.scss']
})
export class CourseShowOrderComponent implements OnInit {
  videoUrl?: SafeResourceUrl;
  video?: CourseVideos;

  constructor(public courseService: CoursesService,
              private sanitizer: DomSanitizer,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: value => {

        let getVideo = () => {
          this.video = this.courseService
            .activeCourse?.courseVideos?.find(v => v.order == value['order']);

          this.courseService.activeCourseVideo = this.video;

          if (this.video) {
            this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.video.videoLink);
          }
        }

        if (!this.courseService.activeCourse) {
          let tries = 0;
          let id = setInterval(() => {
            if (tries > 90) {
              clearInterval(id);
              this.router.navigateByUrl('/courses/').finally();
              return;
            }
            if (this.courseService.activeCourse) {
              clearInterval(id);
              getVideo();
            }

            tries++;
          }, 50);

        } else {
          getVideo();
        }


      }
    })


  }

}
