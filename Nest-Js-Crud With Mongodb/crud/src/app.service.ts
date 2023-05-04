import { Injectable } from '@nestjs/common';
import { Product, ProductDocument } from './product.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AppService {
  constructor(
    // Here Bascially We Are Creating Our Model Inside Mongodb
    // Here We Had Successfully Created Our Model Inside A Mongodb ...
    @InjectModel('product')
    private readonly productModel: Model<ProductDocument>,
  ) {}

  // Creating A Product Inside Mongo Db
  // Bussiness Login For Creating A Product...
  async createProduct(product: Product): Promise<Product> {
    const newProduct = new this.productModel(product);
    return newProduct.save();
  }

  // Reading A Product :
  // Because Of We Are Using Every Single data That's Why We Are Using
  async readProduct() {
    try {
      return this.productModel.find();
    } catch (err) {
      console.log(err);
    }
  }
 
  // Update The Product By Id 
  // We Will Bacically update the user by id
  async updateProduct(id,data): Promise<Product>{
    return this.productModel.findByIdAndUpdate(id,data,{new:true})
  }

  // Delete Product By Id ... 
  async deleteProduct(id){
    return this.productModel.findByIdAndRemove(id)
  }
}
