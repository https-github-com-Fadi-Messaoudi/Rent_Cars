import { Component,OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: any[]=[];
  searchedData:any=[]
  constructor(private myService: MyServiceService) {}

  ngOnInit() {
    this.myService.getData().subscribe(data => {
      this.data = data;
    });
  }
  search() {
    this.myService.getdataSerched().subscribe((data) => {
      this.searchedData = data;
    });
}
}
