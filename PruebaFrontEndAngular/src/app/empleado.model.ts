export class Empleado {

    id:any;
    nombre: string;
    email: string;
    sexo: string;
    area_id: any;
    boletin:string;
    descripcion:string;
    rol_id: any;
    updated_at?: Date;

    constructor(idc:any, nombrec:string, emailc:string, sexoc:string, areac:any, boletinc:string, descripcionc:string, rollc:any,  updated_atc: Date, ){

        this.id=idc;
        this.nombre=nombrec;
        this.email=emailc;
        this.sexo=sexoc;
        this.area_id=areac;
        this.boletin=boletinc;
        this.descripcion=descripcionc;
        this.rol_id=rollc;
        this.updated_at=updated_atc;

    }
}