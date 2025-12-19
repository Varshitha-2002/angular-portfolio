import { Component } from '@angular/core';
import { ProfileService } from '../../core/services/profile.service';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  profile$ = this.profileService.getProfile();

  constructor(private profileService: ProfileService) {}
}
