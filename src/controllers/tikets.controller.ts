import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { TiketsService } from "src/services/tikets.service";
import { TiketDto } from "src/dto/tiket.dto";
import { Cron, CronExpression } from "@nestjs/schedule";
import { status } from "src/entities/tikets.entity";
import { MailService } from "src/services/mail.service";
import * as moment from 'moment';

@Controller('api/tikets')
export class TiketsController {
    constructor(
        public service: TiketsService,
        public mailService: MailService,
    ) {}

    @Get('/all')
    async getAll () {
        return await this.service.getTikets();
    }

    @Get('/tiket/:id')
    async getTiket(@Param() params: any) {
        try {
            return await this.service.getTIket(params.id)
        } catch (error) {
            return error;
        }
    }

    @Post('/create')
    async createTiket(@Body() body: TiketDto) {
        try {   
            return await this.service.createTiket(body)
        } catch (error) {
            return error;
        }
    }  
    
    @Post('/update/:id')
    async updateTiket(@Body() body: TiketDto, @Param() id: string) {
        try {
            return await this.service.updateTiket(id, body)
        } catch (error) {
            return error;
        }
    }

    // CRON TIKET JOBS TO REMEMBER THE TASK
    @Cron(CronExpression.EVERY_30_SECONDS)
    async sendTiketNotifications () {
        const date = new Date()
        const tikets = await this.service.getTikets()
        const today_date = moment(date).format("YYYY-MM-DD")
        const tiketsToNotify = tikets.filter(tiket => tiket.status != status.Ended && tiket.date_to_end === today_date)

        // send notification
        tiketsToNotify.forEach((tiket) => {
            this.mailService.sendUserWarning('joebizarre95@gmail.com', tiket.title)
        })

    }

}