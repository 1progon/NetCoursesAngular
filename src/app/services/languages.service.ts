import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Response} from "../interfaces/response/Response";
import {Language} from "../interfaces/Language";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {

  constructor(private http: HttpClient) {
  }

  getLanguages() {
    return this.http.get<Response<Language[]>>(environment.apiUrl + 'languages')
  }
}
