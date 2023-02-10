import { Component } from '@angular/core';
import { LoanService } from '../loan.service';
import { ClientService } from '../../client/client.service';
import { Client } from 'src/app/client/model/Client';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Loan } from '../model/Loan';
import { Game } from 'src/app/game/model/Game';
import { GameService } from '../../game/game.service';
import { PageEvent } from '@angular/material/paginator';
import { Pageable } from 'src/app/core/model/page/Pageable';
import { DialogConfirmationComponent } from 'src/app/core/dialog-confirmation/dialog-confirmation.component';
import { LoanSaveComponent } from '../loan-save/loan-save.component';

@Component({
  selector: 'app-loan-list',
  templateUrl: './loan-list.component.html',
  styleUrls: ['./loan-list.component.scss']
})
export class LoanListComponent {

  games: Game[];
  clients: Client[];
  
  filterGame: Game;
  filterClient: Client;
  filterDate: Date;

  pageNumber: number = 0;
  pageSize: number = 5;
  totalElements: number = 0;

  dataSource = new MatTableDataSource<Loan>();
  displayedColumns: string[] = ['id', 'game', 'client', 'dateStart', 'dateEnd', 'action'];

  constructor(
    private loanService: LoanService,
    private clientService: ClientService,
    private gameService: GameService,
    public dialog: MatDialog, 
  ){}

  ngOnInit(): void {
    this.gameService.getGames().subscribe(
      games => this.games = games
    );

    this.clientService.getClients().subscribe(
      clients => this.clients = clients
    );

    this.loadPage();
  }
  
  onCleanFilter(){
    this.filterGame = null;
    this.filterClient = null;
    this.filterDate = null;

    this.loadPage();
  }

  loadPage(event?: PageEvent){

    let gameId = this.filterGame != null ? this.filterGame.id : null;
    let clientId = this.filterClient != null ? this.filterClient.id : null;
    let date = this.filterDate;

    let pageable: Pageable = {
      pageNumber: this.pageNumber,
      pageSize: this.pageSize,
      sort: [{
          property: 'id',
          direction: 'ASC'
      }]
    }

    if (event != null) {
      pageable.pageSize = event.pageSize
      pageable.pageNumber = event.pageIndex;
    }

    this.loanService.getLoans(pageable, gameId, clientId, date).subscribe(
      data =>{
        this.dataSource.data = data.content;
        this.pageNumber = data.pageable.pageNumber;
        this.pageSize = data.pageable.pageSize;
        this.totalElements = data.totalElements;
      }
    );

  }

  createLoan(){
    const dialogRef = this.dialog.open(LoanSaveComponent, {
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    }); 
  }

  deleteLoan(loan: Loan){

    const dialogRef = this.dialog.open(DialogConfirmationComponent, {
      data: { title: "Eliminar préstamo", description: "Atención si borra el préstamo se perderán sus datos.<br> ¿Desea eliminar el préstamo?" }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loanService.deleteLoan(loan.id).subscribe(
          result => {
            this.ngOnInit();
          }
        )
      }
    });

  }

  private parsingStringToDate(date: string): Date{
    return new Date(date);
  }
}
