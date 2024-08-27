import { StaticImageData } from "next/image";

export type Product = {
    color: string[];
    id: number | undefined;
    tittle: string;
    image?: string[] | StaticImageData | any;
    slug: string;
    price: number;
    category: string;
    discription: string;
    size: any;
    qty: number;
    discount?: number | any;
}

export type Cart = {
    id: number | any[];
    tittle: string;
    image?: string | StaticImageData | undefined | any;
    slug: string;
    price: number;
    category: string;
    size: any;
    qty: number;
    discount?: any;
    uunid: number | string |undefined | any;
    color:string;

}