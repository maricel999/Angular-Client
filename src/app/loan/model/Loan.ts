import { Client } from "src/app/client/model/Client";
import { Game } from '../../game/model/Game';

export class Loan {
    id: number;
    game: Game;
    client: Client;
    dateStart: Date;
    dateEnd: Date;
}