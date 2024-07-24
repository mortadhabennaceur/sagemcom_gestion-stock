import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  currentUser: { nom: string, prenom: string, role: string, matricule: string } | null = null;


  registerForm: FormGroup;
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      role: ['', Validators.required],
      matricule: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.currentUser = this.userService.getUserData();
  }

  register() {
    if (this.registerForm.valid) {
      this.userService.register(this.registerForm.value).subscribe(
        response => {
          this.successMessage = 'Registration successful. Redirecting to home...';
          setTimeout(() => {
            this.router.navigate(['/home']);
          }, 2000); // Redirect after 2 seconds
        },
        error => {
          this.errorMessage = 'Error occurred during registration. Please try again.';
          console.error('Error during registration:', error);
        }
      );
    } else {
      // Handle form validation errors if necessary
      this.errorMessage = 'Please fill in all required fields.';
    }
  }
}
