import { PartialType } from '@nestjs/mapped-types';
import { CreateProgrammeDto } from './create-programme.dto';

export class UpdateProgrammeDto extends PartialType(CreateProgrammeDto) {}
