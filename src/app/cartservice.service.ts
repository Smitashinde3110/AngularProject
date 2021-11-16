import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {
public cartItemList:any=[]
public productlist=new BehaviorSubject<any>([]);
  constructor() { }
getProduct()
{
 return this.productlist.asObservable();
}
setProduct(product:any)
{
  this.cartItemList.push(...product);
  this.productlist.next(product);
}
addtoCart(product:any)
{
  this.cartItemList.push(product);
  this.productlist.next(this.cartItemList);
  this.getTotalPrice();
  console.log(this.cartItemList);
}
getTotalPrice():number
{
  let grandTotal=0;
  this.cartItemList.map((a:any)=>{
    grandTotal +=a.total;
  })
  return grandTotal;
}
removeCartItem(product:any)
{
  this.cartItemList.map((a:any,index:any)=>
  {
    if(product.id==a.id)
    {
      this.cartItemList.splice(index,1);
    }
  })
  this.productlist.next(this.cartItemList);
}
removeAllCart()
{
  this.cartItemList=[]
  this.productlist.next(this.cartItemList);
}
}
