import { Component } from '@angular/core';
import { products } from '../../products';

@Component({
  selector: 'app-product-listings',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.scss']
})
export class ProductListComponent {

  public products = products;

  /**
   * レンダリング前に実行
   * @remark 重い処理はこちら（APIからデータ取得などの処理など）
   */
  ngOnInit() {
    this.products = products;
  }
}
