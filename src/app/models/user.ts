import { Publicacion } from "./publicacion";

export class User {
    constructor(
      public id_user?: number,
      public name?: string,
      public last_name?: string,
      public email?: string,
      public id_photo?: string,
      public password?: string,
      public is_Tatuador?: boolean,

      public nickname?: string,
      public style?: string,
      public studio?: string,
      public valoracion?: string,
      public descripcion?: string,
      public photo?: string,
      public publicaciones ?: Publicacion[]
    ) {}
    }