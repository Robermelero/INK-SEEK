import { Prenda } from "./prenda";
import { User } from "./user"
import { Evento } from "./evento";

export class Respuesta {
    constructor(public error:boolean,
                public codigo: number,
                public mensaje: string,
                public data_user: User,
                public data_prenda : Prenda[],
                ){}
}