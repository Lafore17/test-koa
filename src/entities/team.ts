import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Team {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column("text")
  country: string;
}
