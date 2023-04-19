import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../../products';

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
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      this.product = products[+params.get('productId')!];
    })
  }
}
