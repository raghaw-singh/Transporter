import { Component } from '@angular/core';
import { UserService } from './service/user.service';
import { Router } from '@angular/router';
// import Swal from 'sweetalert2/dist/sweetalert2.js';

import Swal, {SweetAlertOptions} from 'sweetalert2';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portqi';

  constructor(private user: UserService,
              private router: Router) { }



  onSubmit(){
    const a = {assetId: '', assetType : 'myeloqua'}
    this.user.checkLicence(a).subscribe(result => {
      console.log(result["error"])
      // this.showAsset = result
      // console.log(this.showAsset.length)
      return result;
    }, err=>{
      console.log(err.error.text)

      let p = err.error.text

      if(p === 'License Valid'){
        this.router.navigate(['myeloqua']);

      }else{
        p === 'license expire' && ''
        // alert("message: TBD")
        // Swal.fire("message: TBD");
        Swal.fire({
          title: '"message: TBD"',
          // text: "message: TBD",
          icon: 'warning',
          // showCancelButton: true,
          // confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          // confirmButtonText: 'Yes, delete it!'
        } as SweetAlertOptions).then((result) => {
          if (result.value) {
             //Do something here
          }
        });
      }
    });
  }

  goToPage(pageIndex, event) {
    event.preventDefault();
    console.log(pageIndex);
  }

  third_Screen(){

    const p = {}

    this.user.getSyncRecordByAssetTypeAndAssetId(p).subscribe(data => {
      console.log(data)

      this.router.navigate(['d' + '/'+ 2], { queryParams: { 
     
        appId: '1' , InstallId: '2' , assetType:'Campaign', assetId: '4', siteId:'892925384', siteName:'TechnologyPartnerportQii', assetName:'eloqua', userId:'18', userName: 'Aditi.Sinha'
  
       } });
  
     
      return ;
    });
  


   

  }

 
  
}


