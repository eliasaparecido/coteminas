import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ProductPhoto } from "./product_photo.entity";

@Entity({name: 'products'})
export class Product {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    description: string;

    @Column()
    price: number;

    @Column()
    promotion_price: number;

    @Column()
    category: string;

    @OneToMany(() => ProductPhoto, product_photo => product_photo.product, { cascade: ['insert', 'update'] })
    product_photos: ProductPhoto[];
}

