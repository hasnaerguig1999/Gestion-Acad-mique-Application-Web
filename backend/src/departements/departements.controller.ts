import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe,UseGuards } from '@nestjs/common';
import { DepartementsService } from './departements.service';
import { CreateDepartementDto } from './dto/create-departement.dto';
import { UpdateDepartementDto } from './dto/update-departement.dto';
import { Roles } from '../auth/roles.decorator';
import { RolesGuard } from 'src/auth/roles.guard';

@Controller('departements')
export class DepartementsController {
  constructor(private readonly departementsService: DepartementsService) {}
  @UseGuards(RolesGuard)
  @Roles('doyen')
  @Post()
  create(@Body() createDepartementDto: CreateDepartementDto) {
    return this.departementsService.create(createDepartementDto);
  }

  @UseGuards(RolesGuard)
  @Roles('doyen')
  @Get()
  findAll() {
    return this.departementsService.findAll();
  }
  @UseGuards(RolesGuard)
  @Roles('doyen')
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.departementsService.findOne(+id);
  }
  @UseGuards(RolesGuard)
  @Roles('doyen')
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDepartementDto: UpdateDepartementDto) {
    return this.departementsService.update(+id, updateDepartementDto);
  }
  @UseGuards(RolesGuard)
  @Roles('doyen')
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.departementsService.remove(+id);
  }
}
