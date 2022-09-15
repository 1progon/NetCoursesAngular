import {Injectable} from '@angular/core';
import {Job} from "../../interfaces/jobs/Job";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Response} from "../../interfaces/response/Response";
import {environment} from "../../../environments/environment";
import {GetItemsDto} from "../../dto/getItemsDto";

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(private http: HttpClient) {
  }


  getJobs(limit = 20) {

    let params = new HttpParams();
    params = params.set('limit', limit);

    return this.http.get<Response<GetItemsDto<Job>>>(environment.apiUrl + 'jobs', {params})
  }

  getJob(id: number) {
    return this.http.get<Response<Job>>(environment.apiUrl + 'jobs/' + id);
  }

  postJob(job: Job) {
    let data = JSON.stringify(job);
    return this.http.post<Response<Job>>(environment.apiUrl + 'jobs',
      data)
  }


}
