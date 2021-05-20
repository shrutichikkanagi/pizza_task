import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Orders } from '../orders';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
orders:Orders[];

  constructor(private orderservice:OrdersService,
    private router:Router) { }

  ngOnInit(): void {
    this.orderservice.getOrders()
    .subscribe(orders=>{
      this.orders = orders;
    })
  }

  changeStatus(value){
  
    if(this.orders[value-1].Status === "preparing"){
      this.orders[value-1].Status = "order delivered";
      

    }
    else if(this.orders[value-1].Status === "order delivered"){
      this.orders[value-1].Status = "ready to serve";
      

    }

    else {
      this.orders[value-1].Status = "Order closed"
    
  }
    
  }

  gotoDetail(value){
    sessionStorage.setItem('OrderDetail',JSON.stringify(this.orders[value-1]))
    this.router.navigate(['orderdetail',value]);
  }
    
  

}
