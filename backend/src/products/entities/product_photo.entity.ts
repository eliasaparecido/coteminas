import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product.entity";

@Entity({name: 'product_photos'})
export class ProductPhoto {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    url: string;

    @ManyToOne(() => Product, product => product.product_photos)
    product: Product;
}

