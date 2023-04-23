import { Component } from '@angular/core';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-listings',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.scss']
})
export class ProductListComponent {

  public products: any;

  /**
   * コンストラクタ
   */
  constructor(private _productService: ProductService) {
  }

  /** 
   * レンダリング前に実行
   * ※重い処理はこちら（APIからデータ取得などの処理など）
   */
  ngOnInit() {

    // 観測対象を取得
    const productObservable = this._productService.getProducts();

    // subscribeでDBからデータ取得
    productObservable.subscribe({
      next: (data) => { this.products = data; },
      error: (err) => { console.error('次のエラーが発生しました: ' + err); }
    });
  }
}
