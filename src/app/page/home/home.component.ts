import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';




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
  showsync:any;
  term: string;


  constructor(private user: UserService,
              private router: Router) { }

  ngOnInit(): void {
    this.getSync();
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

  show_Trans1(){
    this.showData = false 
    this.transpond = false
  }

  show_home(){
    this.showData = true
    this.transpond = true
  }

  showAssetTranspond(){
    this.showTranspondAsset = false
    this.transpond = true
  }

  // function() {
  //   ('[data-toggle="tooltip"]').tooltip()
  //   }

  getSync(){
    this.user.getShowRecentSync()
    .subscribe(data => {
      this.showsync = data
      console.log(data)

      // var now = moment("04/09/2013 15:00:00");

      const start = this.showsync.Start_Time
      console.log(this.showsync)
      const end =this.showsync.End_Time

     const diff = end - start

      console.log(diff)
      const diffTime = Math.abs(end - start);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
      console.log(diffTime + " milliseconds");
      console.log(diffDays + " days");

      return Math.floor(diff/(1000*60*60)).toLocaleString(undefined, {minimumIntegerDigits: 2}) + ":" + (Math.floor(diff/(1000*60))%60).toLocaleString(undefined, {minimumIntegerDigits: 2})  + ":" + (Math.floor(diff/1000)%60).toLocaleString(undefined, {minimumIntegerDigits: 2}) ;

      
    });
  }
 
  route(){
    // this.router.navigate(['first'], { queryParams: { order: 'popular' } }  [queryParams]="{ appId: '1' , InstallId: '2' , assetType:'Email', assetId: '4', siteId:'892925384', siteName:'TechnologyPartnerPORTQIIPTELTD', assetName:'myeloqua', userId:'18', userName: 'Aditi.Sinha'}")
  this.router.navigate(['first'], { queryParams: { appId: '1' , InstallId: '2' , assetType:'Email', assetId: '4', siteId:'892925384', siteName:'TechnologyPartnerPORTQIIPTELTD', assetName:'myeloqua', userId:'18', userName: 'Aditi.Sinha' } });

  }

  getDiffDate(dateStart:Date, dateEnd:Date){
    return dateEnd.getTime() - dateStart.getTime() //result in miliseconds. Just convert it to whatever you want
 }

//  calculateDiff(data){
//   let date = new Date(data.sent);
//   let currentDate = new Date();

//   let days = Math.floor((currentDate.getTime() - date.getTime()) / 1000 / 60 / 60 / 24);
//   return days;
// }

days : any;

calculateDiff(dateSent){
  // console.log(dateSent)
  // console.log(dateSent.End_Time)
  // console.log(dateSent.Start_Time)

  let start = new Date(dateSent.Start_Time).getTime()
  // console.log(start)
  let end = new Date(dateSent.End_Time).getTime()
  // console.log(end)
  let time =  start - end
let hoursDiff = time / (3600 * 1000);
// console.log(hoursDiff)
// return hoursDiff

let diffDays = Math.floor(time / 86400000);  // days
let diffHrs = Math.floor((time % 86400000) / 3600000); // hours
let diffMins = Math.round(((time % 86400000) % 3600000) / 60000); // minutes
// console.log(diffDays + " days, " + diffHrs + " hours, " + diffMins + " minutes");


if (diffDays >= 1){
  
  return diffDays 

  
}   else {

  
  return diffHrs 
}



 }

 hoursTime(key){
  

  let start = new Date(key.Start_Time).getTime()
 
  let end = new Date(key.End_Time).getTime()
 
  let time =  start - end

// return hoursDiff

let diffDays = Math.floor(time / 86400000);  // days
let diffHrs = Math.floor((time % 86400000) / 3600000); // hours
let diffMins = Math.round(((time % 86400000) % 3600000) / 60000); // minutes
// console.log(diffDays + " days, " + diffHrs + " hours, " + diffMins + " minutes");


if (diffDays >= 1){
  
  return key = "Days ago"

  
}   else {

 
  // diffMins = -1
  // console.log("asdfsd")
  
  return key = "Hours ago"
}
 }


 target(k){
 console.log(k)
 localStorage.setItem('source_instance', JSON.stringify(k.Source_Site_Id));
 localStorage.setItem('target_instance', JSON.stringify(k.Target_Site_Id));
 localStorage.setItem('asset_type', JSON.stringify(k.Asset_Type));

 localStorage.setItem('asset_name', JSON.stringify(k.Asset_Name));
 localStorage.setItem('created', JSON.stringify(k.Start_Time));




 this.router.navigate(['assettarget'])
 }

 getImage(widget) {
  // if (this.isRootSearch) {
  //     return `./assets/svg${widget}`;
  // } else {
  //     return `./assets/svg/${this.selectedSVGFolder}/${widget}`;
  // }

  let asset_type = widget.Asset_Type
  let img = './assets/email_icon.png'
  let campaign_img = './assets/Announcement.png'
   let form  =  './assets/form1.png'

  if (asset_type == 'Email') {
    return img
  } else if (asset_type == 'Campaign') {  
    return campaign_img
  } else {
    return form

  }

  // return img
  console.log(widget.Asset_Type)
}
}
