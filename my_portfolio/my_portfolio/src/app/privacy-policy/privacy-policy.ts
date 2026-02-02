import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.scss'
})
export class PrivacyPolicy {
  constructor(
    public translate: TranslateService,
    private location: Location,
    private router: Router
  ) {}

 close(): void {
  this.router.navigate(['./'], { fragment: 'contact' });
}

}
