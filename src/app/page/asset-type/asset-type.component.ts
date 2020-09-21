import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-asset-type',
  templateUrl: './asset-type.component.html',
  styleUrls: ['./asset-type.component.scss']
})
export class AssetTypeComponent implements OnInit {
  email:any;
  optionsitename:any;
  getCommonClient:any;
  editForm:FormGroup
  showAsset: any;
  term: string;
  target_instance:any;
  rejectionReason:any;


  p = 1;
  constructor(private router: Router,
              private route: ActivatedRoute,
              private user: UserService,
              private formBuilder: FormBuilder,
              private SpinnerService: NgxSpinnerService) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      console.log(params)
      console.log(params.assetType)
      this.email = params.assetType
      this.optionsitename = params.siteName
      // console.log(params.siteName)
      // this.check_Licence = params
      // this.optionsitename = params.siteName
   });


   this.editForm = this.formBuilder.group({
    // id: [''],
    assettype: ['',],
    target_instance:['', Validators.required],
    search: ['',],
    // lastName: ['', Validators.required],
    // age: ['', Validators.required],
    // salary: ['', Validators.required]
  });
   this.onGetCommonClient();
  }

  get f() { return this.editForm.controls; }

  validateAllFields(formGroup: FormGroup) {         
    Object.keys(formGroup.controls).forEach(field => {  
        const control = formGroup.get(field);            
        if (control instanceof FormControl) {             
            control.markAsTouched({ onlySelf: true });
        } else if (control instanceof FormGroup) {        
            this.validateAllFields(control);  
        }
    });
}


  home() {
    this.router.navigate([''])

  }

  onGetCommonClient(){
    const k = {name: 'transporter', lastname: 'bh'}
    this.user.getCommonClient(k).subscribe(data_res => {
      console.log(data_res)
  
      this.getCommonClient = data_res;
  
     
  
     
      return ;
    });
  }


  onSubmit(){
    this.SpinnerService.show();  

    this.user.showAsset(this.editForm.value).subscribe(result => {
      console.log(this.editForm.value)
      console.log(result)
      this.showAsset = result
      console.log(this.showAsset.length)
      this.SpinnerService.hide();  

      return result;
    });
  }

  onChange(deviceValue) {
    this.target_instance = deviceValue
    console.log(this.target_instance);
  }


  transfer(){
    if (this.target_instance == undefined){
      this.validateAllFields(this.editForm)
    } else{
      this.SpinnerService.show();  

      const k = {sourceSiteId: '250973722', assetType: 'Program' , assetName:'assetName', assetId:'assetId', targetSiteName:'TechnologyPartnerportQii' }
      this.user.checkSyncRecord(k).subscribe(data_res => {
        console.log(data_res)  
        this.SpinnerService.hide();  

        return ;
      });
    
  
    }
    
    
  
  }

}
