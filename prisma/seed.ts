import { prisma } from '../lib/prisma'
import * as bcrypt from 'bcryptjs'

async function main() {
  const password = await bcrypt.hash('123456', 10)
  await prisma.user.upsert({
    where: { username: 'admin' },
    update: {},
    create: { username: 'admin', password },
  })
  console.log('Usuario admin listo (admin / 123456)')
}

main().finally(()=> process.exit(0))
