import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()   // <= Angularでserviceを利用する際に必要
export class AuthService {

    constructor(private _http: HttpClient) { }

    // getProducts(): Observable<any> {
    //     return this._http.get('/api/v1/products');
    // }

    // getProductById(productId: string): Observable<any>  {
    //     return this._http.get('/api/v1/products/' + productId);
    //   }  
}