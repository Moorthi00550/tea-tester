// import { PrismaClient } from "@prisma/client";

// declare global {
//   // eslint-disable-next-line no-var
//   var prismaGlobal: PrismaClient;
// }

// if (process.env.NODE_ENV !== "production") {
//   if (!global.prismaGlobal) {
//     global.prismaGlobal = new PrismaClient();
//   }
// }

// const prisma = global.prismaGlobal ?? new PrismaClient();

// export default prisma;

import { PrismaClient } from "@prisma/client";

declare global {
  // eslint-disable-next-line no-var
  var prismaGlobal: PrismaClient;
}

const prisma =
  global.prismaGlobal ??
  new PrismaClient({
    datasources: {
      db: {
        url: process.env.DATABASE_URL,
      },
    },
  });

if (process.env.NODE_ENV !== "production") {
  global.prismaGlobal = prisma;
}

export default prisma;
