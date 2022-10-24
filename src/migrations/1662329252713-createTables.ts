import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1662329252713 implements MigrationInterface {
    name = 'createTables1662329252713'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Addresses" ("id" uuid NOT NULL, "district" character varying NOT NULL, "zipCode" character varying NOT NULL, "number" character varying, "city" character varying NOT NULL, "state" character varying NOT NULL, CONSTRAINT "PK_239c81748e5a62ac7223a7350c5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Categories" ("id" uuid NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_537b5c00afe7427c4fc9434cd59" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Users" ("id" uuid NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "isAdm" boolean NOT NULL, "isActive" boolean NOT NULL, "password" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL, "updatedAt" TIMESTAMP NOT NULL, CONSTRAINT "UQ_3c3ab3f49a87e6ddb607f3c4945" UNIQUE ("email"), CONSTRAINT "PK_16d4f7d636df336db11d87413e3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Schedules" ("id" uuid NOT NULL, "date" TIMESTAMP NOT NULL, "hour" character varying NOT NULL, "userId" uuid, CONSTRAINT "PK_364f08c10e5a443bf4a2125e702" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Properties" ("id" uuid NOT NULL, "sold" boolean NOT NULL DEFAULT false, "value" numeric(12,2) NOT NULL, "size" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL, "updatedAt" TIMESTAMP NOT NULL, CONSTRAINT "PK_0840069eb699a18f3ad6e829ae8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "Schedules" ADD CONSTRAINT "FK_ba2b01c842e63abe750a2eb13d3" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Schedules" DROP CONSTRAINT "FK_ba2b01c842e63abe750a2eb13d3"`);
        await queryRunner.query(`DROP TABLE "Properties"`);
        await queryRunner.query(`DROP TABLE "Schedules"`);
        await queryRunner.query(`DROP TABLE "Users"`);
        await queryRunner.query(`DROP TABLE "Categories"`);
        await queryRunner.query(`DROP TABLE "Addresses"`);
    }

}
