import { Body, Controller, Get, Param, ParseIntPipe, Put } from '@nestjs/common';
import { PayrollService } from './payroll.service';
import { PayBonusDto } from './dto/payroll.dto';

@Controller('payroll')
export class PayrollController {
    constructor(private payrollService: PayrollService) {}

    @Get()
    getEmployeeCount() {
        return this.payrollService.getDepartmentsWithEmployeeCount();
    }

    @Put('pay-bonus')
    payBonuses(@Body() dto: PayBonusDto) {
        return this.payrollService.payBonuses(dto);
    }
}
