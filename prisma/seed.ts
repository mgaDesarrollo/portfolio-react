import { prisma } from '../lib/prisma'
import * as bcrypt from 'bcryptjs'

async function main() {
  const password = await bcrypt.hash('admin123', 10)
  await prisma.user.upsert({
    where: { username: 'admin' },
    update: { password },
    create: { username: 'admin', password },
  })
  console.log('Usuario admin listo (admin / admin123)')
}

main().finally(() => process.exit(0))
