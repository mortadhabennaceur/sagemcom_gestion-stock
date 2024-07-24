import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producthistory',
  templateUrl: './producthistory.component.html',
  styleUrl: './producthistory.component.scss'
})
export class ProducthistoryComponent implements OnInit{

  currentUser: { nom: string, prenom: string, role: string, matricule: string } | null = null;
  productshistory: any[] = [];
  errorMessage: string | null = null;

  constructor(private productService: ProductService, private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    this.loadProductshistory();
    this.currentUser = this.userService.getUserData();
  }

  loadProductshistory() {
    this.productService.getProductshistory().subscribe(
      productshistory => {
        this.productshistory = productshistory;
      },
      error => {
        this.errorMessage = 'Error loading products. Please try again.';
      }
    );
  }

}
