import { Component , OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  data: any[]=[];

  constructor(
    private myService: MyServiceService, 
    private router:Router ) {}

  ngOnInit() {
    this.myService.getData().subscribe(data => {
      this.data = data;
    });
  }
  GoTopost=()=>{
    this.router.navigate(["/post"])
  }
  deletecar(id:number){
    this.myService.deleteFromdb(id).subscribe(res=>{console.log(res);
      this.myService.getData().subscribe(data => {
        this.data = data;
      });
    })

  }
  Gotoupdate(prod:any){
    this.myService.setId(prod)
    this.router.navigate(["/Update"])
  }
  

}
