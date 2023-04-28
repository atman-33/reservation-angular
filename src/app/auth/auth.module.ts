import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './shared/auth.guard';
import { AuthService } from './shared/auth.service';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './shared/token.interceptor';

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
        CommonModule,
        FormsModule
    ],
    providers: [
        AuthGuard,
        AuthService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true
        }
    ],
    bootstrap: []
})
export class AuthModule { }
