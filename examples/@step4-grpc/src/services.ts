import { PrismaClient } from '@prisma/client';

async function main(prisma: PrismaClient) {
  await prisma.user.deleteMany();
  await prisma.user.create({ data: { email: 'test@email.com' } });
  const usersCount = await prisma.user.count();
  console.log({ users_count: usersCount });

}

export { main };