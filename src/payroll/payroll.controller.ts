import { Body, Controller, Get, Param, ParseIntPipe, Put, UseInterceptors } from '@nestjs/common';
import { PayrollService } from './payroll.service';
import { PayBonusDto } from './dto/payroll.dto';
import { AuditLoggingInterceptor } from 'src/utils/interceptor';

@Controller('payroll')
export class PayrollController {
    constructor(private payrollService: PayrollService) {}

    @Get()
    getEmployeeCount() {
        return this.payrollService.getDepartmentsWithEmployeeCount();
    }

    @Put('pay-bonus')
    @UseInterceptors(AuditLoggingInterceptor)
    payBonuses(@Body() dto: PayBonusDto) {
        return this.payrollService.payBonuses(dto);
    }
}
