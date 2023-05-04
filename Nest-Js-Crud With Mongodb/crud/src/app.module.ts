import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ProductSchema } from './product.model';

@Module({
  // Mongo Db Connected Successfull...
  imports: [
    // For Env
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    // For Connection
    MongooseModule.forRoot(process.env.MONGO_URL),
    // Here We are Selecting The Name Of The
    MongooseModule.forFeature([{ name: 'product', schema: ProductSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
