import { PrismaClient } from "@prisma/client";
import path from "path";

class AccountRegister {
  args: any;

  constructor(validatedArgs: any) {
    this.args = validatedArgs;
  }

  async call() {
    const prisma = new PrismaClient();

    const {
      data: {
        first_name,
        last_name,
        phone_number,
        email,
        password,
        has_accepted_terms,
      },
    } = this.args;

    const isExist = await prisma.account.findFirst({
      where: {
        email,
      },
    });

    if (!isExist) {
      try {
        const account = await prisma.account.create({
          data: {
            first_name: first_name,
            last_name: last_name,
            email: email,
            phone_number: phone_number,
            password: password,
            has_accepted_terms: has_accepted_terms,
          },
        });

        return { message: "Success registration" };
      } catch (err) {
        console.log(err);
        return { message: "Registration failed" };
      }
    } else {
        return { message: "Email already exists" };
    }
  }
}

export default AccountRegister;
