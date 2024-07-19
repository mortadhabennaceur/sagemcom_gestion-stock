import { Component, Input, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router'; // Import Router
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() user: { nom: string, prenom: string, role: string, matricule: string } | null = null;
  isAdmin: boolean = false; // Add isAdmin property

  constructor(
    private userService: UserService,
    private router: Router // Inject Router
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('User in NavbarComponent:', this.user);
    this.isAdmin = this.user?.matricule === '400'; // Check if user is admin
  }

  logout() {
    this.userService.clearUserData(); // Clear user data from localStorage
    // Navigate to the login page
    this.router.navigate(['']);
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }
}
