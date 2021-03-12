import { Controller, Get } from '@nestjs/common';
import { Category } from '../category.entity';
import { CategoriesService } from './categories.service';
import { Post, Put, Delete, Body, Param } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiUnauthorizedResponse,
  ApiCreatedResponse,
  ApiBody,
} from '@nestjs/swagger';

@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @ApiOkResponse({ description: 'Lista todas as categorias' })
  @Get()
  index(): Promise<Category[]> {
    return this.categoriesService.findAll();
  }

  @Post()
  @ApiCreatedResponse({
    description:
      'Categoria cadastrada. Atenção: Remova a chave id no corpo da requisição',
  })
  @ApiBody({ type: Category })
  async create(@Body() categoryData: Category): Promise<any> {
    return this.categoriesService.create(categoryData);
  }

  @Put(':id/update')
  @ApiOkResponse({
    description:
      'Categoria atualizada. Atenção: Remova a chave id no corpo da requisição',
  })
  async update(
    @Param('id') id: number,
    @Body() categoryData: Category,
  ): Promise<any> {
    categoryData.id = Number(id);
    console.log('Update #' + categoryData.id);
    return this.categoriesService.update(categoryData);
  }

  @Delete(':id/delete')
  @ApiOkResponse({ description: 'Apaga a categoria' })
  async delete(@Param('id') id: number): Promise<any> {
    return this.categoriesService.delete(id);
  }
}
