import { Component, OnInit } from '@angular/core';

interface orderSummaryList {
  title:string;
  subTitle:string;
  price:string
}

@Component({
  selector: 'app-res-order-taking',
  templateUrl: './res-order-taking.component.html',
  styleUrls: ['./res-order-taking.component.scss']
})
export class ResOrderTakingComponent implements OnInit {
  selectedOrder="New";
  orderSummary: orderSummaryList[];
  constructor() { }

  ngOnInit(): void {
    this.orderSummary=[
      {
        title:'order #2323',
        subTitle:'ASAP',
        price:'$234'
      },
      {
        title:'order #6543',
        subTitle:'Today, 12:00',
        price:'$543'
      },
      {
        title:'order #7342',
        subTitle:'Today, 10:45',
        price:'$983'
      }
    ]
  }

}
