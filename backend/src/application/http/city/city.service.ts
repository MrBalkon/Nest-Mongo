import { City, CityDocument } from '@domain/city/city.schema';
import CreateCityDto from '@domain/city/dtos/createCity.dto';
import  { ReadCityDto } from '@domain/city/dtos/readCity.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CityService {
    constructor(@InjectModel(City.name) private CityModel: Model<CityDocument>) {}

    async create(createCityDto: CreateCityDto): Promise<City> {
        const createdCity = new this.CityModel(createCityDto);
        return createdCity.save();
    }

    async findAll(city: ReadCityDto): Promise<City[]> {
       return this.CityModel
          .find(city)
          .populate({
            path: "sights",
            model: "Sight"
          })
          .exec();
    }

    async findOne(city: ReadCityDto): Promise<City> {
      return this.CityModel
          .findOne(city)
          .populate({
            path: "sights",
            model: "Sight"
          });
    }

    async remove(id: City): Promise<City> {
      return this.CityModel.remove(id);
    }

    async findSightsByCityName( name ):  Promise<City> {
      const city = await this.findOne({ name })
      if(!city) throw new NotFoundException(`There is no city with name '${name}'`);
      return city;
    }
}

