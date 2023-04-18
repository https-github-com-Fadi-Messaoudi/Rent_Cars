import { Component, OnInit } from '@angular/core';
import { MyServiceService } from 'src/app/my-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 search:string=""

constructor(private myservice:MyServiceService){}
ngOnInit(): void {
  
}
sendSerch(){
  this.myservice.setSearchterm(this.search)
}

}
