import { MigrationInterface, QueryRunner } from "typeorm";

export class lengthAddress1662355860611 implements MigrationInterface {
    name = 'lengthAddress1662355860611'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Addresses" DROP COLUMN "zipCode"`);
        await queryRunner.query(`ALTER TABLE "Addresses" ADD "zipCode" character varying(8) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Addresses" DROP COLUMN "state"`);
        await queryRunner.query(`ALTER TABLE "Addresses" ADD "state" character varying(2) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Addresses" DROP COLUMN "state"`);
        await queryRunner.query(`ALTER TABLE "Addresses" ADD "state" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Addresses" DROP COLUMN "zipCode"`);
        await queryRunner.query(`ALTER TABLE "Addresses" ADD "zipCode" character varying NOT NULL`);
    }

}
