import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProductsTable1633536167702 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'products',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isGenerated: true,
                        generationStrategy: 'increment',
                        isUnique: true
                    },
                    {
                        name: 'description',
                        type: 'varchar',
                        isUnique: true

                    },
                    {
                        name: 'price',
                        type: 'double precision',
                    },
                    {
                        name: 'promotion_price',
                        type: 'double precision'
                    },
                    {
                        name: 'category',
                        type: 'varchar'
                    }
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('products');
    }

}
