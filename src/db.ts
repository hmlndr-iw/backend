import { DataSource, Entity, Column, BaseEntity, PrimaryColumn } from "typeorm";
import * as bcrypt from 'bcrypt'

@Entity()
export class Enterprise extends BaseEntity {
  @Column()
  title: string;

  @PrimaryColumn()
  username: string;

  @Column()
  image: string;

  @Column()
  password: string;
}

export async function getDb() {
  try {
    const db = new DataSource({
      type: "sqlite",
      database: "./tmp.db",
      entities: [Enterprise],
      synchronize: true,
      logging: false,
    })

    await db.initialize()

  } catch (e: any) {
    console.log(e);
  }
}
