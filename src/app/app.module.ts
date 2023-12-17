import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InputsComponent } from './components/inputs/inputs.component';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { InputsPhoneComponent } from './components/inputs-phone/inputs-phone.component';
import { PhoneMaskDirective } from './directives/phone-mask.directive';
import { InputEmailComponent } from './components/input-email/input-email.component';
import { ModalComponent } from './components/modal/modal.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NavbarComponent,
    InputsComponent,
    InputsPhoneComponent,
    PhoneMaskDirective,
    InputEmailComponent,
    ModalComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
