import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PayrollService } from './payroll/payroll.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, PayrollService],
})
export class AppModule {}
