import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'res-item-table-management',
  templateUrl: './res-item-table-management.component.html',
  styleUrls: ['./res-item-table-management.component.scss']
})
export class ResItemTableManagementComponent implements OnInit {
  products:any[]
  statusOptions:any;
  statusFilter:any;
  @ViewChild('dt') tableData:any;
  constructor() { }

  ngOnInit(): void {
    this.statusFilter =[{
      label:'Available',
      value:'on'
    },
    {
      label:'Unavailable',
      value:'off'
    }
  ]
    this.products=[
      {
        image:'assets/idli.jpg',
        name:'Idli',
        category:'Tiffen',
        cuisine:'Sounth Indian',
        price:'23',
        count:'4',
        status:'off'
    },
    {
      image:'assets/CBiryani.jpg',
      name:'Chicken Biryani',
      category:'Biruani',
      cuisine:'Sounth Indian',
      price:'232',
      count:'4',
      status:'on'
    },
    {
      image:'assets/Gobi.jpg',
      name:'Gopi Manchurian',
      cuisine:'North Indian',
      category:'Appatizers',
        price:'421',
        count:'4',
        status:'on'
    },
  ]
    this.statusOptions=[
      {
        // label:'Available',
        icon: 'pi pi-unlock',
        value:'on'
      },
      {
        // label:'Unavailable',
        icon:'pi pi-lock',
        value:'off'
      }
    ]
  }

  handleFilterStatus($event){
   
    this.tableData.filter($event.value.map(el=>el.value),'status','in')
  }

}
