import { Category } from "./category";

export class Product {
    constructor(public name: string,
        public brandName: string,
        public description: string,
        public quantity: number,
        public price: number,
        public discount: number,
        public imageUrl: string){};
}
