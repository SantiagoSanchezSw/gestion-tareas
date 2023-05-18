import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tiket } from 'src/entities/tikets.entity';

@Injectable() 
export class TiketsService {
    constructor(
         @InjectRepository(Tiket) private tiketsRepository: Repository<Tiket>,
    ) {}

    public async getTikets () {
        return await this.tiketsRepository.createQueryBuilder('tiket').getMany();
    }

    public async getTIket (id) {
        try {
            return await this.tiketsRepository.findOne({ where: { 'id' : id}})
        } catch (error) {
            throw error;
        }    
    }

    public async createTiket (body) {
        try {
            const tiket = await this.tiketsRepository.createQueryBuilder()
                .insert()
                .into(Tiket)
                .values(body)
                .execute()
            return tiket.generatedMaps;
        } catch (error) {
            throw error;
        }
    }

    public async updateTiket (id, body) {
        try {
            return await this.tiketsRepository.save({
                id,
                body
            })
        } catch (error) {
            throw error;
        }
    }
}