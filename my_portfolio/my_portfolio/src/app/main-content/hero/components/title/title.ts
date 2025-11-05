import { Component } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-title',
  imports: [TranslateModule],
  templateUrl: './title.html',
  styleUrl: './title.scss'
})
export class Title {
  constructor(private translate: TranslateService) {
  }

}
