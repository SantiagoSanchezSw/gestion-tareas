import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Tiket } from "src/entities/tikets.entity";
import { TiketsController } from "src/controllers/tikets.controller";
import { TiketsService } from "src/services/tikets.service";
import { MailModule } from "./mail.module";

@Module({
    imports: [
        TypeOrmModule.forFeature([Tiket]),
        MailModule
    ],
    controllers: [TiketsController],
    providers: [TiketsService],
    exports: [TiketsService]
})
export class TiketModule {}