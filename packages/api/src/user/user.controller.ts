import { Controller, Get } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"

import { User } from "./user.entity"

@Controller("user")
export class UserController {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>
  ) {}

  @Get()
  insertUser() {
    return this.userRepository.find({ username: "Obada" })
  }
}
