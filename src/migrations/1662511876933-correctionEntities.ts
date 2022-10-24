import { MigrationInterface, QueryRunner } from "typeorm";

export class correctionEntities1662511876933 implements MigrationInterface {
    name = 'correctionEntities1662511876933'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Properties" DROP CONSTRAINT "FK_d947b30b286a2b94fdd257d014a"`);
        await queryRunner.query(`ALTER TABLE "Addresses" ALTER COLUMN "id" SET DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "Properties" DROP CONSTRAINT "FK_c35c840c02812719d692907c74c"`);
        await queryRunner.query(`ALTER TABLE "Categories" ALTER COLUMN "id" SET DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "Schedules" DROP CONSTRAINT "FK_ba2b01c842e63abe750a2eb13d3"`);
        await queryRunner.query(`ALTER TABLE "Users" ALTER COLUMN "id" SET DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "Schedules" ALTER COLUMN "id" SET DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "Schedules" DROP CONSTRAINT "FK_e6506a405d74ceef2110a70f15a"`);
        await queryRunner.query(`ALTER TABLE "Properties" ALTER COLUMN "id" SET DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "Schedules" ADD CONSTRAINT "FK_ba2b01c842e63abe750a2eb13d3" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Schedules" ADD CONSTRAINT "FK_e6506a405d74ceef2110a70f15a" FOREIGN KEY ("propertiesId") REFERENCES "Properties"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Properties" ADD CONSTRAINT "FK_c35c840c02812719d692907c74c" FOREIGN KEY ("categoryId") REFERENCES "Categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Properties" ADD CONSTRAINT "FK_d947b30b286a2b94fdd257d014a" FOREIGN KEY ("addressId") REFERENCES "Addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Properties" DROP CONSTRAINT "FK_d947b30b286a2b94fdd257d014a"`);
        await queryRunner.query(`ALTER TABLE "Properties" DROP CONSTRAINT "FK_c35c840c02812719d692907c74c"`);
        await queryRunner.query(`ALTER TABLE "Schedules" DROP CONSTRAINT "FK_e6506a405d74ceef2110a70f15a"`);
        await queryRunner.query(`ALTER TABLE "Schedules" DROP CONSTRAINT "FK_ba2b01c842e63abe750a2eb13d3"`);
        await queryRunner.query(`ALTER TABLE "Properties" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "Schedules" ADD CONSTRAINT "FK_e6506a405d74ceef2110a70f15a" FOREIGN KEY ("propertiesId") REFERENCES "Properties"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Schedules" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "Users" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "Schedules" ADD CONSTRAINT "FK_ba2b01c842e63abe750a2eb13d3" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Categories" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "Properties" ADD CONSTRAINT "FK_c35c840c02812719d692907c74c" FOREIGN KEY ("categoryId") REFERENCES "Categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Addresses" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "Properties" ADD CONSTRAINT "FK_d947b30b286a2b94fdd257d014a" FOREIGN KEY ("addressId") REFERENCES "Addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
