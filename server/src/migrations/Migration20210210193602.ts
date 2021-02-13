import { Migration } from '@mikro-orm/migrations';

export class Migration20210210193602 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "test" ("id" serial primary key, "text" varchar(255) not null);');
  }

}
