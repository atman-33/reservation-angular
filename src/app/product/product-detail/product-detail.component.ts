import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public product: any;

  /**
   * コンストラクタ
   */
  constructor(
    private _route: ActivatedRoute,
    private _productService: ProductService) {
  }

  ngOnInit() {
    this._route.paramMap.subscribe(params => {
      // this.product = this._productService.getProductById(params.get('productId')!);
      const productObservable = this._productService.getProductById(params.get('productId')!);
      productObservable.subscribe(
        (data) => {
          this.product = data;
        },
        (err) => {

        }
      )
    })
  }
}
