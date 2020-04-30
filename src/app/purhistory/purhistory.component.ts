import { Purhistory } from './../model/purhistory';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purhistory',
  templateUrl: './purhistory.component.html',
  styleUrls: ['./purhistory.component.css']
})
export class PurhistoryComponent implements OnInit {
  history: Purhistory;
  historyList: Purhistory[];
  constructor(private router: Router) { }

  ngOnInit() {
  }


  viewHistory(): void{
    this.router.navigate(['/detail']);
  }


  backToSearch(): void{
    this.router.navigate(['/itemlist']);
  }

}
