import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { FlowersListComponent } from './flowers-list/flowers-list.component';
import { CreateFlowerComponent  } from './create-flower/create-flower.component';
import { SearchFlowersComponent } from './search-flowers/search-flowers.component';

const routes: Routes = [
  { path: '', redirectTo: 'flower', pathMatch: 'full' },
  { path: 'flower', component: FlowersListComponent },
  { path: 'add', component: CreateFlowerComponent },
  { path: 'findbyprice', component: SearchFlowersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}

