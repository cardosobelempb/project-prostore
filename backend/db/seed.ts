import { PrismaClient } from '@prisma/client';
import sampleData from './sample-data';

async function main() {
  console.log('Main =>');
  const prisma = new PrismaClient();
  await prisma.product.deleteMany();
  await prisma.product.createMany({ data: sampleData.products });

  console.log('Database seeded successfully!');
}

main();
