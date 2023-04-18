import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  product:any={}
  // prod:any={
  //   name:this.product.name,
  //   description:this.product.description,
  //   price:this.product.price,
  //   imageUrl:this.product.imageUrl,
  //   category:this.product.category
    
  // }
  
constructor(
  private myService: MyServiceService,
  private router : Router){}
ngOnInit(): void {
  this.product=this.myService.getProd()
  console.log(this.product);
  
} 
   
updatecar(){
   this.myService.UpdateFromdb(this.product).subscribe((data)=>{console.log(data)});
   this.router.navigate(["/admin"])
}



}
