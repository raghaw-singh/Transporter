import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { map } from "rxjs/operators";
import { Router } from '@angular/router';


@Component({
  selector: 'app-asset-pages',
  templateUrl: './asset-pages.component.html',
  styleUrls: ['./asset-pages.component.scss']
})
export class AssetPagesComponent implements OnInit {


  showData: boolean = true
  showSelect: boolean = true
  showTransferscreen: boolean = true
  showItem: boolean = false
  data_asset: any

  editForm: FormGroup;
  showAsset: any;

  p = 1;    /* this show page in pagination controller after page load */
  asset_type:any
  term: string;
  y:any
  url_param:any;


  constructor(private user: UserService,
              private formBuilder: FormBuilder,
              private router: Router) { 
                this.y = window.location.href; 
                // console.log(y)
                console.log(this.y.split('/'));
                console.log(this.y.split('/')[6]);
                this.asset_type = this.y.split('/')[6]
                console.log(this.asset_type)
              

              }

  ngOnInit(): void {
    
    this.get_Asset();

    this.editForm = this.formBuilder.group({
      // id: [''],
      assettype: ['',],
      search: ['',],
      // lastName: ['', Validators.required],
      // age: ['', Validators.required],
      // salary: ['', Validators.required]
    });
  }

  data = [
    {
      Asset_Type_Name: 'Photos',
      // updated: new Date('1/1/16'),
    },
    {
      Asset_Type_Name: 'Recipes',
      // updated: new Date('1/17/16'),
    },
    {
      Asset_Type_Name: 'Work',
      // updated: new Date('1/28/16'),
    }
  ];


  screen(){
this.showData=false
  }


  showCheckbox(){
    this.showSelect=false
  }

  ItemNmumber(){
this.showItem=true
  }


  teansferScreen(){
this.showTransferscreen=false
  }


  get_Asset() {
    this.user.getAsset()
    .subscribe(data => {
      this.data_asset = data
      console.log(data)
      
    });
}

// onSubmit() {
//   this.user.showAsset(this.editForm.value)
//     .pipe()
//     .subscribe(
//       data => {
//         console.log(data)
        // if(data.status === 200) {
         
        
        // }else {
          
        // }
//       },
//       error => {
       
//       });
// }

onSubmit(){
  this.user.showAsset(this.editForm.value).subscribe(result => {
    console.log(result)
    this.showAsset = result
    console.log(this.showAsset.length)
    return result;
  });
}


onClick(val:any){
  console.log(val)
  // this.router.navigate(['d'+'/'+ 2]);
  // this.router.navigate(['d'+'/'+ val]);
  // this.router.navigate(['d'], { queryParams: { order: 'popular' } });
  this.router.navigate(['d' + '/'+ 2], )
  localStorage.setItem('instance', JSON.stringify(val));



  const p = {}
  // this.user.showRecentSync(p).subscribe(data => {
  //   console.log(data)
   
  //   return ;
  // });

  this.url_param = this.y
  console.log(this.url_param)

  this.user.getSyncRecordByAssetTypeAndAssetId(p).subscribe(data => {
    console.log(data)
    localStorage.setItem('whatever', JSON.stringify(data));

   
    return ;
  });

  // this.user.getSyncRecordByAssetTypeAndAssetId(p);



  // this.clickedValue = val;
  // console.log(clickedVal);
}


// handlePageChange(event) {
//   this.page = event;
// }
}


