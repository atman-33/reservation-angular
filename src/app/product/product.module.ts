import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-listings/product-listings.component';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductService } from './shared/product.service';
import { AuthGuard } from '../auth/shared/auth.guard';

const routes: Routes = [
  {
    path: 'products', component: ProductComponent,
    children: [
      // htmlにrouter-outletを実装する事で、URL「***/products」にProductListComponentを表示 
      { path: '', component: ProductListComponent },

      // :*** で、変数を格納
      { path: ':productId', component: ProductDetailComponent, canActivate: [AuthGuard]}

      // URL「products/detail」にProductDetailComponentを表示
      //{ path: 'detail', component: ProductDetailComponent }
    ]
  }
];

@NgModule({
  // 利用するコンポーネントを登録
  declarations: [
    ProductComponent,
    ProductDetailComponent,
    ProductListComponent
  ],
  imports: [
    // forRootはapp-routing.module.tsで利用。モジュールはforChildでルーター登録
    RouterModule.forChild(routes),
    // CommonModuleはngFor,ngIf等を利用する場合に必要
    CommonModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: []
})
export class ProductModule { }
