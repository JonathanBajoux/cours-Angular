import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Demo1Component } from './demo/demo1/demo1.component';
import { Exercices1Component } from './exercices/exercices1/exercices1.component';
import { Demo2Component } from './demo/demo2/demo2.component';
import { Exercices2Component } from './exercices/exercices2/exercices2.component';
import { DemoDirectiveComponent } from './demo/demo-directive/demo-directive.component';
import { Exercices3Component } from './exercices/exercices3/exercices3.component';
import { ParentComponent } from './demo/demoInputOutput/parent/parent.component';
import { Parent1Component } from './exercices/exercices4/parent1/parent1.component';
import { DemoServiceComponent } from './demo/demo-service/demo-service.component';
import { ProductListComponentComponent } from './exercices/exercices5/product-list-component/product-list-component.component';
import { FormulaireComponent } from './demo/formulaire/formulaire.component';
import { UpdatedFormproductComponent } from './exercices/exercices6/updated-formproduct/updated-formproduct.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'demo1', component: Demo1Component},
  {path: 'demo2', component: Demo2Component},
  {path: 'demo-directive', component: DemoDirectiveComponent},
  {path: 'demo-input-output', component: ParentComponent},
  {path: 'demo-service', component: DemoServiceComponent},
  {path: 'demo-formulaire', component: FormulaireComponent},
  {path: 'exercice1', component: Exercices1Component},
  {path: 'exercice2', component: Exercices2Component},
  {path: 'exercice3', component: Exercices3Component},
  {path: 'exercice4', component: Parent1Component},
  {path: 'exercice5', component: ProductListComponentComponent},
  {path: 'exercice6', component: UpdatedFormproductComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
