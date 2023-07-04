export class User {
    constructor(
      public id_user?: number,
      public name?: string,
      public last_name?: string,
      public email?: string,
      public photo_perfil?: string,
      public password?: string,
      public isTatuador?: boolean
    ) {}
    }