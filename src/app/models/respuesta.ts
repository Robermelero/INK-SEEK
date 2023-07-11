
import { Prenda } from "./prenda";
import { User } from "./user"
import { Evento } from "./evento";
import { Publicacion } from "./publicacion";

export class Respuesta {
    constructor(public error:boolean,
                public codigo: number,
                public mensaje: string,
                public data_user: User,
                public data_prenda : Prenda[],
                public data_artistas : User [],
                public data_foto: Publicacion[]){}
}