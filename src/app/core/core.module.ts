import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { DialogConfirmationComponent } from './dialog-confirmation/dialog-confirmation.component';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    HeaderComponent,
    DialogConfirmationComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule, 
    MatToolbarModule,
    MatButtonModule
  ],
  exports:[
    HeaderComponent
  ]
})
export class CoreModule { }
