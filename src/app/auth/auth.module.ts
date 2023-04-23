import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './shared/auth.service';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent }
];

@NgModule({
    // 利用するコンポーネントを登録
    declarations: [
        LoginComponent,
        RegisterComponent
    ],
    imports: [
        // forRootはapp-routing.module.tsで利用。モジュールはforChildでルーター登録
        RouterModule.forChild(routes),
        // CommonModuleはngFor,ngIf等を利用する場合に必要
        CommonModule
    ],
    providers: [
        AuthService
    ],
    bootstrap: []
})
export class AuthModule { }
