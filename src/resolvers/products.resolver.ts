import { Arg, Resolver, Query, Mutation } from 'type-graphql'
import { validateOrReject } from 'class-validator'
import { CreateProductInput } from '../dtos/inputs'
import { Product } from '../dtos/models'
import { ProductMongo } from '../models'

@Resolver()
export class ProductsResolver {
  @Query(() => [Product])
  async products() {
    return await ProductMongo.find()
  }

  @Mutation(() => Product)
  async createProduct(@Arg('data') data: CreateProductInput) {
    await validateOrReject(data)
    await ProductMongo.create(data)
    return data
  }
}
