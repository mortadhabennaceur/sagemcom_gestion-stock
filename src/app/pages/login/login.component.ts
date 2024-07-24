import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../../services/user.service'; // Adjust the path as necessary

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  loginError: string | null = null;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.loginForm = this.fb.group({
      matricule: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.loginForm.valid) {
      this.userService.login(this.loginForm.value).subscribe(
        response => {
          if (response === 'Login successful') {
            this.snackBar.open('Login successful', 'Close', {
              duration: 3000,
              panelClass: ['success-snackbar']
            });
            this.router.navigate(['/home']);
          } else {
            this.loginError = 'Invalid matricule or password';
            this.snackBar.open(this.loginError, 'Close', {
              duration: 3000,
              panelClass: ['error-snackbar']
            });
          }
        },
        error => {
          this.loginError = 'Error occurred during login. Please try again.';
          this.snackBar.open(this.loginError, 'Close', {
            duration: 3000,
            panelClass: ['error-snackbar']
          });
        }
      );
    } else {
      this.loginError = 'Please enter valid credentials.';
      this.snackBar.open(this.loginError, 'Close', {
        duration: 3000,
        panelClass: ['error-snackbar']
      });
    }
  }
}
