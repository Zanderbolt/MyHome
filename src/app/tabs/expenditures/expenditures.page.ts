import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expenditures',
  templateUrl: './expenditures.page.html',
  styleUrls: ['./expenditures.page.scss'],
})
export class ExpendituresPage implements OnInit {

  topics = [
    {
      title: 'Home',
      icon: 'home',
      color: '#3584E4'
    },
    {
      title: 'Food',
      icon: 'hamburger',
      color: '#FF9437'
    },
    {
      title: 'Alcohol',
      icon: 'beer',
      color: 'yellow'
    },
    {
      title: 'Entertainment',
      icon: 'ghost',
      color: 'white'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
