import { ProductService } from './../../services/product.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../common/product';
import { CartItem } from '../../common/cart-item';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

  product!: Product;

  constructor(private productService: ProductService,
              private cartService: CartService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(() => {
      this.handleProductDetails();
    });
  }

  handleProductDetails() {
    // get the "id" param sting. convert string to number using "+" symbol
    const theProductId = +this.route.snapshot.paramMap.get('id')!;

    this.productService.getProduct(theProductId).subscribe(data => {
      this.product = data;
    })
  }

  addToCart() {

    const theCartItem: CartItem = new CartItem(this.product);
    this.cartService.addToCart(theCartItem);
    
  }
}
