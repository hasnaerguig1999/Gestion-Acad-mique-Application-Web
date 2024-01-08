import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Room } from './entities/room.entity';

@Injectable()
export class RoomsService {
  constructor(
    @InjectRepository(Room)
    private readonly roomRepository: Repository<Room>,
  ) {}
  async create(createRoomDto: CreateRoomDto) {
    const room = await this.roomRepository.save(createRoomDto);
    if (!room) {
      throw new NotFoundException('room is not added');
    }
    return room;
  }

  async findAll() {

    const rooms = await this.roomRepository.find({relations: ['subject']});
    if (!rooms) {
      throw new NotFoundException('rooms not found');
    }
    return rooms;
  }

  async findOne(id: number) {

    const room = await this.roomRepository.findOne({where: {id}, relations: ['subject']});
    if (!room) {

      throw new NotFoundException('room is not found');
    }
    return room;
  }

  async update(id: number, updateRoomDto: UpdateRoomDto) {
    const updatedRoom = await this.roomRepository.update(id, updateRoomDto);
    if (!updatedRoom) {
      throw new NotFoundException(
        'The room with the provided ID was not found.',
      );
    }
    return updatedRoom;
  }

  async remove(id: number): Promise<void> {
    const room = await this.roomRepository.delete(id);
    if (room.affected === 0) {
      throw new NotFoundException('the room is not deleted');
    }
   
  }
}
