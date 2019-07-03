import { Component, OnInit } from '@angular/core';
import { ExpenditureI } from '../../models/expenditure.interface'
import { ExpenditureService } from 'src/app/services/expenditure.service';


@Component({
  selector: 'app-expenditures',
  templateUrl: './expenditures.page.html',
  styleUrls: ['./expenditures.page.scss'],
})
export class ExpendituresPage implements OnInit {
  expenditures: ExpenditureI[]
  topics = [
    {
      title: 'Home',
      icon: 'home',
      color: 'primary',
      selected: true,
    },
    {
      title: 'Food',
      icon: 'pizza',
      color: 'red',
      selected: false,
    },
    {
      title: 'Alcohol',
      icon: 'beer',
      color: 'yellow',
      selected: false,
    },
    {
      title: 'Entertainment',
      icon: 'logo-game-controller-b',
      color: 'light',
      selected: false,
    }
  ]

  constructor(public expendituresService: ExpenditureService) { }

  ngOnInit() {
    this.expendituresService.getExpenditures().subscribe(res => this.expenditures = res);
  }

}
