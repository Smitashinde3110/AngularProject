import { Component, OnInit } from '@angular/core';
import { CartserviceService } from '../cartservice.service';
import { ServiceAPIService } from '../service-api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public productList:any;
  constructor(private api :ServiceAPIService,private cartService:CartserviceService) { }

  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res=>{
      this.productList=res;
    this.productList.forEach((a:any) => {
      Object.assign(a,{quantity:1,total:a.price});
    });
    })
  }

  addtocart(item:any)
  {
this.cartService.addtoCart(item);
  }
}
