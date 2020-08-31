import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-asset-details',
  templateUrl: './asset-details.component.html',
  styleUrls: ['./asset-details.component.scss']
})
export class AssetDetailsComponent implements OnInit {


  data_history :any;
  asset_name: any;

  constructor(private user: UserService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    // const y =  localStorage.getItem('whatever');
    // console.log(y)
    // console.log(JSON.stringify(y))
    const r = JSON.parse(localStorage.getItem('instance'))
    console.log(r.assetName)
    this.asset_name = r.assetName

     const y = this.route.snapshot.paramMap.get('id');
    //  console.log()

    const p = {}

    this.user.getSyncRecordByAssetTypeAndAssetId(p).subscribe(data => {
      console.log(data)

      this.data_history = data
      // localStorage.setItem('whatever', JSON.stringify(data));
  
     
      return ;
    });
  

  }

  onSubmit(){
    const p = {}
    this.user.showRecentSync(p).subscribe(result => {
      console.log(result)
      // this.showAsset = result
      // console.log(this.showAsset.length)
      return result;
    });
  }

 
}
