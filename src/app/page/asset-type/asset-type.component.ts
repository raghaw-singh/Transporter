import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { FormBuilder, FormGroup } from '@angular/forms';

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

  p = 1;
  constructor(private router: Router,
              private route: ActivatedRoute,
              private user: UserService,
              private formBuilder: FormBuilder) { }

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
    search: ['',],
    // lastName: ['', Validators.required],
    // age: ['', Validators.required],
    // salary: ['', Validators.required]
  });
   this.onGetCommonClient();
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
    this.user.showAsset(this.editForm.value).subscribe(result => {
      console.log(result)
      this.showAsset = result
      console.log(this.showAsset.length)
      return result;
    });
  }

}
