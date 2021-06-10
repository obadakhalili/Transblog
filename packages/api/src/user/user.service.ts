import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"

import { User } from "./user.entity"
import { IBody } from "./user.controller"

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>
  ) {}

  async create(body: IBody) {
    try {
      const user = this.userRepository.create(body)
      await this.userRepository.save(user)
      console.log(user)
    } catch (e) {
      console.log(e)
    }
  }
}
