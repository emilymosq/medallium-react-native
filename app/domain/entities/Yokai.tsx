export interface YokaiInterface {
    id_Yokai: number;
    name: string;
    id_rango: number;
    id_tribu: number;
    id_elemento: number;
    id_fase: number;
}

export interface DetallesYokaiInterface {
    id_detallesYokai: number;
    image: string;
    medalla: string;
    comida: string;
    descripcion: string;
    nombreJapo: string;
    yokai: YokaiInterface;
}

// export interface TribusInterface {
//     id_Tribu: number;
//     nombre: string;
//     caracteristicasGenerales: string;
//     tipoBonus: string;
//     descripcion: string;
//     image: string;
//     imagenPixel: string;
//     nombreJapones: string;
// }