import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { FacultiesService } from './faculties.service';
import { CreateFacultyDto } from './dto/create-faculty.dto';
import { UpdateFacultyDto } from './dto/update-faculty.dto';
import { Roles } from '../auth/roles.decorator';
import { RolesGuard } from 'src/auth/roles.guard';

@Controller('faculties')
export class FacultiesController {

  constructor(private readonly facultiesService: FacultiesService) { }

  @UseGuards(RolesGuard)
  @Roles('superadmin')
  @Post()
  create(@Body() createFacultyDto: CreateFacultyDto) {
    return this.facultiesService.create(createFacultyDto);

  }

  @UseGuards(RolesGuard)
  @Roles('superadmin')
  @Get()
  findAll() {
    return this.facultiesService.findAll();
  }
  @UseGuards(RolesGuard)
  @Roles('superadmin')
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.facultiesService.findOne(+id);
  }
  @UseGuards(RolesGuard)
  @Roles('superadmin')
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFacultyDto: UpdateFacultyDto) {
    return this.facultiesService.update(+id, updateFacultyDto);
  }
  @UseGuards(RolesGuard)
  @Roles('superadmin')
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.facultiesService.remove(+id);
  }
}
