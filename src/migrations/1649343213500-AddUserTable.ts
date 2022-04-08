import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddUserTable1649343213500 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying, "displayName" character varying, "age" integer NOT NULL, "created_at" TIMESTAMP DEFAULT NOW(), "updated_at" TIMESTAMP DEFAULT NOW(), "deleted_at" TIMESTAMP`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "user"`);
  }
}
