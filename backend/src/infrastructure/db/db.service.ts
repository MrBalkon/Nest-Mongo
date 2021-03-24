import { Inject, Injectable, Scope } from '@nestjs/common';
import { MongooseOptionsFactory, MongooseModuleOptions } from '@nestjs/mongoose';
import { REQUEST } from '@nestjs/core';
import { Request } from '@nestjs/common';

@Injectable({ scope: Scope.REQUEST })
export class MongooseConfigService implements MongooseOptionsFactory {
    constructor(
        @Inject(REQUEST) private readonly request,
        ) {
    }

    createMongooseOptions(): MongooseModuleOptions {
        console.log(this.request.body.name)
        return {
            uri: `mongodb://database/${this.request.body.name}`, // Change this to whatever you want; you have full access to the request object.
        };
    }
    
}