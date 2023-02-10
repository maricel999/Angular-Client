import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Client } from '../model/Client';
import { ClientService } from '../client.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.scss']
})
export class ClientEditComponent implements OnInit{

  client: Client;
  msgError: string;
  @ViewChild('miFormulario') miFormulario!: NgForm;

  constructor(public dialogRef: MatDialogRef<ClientEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private clientService: ClientService){}

  ngOnInit(): void {
    if(this.data.client != null){
      this.client = Object.assign({}, this.data.client);
    }
    else{
      this.client = new Client();
    }
    
    this.msgError = null;

  }

  onSave() {
    if(this.client.name != ""){
      this.clientService.saveClient(this.client).subscribe({
        next: (result) => {
        this.dialogRef.close()
        },
        error: (err) => {
          this.msgError = err.error.message;
          this.miFormulario.form.controls['name'].setErrors({ 'incorrect': true });
        }  
      });
    }  
  }  

  onClose() {
    this.dialogRef.close();
  }

}
