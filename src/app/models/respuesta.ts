import { Prenda } from "./prenda";
import { User } from "./user"

export class Respuesta {
    constructor(public error:boolean,
                public codigo: number,
                public mensaje: string,
                public data_user: User,
                public data_prenda : Prenda[],
                public data_artistas : User []){}
}