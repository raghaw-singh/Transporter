import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 
  // baseurl = 'https://cc874c49-efac-47ba-98b2-c738747d8b95.mock.pstmn.io'
  // baseurl = 'https://bbbb9862-2f32-442b-aab1-ed483814867b.mock.pstmn.io'
             
  // baseurl = 'https://32d171a9-975d-43c1-9a9d-6ea5d9255a4d.mock.pstmn.io/'
  
  baseurl = 'https://fb5ea955-cde2-4e6d-9094-e113833afcf4.mock.pstmn.io/'

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

  getCommonClient(user){
    return this.http.post<any>(this.baseurl+'/getCommonClient',user)

  }

  getShowRecentSync(){
    return this.http.get('https://479d224e-df8d-4d4a-b97b-c0d26a1692d0.mock.pstmn.io/showRecentSync')

  }

  checkSyncRecord(user){
    return this.http.post<any>('https://7ccb30f2-590c-4445-8682-da0fca2f2682.mock.pstmn.io/checkSyncRecord',user)

  }


}
