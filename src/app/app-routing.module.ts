import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { HomeComponent } from './home/home.component';
import { CreatemenuComponent } from './createmenu/createmenu.component';
import { ListmenuComponent } from './listmenu/listmenu.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './service/auth-gaurd.service';


const routes: Routes = [
  {path: '',pathMatch:'full',component: LoginComponent  },
  { path: 'navbar',pathMatch:'full', component: NavbarComponent ,canActivate:[AuthGaurdService] },
  {path: 'order',pathMatch:'full', component: OrderComponent ,canActivate:[AuthGaurdService] },
  {path: 'home',pathMatch:'full', component: HomeComponent,canActivate:[AuthGaurdService]  },
  {path: 'createmenu',pathMatch:'full', component: CreatemenuComponent,canActivate:[AuthGaurdService]  },
  {path: 'listmenu',pathMatch:'full', component: ListmenuComponent,canActivate:[AuthGaurdService]  },
  {path: 'logout',pathMatch:'full',component: LogoutComponent,canActivate:[AuthGaurdService]  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
