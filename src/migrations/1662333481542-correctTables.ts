import { MigrationInterface, QueryRunner } from "typeorm";

export class correctTables1662333481542 implements MigrationInterface {
    name = 'correctTables1662333481542'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Properties" ADD "addressId" uuid`);
        await queryRunner.query(`ALTER TABLE "Properties" ADD CONSTRAINT "UQ_d947b30b286a2b94fdd257d014a" UNIQUE ("addressId")`);
        await queryRunner.query(`ALTER TABLE "Properties" ADD CONSTRAINT "FK_d947b30b286a2b94fdd257d014a" FOREIGN KEY ("addressId") REFERENCES "Addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Properties" DROP CONSTRAINT "FK_d947b30b286a2b94fdd257d014a"`);
        await queryRunner.query(`ALTER TABLE "Properties" DROP CONSTRAINT "UQ_d947b30b286a2b94fdd257d014a"`);
        await queryRunner.query(`ALTER TABLE "Properties" DROP COLUMN "addressId"`);
    }

}
