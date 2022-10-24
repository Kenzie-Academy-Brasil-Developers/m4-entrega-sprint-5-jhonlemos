import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("Addresses")
export class Addresses {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  district: string;

  @Column({ length: 8 })
  zipCode: string;

  @Column({ nullable: true })
  number: string;

  @Column()
  city: string;

  @Column({ length: 2 })
  state: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
