import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-asset-page-target',
  templateUrl: './asset-page-target.component.html',
  styleUrls: ['./asset-page-target.component.scss']
})
export class AssetPageTargetComponent implements OnInit {

  // showData: boolean = true
  // showSelect: boolean = true
  // showTransferscreen: boolean = true
  // showItem: boolean = false
  // data_asset: any

  // editForm: FormGroup;
  // showAsset: any;

  // p = 1;    /* this show page in pagination controller after page load */
  // asset_type:any
  // term: string;
  // y:any
  // url_param:any;
  // getCommonClient:any;
  // optionsitename:any;
  // check_Licence:any; 

  // source_instance:any;
  // target_instance:any;
  // asset_Type:any;

  data_history :any;
  asset_name:any;
  created:any;

  constructor(private user: UserService,
              private formBuilder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute ) { 
               

              }

  ngOnInit(): void {

    // const r = JSON.parse(localStorage.getItem('source_instance'))
    // console.log(r)
    // this.source_instance = r
    // const p = JSON.parse(localStorage.getItem('target_instance'))
    // this.target_instance = p
    // console.log(p)
    // const asset = JSON.parse(localStorage.getItem('asset_type'))
    // this.asset_Type = asset
    // console.log(asset)

    // const y = this.route.snapshot.paramMap.get('id');

     const asset = JSON.parse(localStorage.getItem('asset_name'))
     this.asset_name = asset
     console.log(this.asset_name)

     const create = JSON.parse(localStorage.getItem('created'))
     this.created = create
     console.log(this.created)

   
   
    this.route.queryParams.subscribe(params => {
    //  console.log(params)
    //  console.log(params.siteName)
    //  this.check_Licence = params
    //  this.optionsitename = params.siteName
  });


    
    // this.get_Asset();
    // this.onGetCommonClient()

    // this.editForm = this.formBuilder.group({
    //   // id: [''],
    //   assettype: ['',],
    //   search: ['',],
    //   // lastName: ['', Validators.required],
    //   // age: ['', Validators.required],
    //   // salary: ['', Validators.required]
    // });

    // this.checkLicence()


    const p = {}

    this.user.getSyncRecordByAssetTypeAndAssetId(p).subscribe(data => {
      console.log(data)

      this.data_history = data
      // localStorage.setItem('whatever', JSON.stringify(data));
  
     
      return ;
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


//   screen(){
// this.showData=false
//   }


//   showCheckbox(){
//     this.showSelect=false
//   }

//   ItemNmumber(){
// this.showItem=true
//   }


//   teansferScreen(){
// this.showTransferscreen=false
//   }


//   get_Asset() {
//     this.user.getAsset()
//     .subscribe(data => {
//       this.data_asset = data
//       console.log(data)
      
//     });
// }


// assetid:any;
// assetType:any;
// checkLicence(){
//   const asseitid = this.check_Licence.assetId 
//   console.log(asseitid)
//   const assetType = this.check_Licence.assetType
//   // const detail = { assetid}
//   this.assetid = this.check_Licence.assetId 
//   this.assetType =  this.check_Licence.assetType
//  const c = {assetid: this.assetid , assetType:  this.check_Licence.assetType }

//   if (this.assetid === "" && this.assetType === "myeloqua"){
//     this.user.checkLicence(c).subscribe(result => {
//       console.log(result)
//       this.showAsset = result
//       console.log(this.showAsset.length)
//       return result;
//     });
//   }
  
// }

// onSubmit(){
//   this.user.showAsset(this.editForm.value).subscribe(result => {
//     console.log(result)
//     this.showAsset = result
//     console.log(this.showAsset.length)
//     return result;
//   });
// }


// onClick(val:any){
//   console.log(val)
//   // this.router.navigate(['d'+'/'+ 2]);
//   // this.router.navigate(['d'+'/'+ val]);
//   // this.router.navigate(['d'], { queryParams: { order: 'popular' } });
//   this.router.navigate(['d' + '/'+ 2], )



//   localStorage.setItem('instance', JSON.stringify(val));



//   const p = {}
 

//   this.url_param = this.y
//   console.log(this.url_param)

//   this.user.getSyncRecordByAssetTypeAndAssetId(p).subscribe(data => {
//     console.log(data)
//     localStorage.setItem('whatever', JSON.stringify(data));

   
//     return ;
//   });



  
// }




// onGetCommonClient(){
//   const k = {name: 'transporter', lastname: 'bh'}
//   this.user.getCommonClient(k).subscribe(data_res => {
//     console.log(data_res)

//     this.getCommonClient = data_res;

   

   
//     return ;
//   });
// }

back(){
  this.router.navigate([''])
}

home(){
  this.router.navigate([''])

}

}
