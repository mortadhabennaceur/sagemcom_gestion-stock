import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentUser: { nom: string, prenom: string, role: string, matricule: string } | null = null;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.currentUser = this.userService.getUserData();
  }
}

