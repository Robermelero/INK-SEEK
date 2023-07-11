import { Opinion } from "./opinion";
import { Prenda } from "./prenda";
import { Publicacion } from "./publicacion";
import { User } from "./user"

export class Respuesta {
    constructor(public error:boolean,
                public codigo: number,
                public mensaje: string,
                public data_user: User,
                public data_prenda : Prenda[],
                public data_foto: Publicacion[],
                public data_opinion : Opinion[] 
                ){}
}