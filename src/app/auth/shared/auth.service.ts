import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { JwtHelperService } from "@auth0/angular-jwt";
import * as moment from 'moment'

const jwt = new JwtHelperService();

class DecodedToken {
    userId: string = '';
    username: string = '';
    exp: number = 0;
}

@Injectable()   // <= Angularでserviceを利用する際に必要
export class AuthService {
    private _decodedToken: any;

    constructor(private _http: HttpClient) { 
        this._decodedToken = JSON.parse(localStorage.getItem('app-meta') || JSON.stringify(new DecodedToken()));
    }

    /**
     * Tokenの有効期限が現在時刻（moment()）より前であればtrue
     * @returns 
     */
    isAutenticated(){
        return moment().isBefore(moment.unix(this._decodedToken.exp));
    }

    register(userData: any): Observable<any> {
        return this._http.post('/api/v1/users/register', userData);
    }

    login(userData: any): Observable<any> {
        return this._http.post('/api/v1/users/login', userData).pipe(map(
            token => {
                const tokenJson = JSON.stringify(token);
                this._decodedToken = jwt.decodeToken(tokenJson);
                localStorage.setItem('app-auth', tokenJson);
                localStorage.setItem('app-meta', JSON.stringify(this._decodedToken));
                return token;
            }
        ));
    }

    logout() {
        localStorage.removeItem('app-auth');
        localStorage.removeItem('app-meta');
        this._decodedToken = new DecodedToken();
    }
}