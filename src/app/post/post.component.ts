import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  prod:any={
    name:"",
    description:"",
    price:'',
    imageUrl:"",
    category:""
    
  }
  constructor(
    private myService: MyServiceService, 
    private router :Router) {}


ngOnInit(): void {
   
}
postproduct(){
  this.myService.postToDatabase(this.prod).subscribe((res)=>{console.log(res)}
  );
  this.router.navigate(["/admin"])
}




}
