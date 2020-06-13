import { UserService } from './../service/user.service';
import { User } from './../model/user';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;

  username = new FormControl('', [Validators.required, Validators.email, Validators.maxLength(30)]);
  password = new FormControl('', [Validators.required, Validators.maxLength(30)]);

  constructor(private router: Router,
              private userService: UserService) { }

  ngOnInit() {
    this.username.setValue('user1@xfc.com');
    this.password.setValue('123456');
  }

  validateInput(): boolean {
    document.getElementById('username').click();
    document.getElementById('password').click();
    if (this.username.errors != null || this.password.errors != null) {
      return false;
    }
    return true;
  }

  login() {
    if (this.validateInput()) {
      const user = {
        email: this.username.value,
        password: this.password.value
       // 'password': Md5.hashStr(this.password.value).toString()
      };
      // console.log('login: ', user);
     // this.displayService.setMsg([]);
      this.userService.login(user).subscribe(
        data => {
          // console.log(data);
          this.userService.setUserInfo(data);
       //   this.configService.initConfiguration();
          if (data['user']['type'] === 1 || data['user']['type'] === 2 ) {
            this.router.navigate(['/itemlist']);
          } else {
            this.router.navigate(['/adminlanding']);
          }
        },
        err => {
          console.log(err);
        }
      );
    }
  }

  clear() {
    this.username.setValue('');
    this.password.setValue('');
  }

  register() {
    this.router.navigate(['/register']);
  }



}
