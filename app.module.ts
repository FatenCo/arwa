import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BonPlanComponent } from './components/bon-plan/bon-plan.component';
import { MaSelectionComponent } from './components/ma-selection/ma-selection.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { BestSellingComponent } from './components/best-selling/best-selling.component';
import { ListeProduitComponent } from './components/liste-produit/liste-produit.component';
import { DashboardConsommateurComponent } from './components/dashboard-consommateur/dashboard-consommateur.component';
import { ParametreBoutiqueComponent } from './components/parametre-boutique/parametre-boutique.component';
@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    HeaderComponent,
    BannerComponent,
    HomeComponent,
    BonPlanComponent,
    NotificationsComponent,
    MaSelectionComponent,
    ConnexionComponent,
    BestSellingComponent,
    ListeProduitComponent,
    DashboardConsommateurComponent,
    ParametreBoutiqueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    NgbModule,
    NgbCarouselModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatMenuModule,
    FlexLayoutModule,
    MatInputModule,
    MatSidenavModule,
    MatTabsModule,

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
