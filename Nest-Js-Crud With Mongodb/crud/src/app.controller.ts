import { Body, Controller, Post, Get, Put, Param, Delete } from '@nestjs/common';
import { AppService } from './app.service';
import { Product } from './product.model';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // We Are Getting Our Product Form Product Schema
  // By Default We Are Creating
  @Post()
  async createProduct(@Body() productDto: Product) {
    return this.appService.createProduct(productDto);
  }

  // For Reading
  @Get()
  readProduct() {
    return this.appService.readProduct();
  }

  // For Updating The Product ... 
  @Put(':id')
  async updateProduct(@Param('id') id: string, @Body()updateData: Product) : Promise<Product>{
    return this.appService.updateProduct(id, updateData)
  }

  // Deleting The Data
  @Delete(':id')
  async deleteProduct(@Param('id') id:string){
    return this.appService.deleteProduct(id)
  }
}