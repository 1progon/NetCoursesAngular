import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomepageComponent} from "./views/homepage/homepage.component";
import {JobShowComponent} from "./views/jobs/job-show/job-show.component";
import {JobsIndexComponent} from "./views/jobs/jobs-index/jobs-index.component";
import {Error404Component} from "./views/error/error404/error404.component";
import {JobPostComponent} from "./views/jobs/job-post/job-post.component";
import {LoginComponent} from "./views/auth/login/login.component";
import {RegisterComponent} from "./views/auth/register/register.component";
import {CoursesIndexComponent} from "./views/courses/courses-index/courses-index.component";
import {CoursesShowComponent} from "./views/courses/courses-show/courses-show.component";
import {ResumesIndexComponent} from "./views/resumes/resumes-index/resumes-index.component";
import {ResumesShowComponent} from "./views/resumes/resumes-show/resumes-show.component";
import {BlogIndexComponent} from "./views/blog/blog-index/blog-index.component";
import {BlogShowComponent} from "./views/blog/blog-show/blog-show.component";
import {AddResumeComponent} from "./views/resumes/add-resume/add-resume.component";
import {PagesShowComponent} from "./views/pages/pages-show/pages-show.component";
import {CourseShowOrderComponent} from "./views/courses/course-show-order/course-show-order.component";

const routes: Routes = [
  {path: '', component: HomepageComponent},

  // jobs
  {path: 'jobs', component: JobsIndexComponent},
  {path: 'add-job', component: JobPostComponent},
  {path: 'jobs/:id', component: JobShowComponent},

  //  resume
  {path: 'resumes', component: ResumesIndexComponent},
  {path: 'add-resume', component: AddResumeComponent},
  {path: 'resumes/:id', component: ResumesShowComponent},

  // courses
  {path: 'courses', component: CoursesIndexComponent},
  {
    path: 'courses/:id', component: CoursesShowComponent,
    children: [
      {path: ':order', component: CourseShowOrderComponent},
    ]
  },

  // blogs
  {path: 'blog', component: BlogIndexComponent},
  {path: 'blog/:slug', component: BlogShowComponent},

  // pages
  {path: 'pages/:slug', component: PagesShowComponent},


  //auth
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},

  // errors
  {path: '404', component: Error404Component},
  {path: '**', redirectTo: '/404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
