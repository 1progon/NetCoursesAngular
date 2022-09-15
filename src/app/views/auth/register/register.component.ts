import {Component, OnInit} from '@angular/core';
import {RegisterDto} from "../../../dto/auth/registerDto";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: RegisterDto = <RegisterDto>{};

  constructor() {
  }

  ngOnInit(): void {
  }

}
