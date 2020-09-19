import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { map } from "rxjs/operators";
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js'



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
  getCommonClient:any;
  optionsitename:any;
  check_Licence:any; 
  target_instance:any;

  constructor(private user: UserService,
              private formBuilder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute ) { 
                this.y = window.location.href; 
                // console.log(y)
                console.log(this.y.split('/'));
                console.log(this.y.split('/')[6]);
                this.asset_type = this.y.split('/')[6]
                console.log(this.asset_type)
              

              }

  ngOnInit(): void {

    // const y = this.route.snapshot.paramMap.get('id');
   
    this.route.queryParams.subscribe(params => {
     console.log(params)
     console.log(params.siteName)
     this.check_Licence = params
     this.optionsitename = params.siteName
  });


    
    this.get_Asset();
    this.onGetCommonClient()

    this.editForm = this.formBuilder.group({
      // id: [''],
      assettype: ['',],
      search: ['',],
      // lastName: ['', Validators.required],
      // age: ['', Validators.required],
      // salary: ['', Validators.required]
    });

    this.checkLicence()
     
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
assetid:any;
assetType:any;
checkLicence(){
  const asseitid = this.check_Licence.assetId 
  console.log(asseitid)
  const assetType = this.check_Licence.assetType
  // const detail = { assetid}
  this.assetid = this.check_Licence.assetId 
  this.assetType =  this.check_Licence.assetType
 const c = {assetid: this.assetid , assetType:  this.check_Licence.assetType }

  if (this.assetid === "" && this.assetType === "myeloqua"){
    this.user.checkLicence(c).subscribe(result => {
      console.log(result)
      this.showAsset = result
      console.log(this.showAsset.length)
      return result;
    });
  }
  
}

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


  // this.router.navigate([''], { queryParams: { order: 'popular', asseitid: '1' } });

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


onGetCommonClient(){
  const k = {name: 'transporter', lastname: 'bh'}
  this.user.getCommonClient(k).subscribe(data_res => {
    console.log(data_res)

    this.getCommonClient = data_res;

   

   
    return ;
  });
}

home(){
  this.router.navigate([''])

}

onChange(deviceValue) {
  this.target_instance = deviceValue
  console.log(this.target_instance);
}

transfer(){
  if (this.target_instance === undefined){
    // alert("ok")
    // Swal.fire({
    //   title: 'Are you sure?',
    //   text: 'You will not be able to recover this imaginary file!',
    //   icon: 'warning',
    //   showCancelButton: true,
    //   confirmButtonText: 'Yes, delete it!',
    //   cancelButtonText: 'No, keep it'
    // }).then((result) => {
    //   if (result.value) {
    //     Swal.fire(
    //       'Deleted!',
    //       'Your imaginary file has been deleted.',
    //       'success'
    //     )
      
    //   } else if (result.dismiss === Swal.DismissReason.cancel) {
    //     Swal.fire(
    //       'Cancelled',
    //       'Your imaginary file is safe :)',
    //       'error'
    //     )
    //   }
    // })

    Swal.fire(
      'you have to Select Target Instance'
    )
  }else{
    const k = {sourceSiteId: '250973722', assetType: 'Program' , assetName:'assetName', assetId:'assetId', targetSiteName:'TechnologyPartnerportQii' }
    this.user.checkSyncRecord(k).subscribe(data_res => {
      console.log(data_res)

      Swal.fire('Transfer'+' '+data_res)
  
      // this.getCommonClient = data_res;
  
     
  
     
      return ;
    });
  }

  

}
}


