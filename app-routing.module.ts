import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BonPlanComponent } from './components/bon-plan/bon-plan.component';
import { MaSelectionComponent } from './components/ma-selection/ma-selection.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { HomeComponent } from './components/home/home.component';
import { ListeProduitComponent } from './components/liste-produit/liste-produit.component';
import { DashboardConsommateurComponent } from './components/dashboard-consommateur/dashboard-consommateur.component';
import { ParametreBoutiqueComponent } from './components/parametre-boutique/parametre-boutique.component';
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'bonPlan', component: BonPlanComponent},
  {path: 'maSelection', component: MaSelectionComponent},
  {path : 'notification', component: NotificationsComponent}, 
  {path : 'connexion', component: ConnexionComponent},
  {path : 'listeProduit', component: ListeProduitComponent},
  {path : 'notifications', component: NotificationsComponent},
  {path : 'dashboardConsommateur', component: DashboardConsommateurComponent},
  {path : 'parametreBoutique', component: ParametreBoutiqueComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
