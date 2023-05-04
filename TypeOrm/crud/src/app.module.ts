import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// Type Orm Comes From nest js Package ... 
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './typeorm/entities/User';
// import { UsersModule } from './users/users.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'Amaan@123',
    database: 'User',
    // Entity Means We Are Creating For The 
    entities: [User],
    synchronize: true,
  }), ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
