export class Opinion {
    constructor(
        public id_opiniones? : number,
        public emisor ?: number,
        public receptor? : number,
        public comentario?: string,
        public user_name?: string,
        public photo?: string,
        public puntuacion?: number,
      
       
    ){
    }
}