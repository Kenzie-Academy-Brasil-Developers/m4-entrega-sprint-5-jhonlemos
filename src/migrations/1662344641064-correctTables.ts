import { MigrationInterface, QueryRunner } from "typeorm";

export class correctTables1662344641064 implements MigrationInterface {
    name = 'correctTables1662344641064'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Users" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "Users" ADD "createdAt" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Users" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "Users" ADD "updatedAt" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Schedules" DROP COLUMN "date"`);
        await queryRunner.query(`ALTER TABLE "Schedules" ADD "date" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Properties" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "Properties" ADD "createdAt" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Properties" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "Properties" ADD "updatedAt" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Properties" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "Properties" ADD "updatedAt" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Properties" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "Properties" ADD "createdAt" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Schedules" DROP COLUMN "date"`);
        await queryRunner.query(`ALTER TABLE "Schedules" ADD "date" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Users" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "Users" ADD "updatedAt" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Users" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "Users" ADD "createdAt" TIMESTAMP NOT NULL`);
    }

}
