import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  isSignin: boolean;

  ngOnInit(): void {
    if (sessionStorage.getItem('token')){
      this.isSignin = true;
    } else {
      this.isSignin = false;
    }
  }

  signOut() {
    sessionStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}
