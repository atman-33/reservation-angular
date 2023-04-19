import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-listings/product-listings.component';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';

const routes: Routes = [
  {
    path: 'products', component: ProductComponent,
    children: [
      // htmlにrouter-outletを実装する事で、URL「***/products」にProductListComponentを表示 
      { path: '', component: ProductListComponent },

      // :XXX で、変数を格納
      { path: ':productId', component: ProductDetailComponent }

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
  providers: [],
  bootstrap: []
})
export class ProductModule { }
