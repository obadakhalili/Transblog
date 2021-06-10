import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Column,
} from "typeorm"

@Entity("transblog_user")
export class User {
  @PrimaryGeneratedColumn("uuid", { name: "user_uuid" })
  uuid: string

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date

  @Column({ type: "varchar", length: 30, unique: true })
  username: string

  @Column({ type: "varchar", length: 320, unique: true })
  email: string

  @Column({ name: "user_password", type: "char", length: 95 })
  password: string

  @Column({ name: "first_name", type: "varchar", length: 25 })
  firstName: string

  @Column({ name: "last_name", type: "varchar", length: 25 })
  lastName: string

  @Column({ type: "varchar", length: 25 })
  nationality: string

  @Column({ type: "date", nullable: true })
  dob: string

  @Column({ type: "varchar", length: 150, nullable: true })
  bio: string

  @Column({ name: "translation_points", type: "smallint", default: 0 })
  translationPoints: number
}
