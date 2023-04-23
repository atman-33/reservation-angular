import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()   // <= Angularでserviceを利用する際に必要
export class AuthService {

    constructor(private _http: HttpClient) { }

    register(userData: any): Observable<any> {
        return this._http.post('/api/v1/users/register', userData);
    }

    login(userData: any): Observable<any> {
        return this._http.post('/api/v1/users/login', userData);
    }
}