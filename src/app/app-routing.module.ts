import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductModule } from './product/product.module';
import { AuthModule } from './auth/auth.module';

/**
 * SPA用の画面遷移先（path）設定
 * @remark pathの先頭に/は不要（OK:detail NG:/detail）
 */
const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' }
];

/**
 * 子モジュールをimport
 */
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ProductModule,
    AuthModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
