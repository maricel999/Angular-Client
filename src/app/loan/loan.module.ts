import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoanListComponent } from './loan-list/loan-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DatePipe } from '@angular/common'
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatNativeDateModule, MatOptionModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { LoanSaveComponent } from './loan-save/loan-save.component';


@NgModule({
  declarations: [
    LoanListComponent,
    LoanSaveComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule, 
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatOptionModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    { 
    provide: MAT_DATE_LOCALE, 
    useValue: 'en-GB' 
    },
    DatePipe
  ]
})
export class LoanModule { }
