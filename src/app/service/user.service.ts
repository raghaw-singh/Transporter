import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 
  // baseurl = 'https://cc874c49-efac-47ba-98b2-c738747d8b95.mock.pstmn.io'
  baseurl = 'https://bbbb9862-2f32-442b-aab1-ed483814867b.mock.pstmn.io'


  constructor(private http: HttpClient) { }

  // Asset Transfer

  // getting asset name get request
  getAsset(){
    return this.http.get(this.baseurl+'/getEloquaAssetTypes')
  }

  // for getting table for search asset
  showAsset(user):Observable<any> {
    return this.http.post<any>(this.baseurl+ '/getSearchedAsset', user);

  }

  // for check valid licence

  checkLicence(user){
    return this.http.post<any>(this.baseurl+ '/checkLicense', user);

  }

  showRecentSync(user){
    return this.http.post<any>(this.baseurl+ '/showRecentSync', user);

  }

  getSyncRecordByAssetTypeAndAssetId(user){
    return this.http.post<any>(this.baseurl+'/getSyncRecordByAssetTypeAndAssetId',user)
    // this.http.post<any>(this.baseurl+'/getSyncRecordByAssetTypeAndAssetId', user)
    // .subscribe(res =>
    // //  console.log('Done')
    //  console.log(res)
     
    // )}
  }


}
