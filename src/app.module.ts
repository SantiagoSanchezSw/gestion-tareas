import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tiket } from './entities/tikets.entity';
import { TiketModule } from './modules/tikets.module';
import { MailModule } from './modules/mail.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host:'localhost',
      port:5432,
      username:'postgres',
      password:'1234',
      database:'gestion-tareas',
      entities:[Tiket],
      synchronize:true,
    }),
    TiketModule,
    MailModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
