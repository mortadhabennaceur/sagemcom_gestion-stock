import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit{
  currentUser: { nom: string, prenom: string, role: string, matricule: string } | null = null;
  addProductForm: FormGroup;
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router,private userService: UserService
  ) {
    this.addProductForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      quantite: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    this.currentUser = this.userService.getUserData();
  }

  addProduct() {
    if (this.addProductForm.valid) {
      this.productService.addProduct(this.addProductForm.value).subscribe(
        response => {
          this.successMessage = 'Product added successfully.';
          setTimeout(() => {
            this.router.navigate(['/products']);
          }, 2000);
        },
        error => {
          this.errorMessage = 'Error occurred while adding product. Please try again.';
        }
      );
    } else {
      this.errorMessage = 'Please fill in all required fields.';
    }
  }
}
