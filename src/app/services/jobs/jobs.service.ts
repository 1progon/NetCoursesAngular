import {Injectable} from '@angular/core';
import {Job} from "../../interfaces/jobs/Job";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Response} from "../../interfaces/response/Response";
import {environment} from "../../../environments/environment";
import {GetItemsDto} from "../../dto/getItemsDto";
import {PostJobDto} from "../../dto/jobs/postJobDto";

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(private http: HttpClient) {
  }

  // get jobs index data
  getJobs(limit = 20) {

    let params = new HttpParams();
    params = params.set('limit', limit);

    return this.http.get<Response<GetItemsDto<Job>>>(environment.apiUrl + 'jobs', {params})
  }

  // get single job
  getJob(id: number) {
    return this.http.get<Response<Job>>(environment.apiUrl + 'jobs/' + id);
  }

  // post job from form
  postJob(form: PostJobDto, file: File) {

    let formData = new FormData();
    formData.append('file', file);
    formData.append('form', JSON.stringify(form));


    return this.http.post<Response<Job>>(environment.apiUrl + 'jobs',
      formData);
  }


}
