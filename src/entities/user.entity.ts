import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Schedules } from "./schedules.entity";
import { Exclude } from "class-transformer";

@Entity("Users")
export class Users {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  isAdm: boolean;

  @Column()
  isActive: boolean;

  @Column()
  @Exclude()
  password: string;

  @Column()
  createdAt: string;

  @Column()
  updatedAt: string;

  @OneToMany(() => Schedules, (schedules) => schedules.user, {
    eager: true,
  })
  schedules: Schedules[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
