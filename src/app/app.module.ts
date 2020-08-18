import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgFlashMessagesModule } from 'ng-flash-messages';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ShoppingBagComponent } from './components/shopping-bag/shopping-bag.component';
import { HomeComponent } from './components/home/home.component';
import { ItemComponent } from './components/item/item.component';

// Services
import { BagService } from './services/bag.service';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ItemService } from './services/item.service';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { ManageItemsComponent } from './components/manage-items/manage-items.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ShoppingBagComponent,
    HomeComponent,
    ItemComponent,
    WelcomeComponent,
    PageNotFoundComponent,
    SignUpComponent,
    LoginComponent,
    ManageItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    NgbDropdownModule,
    NgFlashMessagesModule.forRoot()
  ],
  providers: [
    BagService,
    ItemService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
