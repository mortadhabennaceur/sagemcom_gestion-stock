import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {
  currentUser: { nom: string, prenom: string, role: string, matricule: string } | null = null;
  updateProductForm: FormGroup;
  productId: number;
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,private userService: UserService
  ) {
    this.updateProductForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      quantite: ['', Validators.required]
    });

    this.productId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.productService.getProductById(this.productId).subscribe(
      product => {
        this.updateProductForm.patchValue(product);
        this.currentUser = this.userService.getUserData();
      },
      error => {
        this.errorMessage = 'Error loading product details. Please try again.';
      }
    );
  }

  updateProduct() {
    if (this.updateProductForm.valid) {
      this.productService.updateProduct(this.productId, this.updateProductForm.value).subscribe(
        response => {
          this.successMessage = 'Product updated successfully.';
          setTimeout(() => {
            this.router.navigate(['/products']);
          }, 2000);
        },
        error => {
          this.errorMessage = 'Error occurred while updating product. Please try again.';
        }
      );
    } else {
      this.errorMessage = 'Please fill in all required fields.';
    }
  }
  
}
