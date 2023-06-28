export class Opinion {
    constructor(
        public id_user: number,
        public user_name: string,
        public photo: string,
        public stars: number,
        public comentario: string
    ){
    }
}
