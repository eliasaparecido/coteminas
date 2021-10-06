import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateProductPhotoTable1633536312272 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'product_photos',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'productId',
                        type: 'int',
                    },
                    {
                        name: 'url',
                        type: 'varchar'
                    }
                ],
            }),
        );

        await queryRunner.createForeignKey(
            'product_photos',
            new TableForeignKey({
                columnNames:['productId'],
                referencedTableName:'products',
                referencedColumnNames:['id'],
                onDelete: "CASCADE",
                onUpdate: "CASCADE"
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('product_photos');
    }

}
