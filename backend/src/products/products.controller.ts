import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get('seeds')
  getSeeds() {
    try {
      let allProducts = [];
      for (let index = 0; index < 100; index++) {
          let faker = require('faker');
          let description = faker.commerce.productName() + ' ' + faker.commerce.productMaterial() + ' ' + faker.random.word();
          let price =  faker.commerce.price();
          let promotion_price =  price - 19;
          let category =  faker.commerce.productMaterial();

          let urlimage = faker.image.imageUrl();
          let urlimage2 = faker.image.imageUrl();

          const product = {
            description: description,
            price: price,
            promotion_price: promotion_price,
            category: category,
            product_photos:[
              {url: urlimage},
              {url: urlimage2}
            ]
          };

          allProducts.push(product);
          
          this.productsService.create(product);
      }
      return allProducts
    } catch (error) {
      return error;
    }
  }


  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto
  ) {
    return this.productsService.update(+id, updateProductDto);
  }

  @HttpCode(204)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
