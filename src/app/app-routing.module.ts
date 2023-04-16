import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product/product-listings/product-listings.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductModule } from './product/product.module';

/**
 * SPA用の画面遷移先（path）設定
 * @remark pathの先頭に/は不要（OK:detail NG:/detail）
 */
const routes: Routes = [
  { path: "", redirectTo: "products", pathMatch: "full" },
  // { path: "detail", component: ProductDetailComponent },
];

/**
 * 子モジュールをimport
 */
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ProductModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
