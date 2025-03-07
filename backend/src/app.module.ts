import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecyclerModule } from './recycler/recycler.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import dotenv from 'dotenv';

dotenv.config();
const DATABASE_URL="postgresql://test_i9q3_user:027lSHZYJv8wk5dDtQ1Mg0CMPtUsjyqn@dpg-cv59t45ds78s739bjf0g-a/test_i9q3"
const NODE_ENV="production"

@Module({
  imports: [
    ConfigModule.forRoot(), // Load environment variables
    TypeOrmModule.forRoot({
      type: 'postgres',
      url:DATABASE_URL, // Use Render's database URL
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // Set to false in production
      ssl: NODE_ENV === 'production' ? { rejectUnauthorized: false } : false, // Required for Render DB
    }),
    RecyclerModule,
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
