import { Email, HashPassword, PersonName } from "@shared/core";
import { User } from "../user.entity";
import { IUser } from "../user.interface";

test("Deve retornar um user valid", () => {
  const user = User.create({
    name: new PersonName("Lucas"),
    email: new Email("lucas@gmail.com"),
    password: new HashPassword(
      "$2a$12$T3ObT0q.pxZ1PXL7l6YOy.BygRM0HBogIPpQOgjHoqM8vrrt9h46W"
    ),
    role: IUser.IRoles.USER,
  });
  console.log(user);
  expect(user).toBeInstanceOf(User);
});
