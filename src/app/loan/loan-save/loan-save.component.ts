import { Component, OnInit, ViewChild } from '@angular/core';
import { Client } from 'src/app/client/model/Client';
import { Game } from 'src/app/game/model/Game';
import { LoanService } from '../loan.service';
import { Loan } from '../model/Loan';
import { GameService } from '../../game/game.service';
import { ClientService } from 'src/app/client/client.service';
import { MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-loan-save',
  templateUrl: './loan-save.component.html',
  styleUrls: ['./loan-save.component.scss']
})
export class LoanSaveComponent implements OnInit{

  loan: Loan;
  clients: Client[];
  games: Game[];
  msgError: string;
  @ViewChild('miFormulario') miFormulario!: NgForm;

  constructor(
    public dialogRef: MatDialogRef<LoanSaveComponent>,
    private loanService: LoanService,
    private clientService: ClientService,
    private gameService: GameService,
  ){}

  ngOnInit(): void {

    this.loan = new Loan();

    this.clientService.getClients().subscribe(
      clients => this.clients = clients
    );

    this.gameService.getGames().subscribe(
      games => this.games = games
    );
  }

  onSave(){

    if(this.validateDateEnd()){
      this.loanService.saveLoan(this.loan).subscribe({
        next: (result) => {
          this.dialogRef.close()
          },
        error: (err) => {
          this.msgError = err.error.message;
          this.miFormulario.form.controls['dateEnd'].setErrors({ 'msgError': true });
        }  
      });
    }
  }

  onClose() {
    this.dialogRef.close();
  }

  validateDateEnd(): boolean{

    let result = true;

    const diffTime = this.loan.dateEnd.getTime() - this.loan.dateStart.getTime();
    const diffDays = diffTime / (1000 * 3600 * 24);

    if( diffDays <= 0 ){
      this.miFormulario.form.controls['dateEnd'].setErrors({ 'badDates': true });
      result = false;
    }
    else if(diffDays > 14){
      this.miFormulario.form.controls['dateEnd'].setErrors({ 'incorrect': true });
      result = false;  
    }

    return result;
  }
}
