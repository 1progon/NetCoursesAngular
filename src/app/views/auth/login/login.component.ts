import {Component, OnInit} from '@angular/core';
import {LoginDto} from "../../../dto/auth/loginDto";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: LoginDto = <LoginDto>{};

  constructor() {
  }

  ngOnInit(): void {
  }

}
