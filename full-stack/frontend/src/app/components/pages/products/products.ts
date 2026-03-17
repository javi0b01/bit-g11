import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [CurrencyPipe],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit {
  private productsService = inject(ProductsService);

  products: any[] = [];

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe((res: any) => {
      this.products = res.data;
      console.log('productos:', this.products);
    });
  }
}
