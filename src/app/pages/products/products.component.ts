import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  currentUser: { nom: string, prenom: string, role: string, matricule: string } | null = null;
  products: any[] = [];
  errorMessage: string | null = null;
  displayedColumns: string[] = ['name', 'description', 'quantite', 'actions']; // Define the columns

  constructor(private productService: ProductService, private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    this.loadProducts();
    this.currentUser = this.userService.getUserData();
  }

  loadProducts() {
    this.productService.getProducts().subscribe(
      products => {
        this.products = products;
      },
      error => {
        this.errorMessage = 'Error loading products. Please try again.';
      }
    );
  }

  deleteProduct(id: number) {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productService.deleteProduct(id).subscribe(
        response => {
          this.loadProducts();
        },
        error => {
          this.errorMessage = 'Error deleting product. Please try again.';
        }
      );
    }
  }
  

  updateProduct(id: number) {
    this.router.navigate(['/update-product', id]);
  }
}
