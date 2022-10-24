import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Properties } from "./properties.entity";
import { Users } from "./user.entity";

@Entity("Schedules")
export class Schedules {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  date: string;

  @Column()
  hour: string;

  @ManyToOne(() => Users)
  user: Users;

  @ManyToOne(() => Properties)
  properties: Properties;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
