import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecyclerModule } from './recycler/recycler.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { UserService } from './user/user.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432, 
      username: 'postgres', 
      password: 'root', // Change this to your PostgreSQL password
      database: 'test2', // Change to your PostgreSQL database name
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // Path to your entities
      synchronize: true, // Set to false in production
    }),
    RecyclerModule,
    UserModule,
    AuthModule // Your custom module
  ],
  controllers: [AppController],
  providers: [AppService, UserService],
})
export class AppModule {}
