import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Orders } from '../orders';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  
  order:Orders;
  public total = 0;
  constructor(
    private router:Router,
    ) { }

  ngOnInit(): void {
  
  this.order = JSON.parse(sessionStorage.getItem('OrderDetail'))
  
  for(let i = 0;i<this.order.Items.length;i++){
    this.total += Number(this.order.Items[i].Itemprice)
  }
  }

  goToList(){
    this.router.navigate(['/list'])
  }
 
}
