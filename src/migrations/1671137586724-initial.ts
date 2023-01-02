import { MigrationInterface, QueryRunner } from "typeorm";

export class initial1671137586724 implements MigrationInterface {
    name = 'initial1671137586724'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "storage" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "road" integer NOT NULL, "stand" integer NOT NULL, "row" integer NOT NULL, CONSTRAINT "PK_f9b67a9921474d86492aad2e027" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "products" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(120) NOT NULL, "price" double precision NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "validity" TIMESTAMP NOT NULL, "quantity" integer NOT NULL, "isActive" boolean NOT NULL, "storageId" uuid, CONSTRAINT "UQ_4c9fb58de893725258746385e16" UNIQUE ("name"), CONSTRAINT "REL_40ebab59b463836bef2a50371e" UNIQUE ("storageId"), CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "storage_size" ("id" SERIAL NOT NULL, "road" integer NOT NULL DEFAULT '0', "stand" integer NOT NULL DEFAULT '0', "row" integer NOT NULL DEFAULT '0', CONSTRAINT "PK_64a5e5ee9317f0aa0c9969279c0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_40ebab59b463836bef2a50371e9" FOREIGN KEY ("storageId") REFERENCES "storage"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_40ebab59b463836bef2a50371e9"`);
        await queryRunner.query(`DROP TABLE "storage_size"`);
        await queryRunner.query(`DROP TABLE "products"`);
        await queryRunner.query(`DROP TABLE "storage"`);
    }

}
