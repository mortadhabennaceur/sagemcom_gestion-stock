import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { StatisticsService } from '../../services/statistics-service.service';
import { ProductService } from '../../services/product.service';
import { MatSnackBar } from '@angular/material/snack-bar'; // Import MatSnackBar

interface UserActivity {
  [user: string]: {
    [operation: string]: number;
  };
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentUser: { nom: string, prenom: string, role: string, matricule: string } | null = null;
  productCount: number = 0;
  totalQuantity: number = 0;
  userActivity: UserActivity = {};
  products: any[] = [];

  constructor(
    private userService: UserService,
    private statisticsService: StatisticsService,
    private productService: ProductService,
    private snackBar: MatSnackBar // Inject MatSnackBar
  ) { }

  ngOnInit(): void {
    this.currentUser = this.userService.getUserData();
    this.fetchStatistics();
    this.fetchProducts();
  }

  fetchStatistics(): void {
    this.statisticsService.getProductCount().subscribe(data => {
      this.productCount = data.productCount;
    });

    this.statisticsService.getTotalQuantity().subscribe(data => {
      this.totalQuantity = data.totalQuantity;
    });

    this.statisticsService.getUserActivity().subscribe(data => {
      this.userActivity = data;
    });
  }

  fetchProducts(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
      this.checkProductQuantities();
    });
  }

  checkProductQuantities(): void {
    this.products.forEach(product => {
      if (product.quantite <= 10) {
        this.openSnackBar(product.name, product.quantite); // Open snackbar instead of alert
      }
    });
  }

  openSnackBar(productName: string, quantity: number): void {
    this.snackBar.open(`Attention: Le produit "${productName}" a une quantité de ${quantity}`, 'Fermer', {
      duration: 5000, // Duration in milliseconds
      verticalPosition: 'top', // Position at the top
      horizontalPosition: 'center', // Centered horizontally
    });
  }
}
