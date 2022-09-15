import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './views/include/header/header.component';
import {FooterComponent} from './views/include/footer/footer.component';
import {HomepageComponent} from './views/homepage/homepage.component';
import {JobShowComponent} from './views/jobs/job-show/job-show.component';
import {JobsIndexComponent} from './views/jobs/jobs-index/jobs-index.component';
import {Error404Component} from './views/error/error404/error404.component';
import {JobPostComponent} from './views/jobs/job-post/job-post.component';
import {FormsModule} from "@angular/forms";
import {LoginComponent} from './views/auth/login/login.component';
import {RegisterComponent} from './views/auth/register/register.component';
import {JobSingleRowComponent} from './views/jobs/include/job-single-row/job-single-row.component';
import {JobsListRowsComponent} from './views/jobs/include/jobs-list-rows/jobs-list-rows.component';
import {HttpClientModule} from "@angular/common/http";
import {CoursesIndexComponent} from './views/courses/courses-index/courses-index.component';
import {CoursesShowComponent} from './views/courses/courses-show/courses-show.component';
import {ResumesIndexComponent} from './views/resumes/resumes-index/resumes-index.component';
import {ResumesShowComponent} from './views/resumes/resumes-show/resumes-show.component';
import {BlogIndexComponent} from './views/blog/blog-index/blog-index.component';
import {BlogShowComponent} from './views/blog/blog-show/blog-show.component';
import {AddResumeComponent} from './views/resumes/add-resume/add-resume.component';
import {PagesShowComponent} from './views/pages/pages-show/pages-show.component';
import {CardSingleComponent} from './views/courses/include/card-single/card-single.component';
import {CardListComponent} from "./views/courses/include/card-list/card-list.component";
import {GridListComponent} from './components/grid/grid-list/grid-list.component';
import {GridSingleComponent} from './components/grid/grid-single/grid-single.component';
import { CourseShowOrderComponent } from './views/courses/course-show-order/course-show-order.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    JobShowComponent,
    JobsIndexComponent,
    Error404Component,
    JobPostComponent,
    LoginComponent,
    RegisterComponent,
    JobSingleRowComponent,
    JobsListRowsComponent,
    CoursesIndexComponent,
    CoursesShowComponent,
    ResumesIndexComponent,
    ResumesShowComponent,
    BlogIndexComponent,
    BlogShowComponent,
    AddResumeComponent,
    PagesShowComponent,
    CardListComponent,
    CardSingleComponent,
    CardListComponent,
    GridListComponent,
    GridSingleComponent,
    CourseShowOrderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
