import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgFlashMessagesModule } from 'ng-flash-messages';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { ShoppingBagComponent } from './components/shopping-bag/shopping-bag.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';

// Services
import { ProductService } from './services/product.service';
import { BagService } from './services/bag.service';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthGuard } from './services/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    ShoppingBagComponent,
    HomeComponent,
    ProductComponent,
    WelcomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    NgFlashMessagesModule.forRoot()
  ],
  providers: [
    ProductService,
    BagService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
