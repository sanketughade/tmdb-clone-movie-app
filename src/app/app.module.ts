import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IconsService } from './shared/services/icons.service';
import { Observable } from 'rxjs';

// export function initializeApp(iconService: IconService): () => Observable<void> {
//   return () => iconService.loadIcons().toPromise();
// }

export function initializeApp(
  iconsService: IconsService
): () => Observable<void> {
  return () => iconsService.loadIcons();
}

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    SharedModule,
  ],
  providers: [
    IconsService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [IconsService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
