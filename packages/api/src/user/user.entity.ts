import { Entity, PrimaryColumn } from "typeorm"

@Entity({ name: "tb_user" })
export class User {
  @PrimaryColumn()
  username: string
}
