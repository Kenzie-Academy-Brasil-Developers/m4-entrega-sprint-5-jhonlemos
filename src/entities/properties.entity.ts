import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Addresses } from "./addresses.entity";
import { Categories } from "./category.entity";
import { Schedules } from "./schedules.entity";

@Entity("Properties")
export class Properties {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ default: false })
  sold: boolean;

  @Column("decimal", { precision: 12, scale: 2 })
  value: number;

  @Column()
  size: number;

  @Column()
  createdAt: string;

  @Column()
  updatedAt: string;

  @OneToMany(() => Schedules, (schedules) => schedules.properties, {
    eager: true,
  })
  schedules: Schedules[];

  @ManyToOne(() => Categories)
  category: Categories;

  @OneToOne(() => Addresses, {
    eager: true,
  })
  @JoinColumn()
  address: Addresses;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
