import { Body, Controller, Post } from "@nestjs/common"

import { UserService } from "./user.service"

export interface IBody {
  username: string
  email: string
  password: string
  firstName: string
  lastName: string
  nationality: string
  dob?: string
  bio?: string
  translationPoints?: number
}

@Controller("user")
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  signup(@Body() body: IBody) {
    this.userService.create(body)
    return ".."
  }
}
