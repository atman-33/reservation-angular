import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    errors: any = [];

    constructor(
        private _authService: AuthService,
        private _router: Router) { }

    ngOnInit() { }

    register(registerForm: any) {
        this._authService.register(registerForm.value).subscribe({
            next: (result) => { 
                console.log('Success!');
                this._router.navigate(['/login']);
            },
            error: (err: HttpErrorResponse) => {
                console.error(err);
                this.errors = err.error.error;
            },

        })
        console.log(registerForm.value);
    }
}
