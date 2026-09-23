import { Module } from '@nestjs/common';
import { PayrollService } from './payroll/payroll.service';
import { PayrollController } from './payroll/payroll.controller';
import { PrismaService } from './config/prisma/prisma/prisma.service';
import { HrisModule } from './hris/hris.module';

@Module({
  imports: [HrisModule],
  controllers: [PayrollController],
  providers: [PayrollService, PrismaService],
})
export class AppModule {}
