import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Demo1Component } from './demo/demo1/demo1.component';
import { Exercices1Component } from './exercices/exercices1/exercices1.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Demo2Component } from './demo/demo2/demo2.component';
import { SharedModule } from './shared/shared.module';
import { Exercices2Component } from './exercices/exercices2/exercices2.component';
import { DemoDirectiveComponent } from './demo/demo-directive/demo-directive.component';
import { Exercices3Component } from './exercices/exercices3/exercices3.component';
import { ChildComponent } from './demo/demoInputOutput/child/child.component';
import { ParentComponent } from './demo/demoInputOutput/parent/parent.component';
import { Child1Component } from './exercices/exercices4/child1/child1.component';
import { Parent1Component } from './exercices/exercices4/parent1/parent1.component';
import { DemoServiceComponent } from './demo/demo-service/demo-service.component';
import { ProductListComponentComponent } from './exercices/exercices5/product-list-component/product-list-component.component';
import { FormulaireComponent } from './demo/formulaire/formulaire.component';
import { UpdatedFormproductComponent } from './exercices/exercices6/updated-formproduct/updated-formproduct.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Demo1Component,
    Exercices1Component,
    NavbarComponent,
    Demo2Component,
    Exercices2Component,
    DemoDirectiveComponent,
    Exercices3Component,
    ChildComponent,
    ParentComponent,
    Child1Component,
    Parent1Component,
    DemoServiceComponent,
    ProductListComponentComponent,
    FormulaireComponent,
    UpdatedFormproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
