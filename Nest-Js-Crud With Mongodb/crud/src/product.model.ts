import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';


// Here We Bascially Created A Schema For Product  ....
export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  @Prop()
  productname: string;

  @Prop()
  description: string;

  @Prop({ default: Date.now })
  data_added: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
