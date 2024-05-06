import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../../services/products-service/product-list.service';
import { Product } from '../../entities/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  

  private _products: Product[] = [];
  private _productListService: ProductListService;

	constructor($productListService: ProductListService) {
		this._productListService = $productListService;
	}


  ngOnInit(): void {
    this.listProducts();
  }

  listProducts() {
    this._productListService.getProductList().subscribe(
      data => {
        this.products = data;
      }
    )
  }
  /**
     * Getter products
     * @return {Product[] }
     */
	public get products(): Product[]  {
		return this._products;
	}

    /**
     * Setter products
     * @param {Product[] } value
     */
	public set products(value: Product[] ) {
		this._products = value;
	}
}
