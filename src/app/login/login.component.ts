import { User } from './../model/user';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(){
    if (this.user.type === 1 || this.user.type === 2){
          this.router.navigate(['/itemlist']);
    }else{
      this.router.navigate(['/adminlanding']);
    }

  }

}
