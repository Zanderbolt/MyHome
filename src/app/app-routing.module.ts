import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'resources',
    pathMatch: 'full'
  },
  {
    path: 'resources',
    loadChildren: './tabs/resources/resources.module#ResourcesPageModule'
  },
  {
    path: 'expenditures',
    loadChildren: './tabs/expenditures/expenditures.module#ExpendituresPageModule'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
