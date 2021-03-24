import { Sight, SightDocument } from '@domain/sight/schemas/sight.schema';
import CreateSightDto from '@domain/sight/dtos/createSight.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class SightService {
    constructor(@InjectModel(Sight.name) private SightModel: Model<SightDocument>) {}

    async create(createSightDto: CreateSightDto): Promise<Sight> {
      const createdSight = new this.SightModel(createSightDto);
      return createdSight.save();
    }
  
    async findAll(): Promise<Sight[]> {
      return this.SightModel.find().exec();
    }

    async findOne(): Promise<Sight> {
      return this.SightModel.findOne();
    }

    async findSightsByCityName(): Promise<Sight> {
      return await this.SightModel.findOne();
    }

    async remove(body: Sight): Promise<Sight> {
      return this.SightModel.remove(body);
    }

}
