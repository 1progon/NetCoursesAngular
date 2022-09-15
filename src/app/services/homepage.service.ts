import {Injectable} from '@angular/core';
import {Response} from "../interfaces/response/Response";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {HomepageDto} from "../dto/homepageDto";

@Injectable({
  providedIn: 'root'
})
export class HomepageService {

  constructor(private http: HttpClient) {
  }

  homepage() {
    return this.http.get<Response<HomepageDto>>(environment.apiUrl + 'homepage')
  }
}
