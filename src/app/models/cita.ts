export class Cita {

    constructor(
        public id_cita? : number,
        public id_user? : number,
        public email?: string,
        public asunto?:string,
        public date? :Date,
        public hora? : string,
    ){

    }
}