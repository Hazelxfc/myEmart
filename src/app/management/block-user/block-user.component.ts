import { User } from './../../model/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-block-user',
  templateUrl: './block-user.component.html',
  styleUrls: ['./block-user.component.css']
})
export class BlockUserComponent implements OnInit {
  user: User;
  userList: User[];
  constructor() { }

  ngOnInit() {
  }

  unblockuser(): void{
    console.log('User Unblocked:' + this.user);
  }

  blockuser(): void{
    console.log('User blocked:' + this.user);
  }

}
