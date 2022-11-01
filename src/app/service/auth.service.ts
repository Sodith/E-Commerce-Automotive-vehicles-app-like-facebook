import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }


  AUTH_API = 'http://localhost:9001/authen/';
  AUTH_API2='http://localhost:9001/user/'


  login(username: string, password: string): Observable<any> {

    return this.http.post(this.AUTH_API + 'login', { username, password, });
     
   }
 register(username: string, email: string, password: string): Observable<any> {
   return this.http.post( this.AUTH_API + 'register',  { username, email, password,  }
   );
 }

 logout(): Observable<any> {
   return this.http.post(this.AUTH_API + 'signout', {}, );
 }
 addProductAdmin(id:number,title:string,price:number,description:string,category:string,image:string): Observable<any> {
  return this.http.post( this.AUTH_API2 + 'vehicle',  { id,title,price,description,category,image  }
  );
}

getAuth(){}


addUpdateAdmin(id:number,title:string,price:number,description:string,category:string,image:string): Observable<any> {
  return this.http.put( this.AUTH_API2 + 'vehicle',  { id,title,price,description,category,image  }
  );
}


 get(): Observable<any> {
   return this.http.get<any>(this.AUTH_API2 + 'vehicles',{} );
 }


 getProductData(id: any): Observable<any> {
  return this.http.get<any>(this.AUTH_API2 + 'vehicle'+ '/' + id);
}


 addProduct( desc: string,
   quan: string, price: string, vehicleName: string): Observable<any> {
   const formData: FormData = new FormData();
   formData.append("desc", desc);
   formData.append("price", price);
   formData.append("vehicleName", vehicleName);
   formData.append("quantity", quan);
   // formData.append("file", image);
   return this.http.post<any>(this.AUTH_API2 + 'vehicle', formData);

 }
 getAuthType(): string {
   // if (this.storage.get("auth_type") !== null) {
   //   return this.storage.get("auth_type");
   // }
   return "";
 }
 isAuthenticated(): boolean {
  return this.getToken() !== null;
}
getToken() {
  //return this.storage.get("auth_token");
}

}
