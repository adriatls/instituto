import { Component, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { PartnerComponent } from './components/partner/partner.component';
import { DonateComponent } from './components/donate/donate.component';
import { TransparencyComponent } from './components/transparency/transparency.component';
import { ActionsEventsComponent } from './components/actions-events/actions-events.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    ContactComponent,
    AboutComponent,
    FooterComponent,
    PartnerComponent,
    DonateComponent,
    TransparencyComponent,
    ActionsEventsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private readonly platformId = inject(PLATFORM_ID);

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo(0, 0);
    }
  }
}
