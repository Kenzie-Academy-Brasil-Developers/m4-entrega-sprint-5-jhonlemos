import { MigrationInterface, QueryRunner } from "typeorm";

export class correctTables1662331161673 implements MigrationInterface {
    name = 'correctTables1662331161673'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Schedules" ADD "propertiesId" uuid`);
        await queryRunner.query(`ALTER TABLE "Properties" ADD "categoryId" uuid`);
        await queryRunner.query(`ALTER TABLE "Schedules" ADD CONSTRAINT "FK_e6506a405d74ceef2110a70f15a" FOREIGN KEY ("propertiesId") REFERENCES "Properties"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Properties" ADD CONSTRAINT "FK_c35c840c02812719d692907c74c" FOREIGN KEY ("categoryId") REFERENCES "Categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Properties" DROP CONSTRAINT "FK_c35c840c02812719d692907c74c"`);
        await queryRunner.query(`ALTER TABLE "Schedules" DROP CONSTRAINT "FK_e6506a405d74ceef2110a70f15a"`);
        await queryRunner.query(`ALTER TABLE "Properties" DROP COLUMN "categoryId"`);
        await queryRunner.query(`ALTER TABLE "Schedules" DROP COLUMN "propertiesId"`);
    }

}
