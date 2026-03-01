import { PrismaClient } from '@prisma/client'
import app from './app'
import config from './app/config'

const prisma = new PrismaClient()

async function bootstrap() {
  try {
    // Optional: Manually connect to verify the database is reachable on startup
    await prisma.$connect()
    console.log('🐘 Database connected successfully')

    app.listen(config.port, () => {
      console.log(`🚀 Server is running on port ${config.port}`)
    })
  } catch (err) {
    console.error('❌ Failed to connect to the database:', err)
    await prisma.$disconnect()
    process.exit(1)
  }
}

bootstrap()
