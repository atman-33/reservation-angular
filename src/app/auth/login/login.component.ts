import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    errors: any = [];

    constructor(
        private _authService: AuthService,
        private _router: Router) { 

        }
        
    ngOnInit() { }

    login(loginForm: any) {
        this._authService.login(loginForm.value).subscribe({
            next: (token) => { 
                // console.log(token);
                this._router.navigate(['/products']);
            },
            error: (err: HttpErrorResponse) => {
                console.error(err);
                this.errors = err.error.error;
            },
        });
        console.log(loginForm.value);
    }
}
