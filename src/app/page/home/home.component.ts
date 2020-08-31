import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  showData:boolean=true;
  transpond1: boolean = true;
  transpond: boolean = true;
  showTranspondAsset:boolean = true;

  constructor(private user: UserService) { }

  ngOnInit(): void {
  }

  folders = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    }
  ];


  screen(){
this.showData=false
this.transpond1 = false
  }

  show_Tranpond(){
    this.transpond1 = true
    this.transpond = false

    if(this.transpond = false){
       
    } 
  }

  showAssetTranspond(){
    this.showTranspondAsset = false
    this.transpond = true
  }

  // function() {
  //   ('[data-toggle="tooltip"]').tooltip()
  //   }

 
}
