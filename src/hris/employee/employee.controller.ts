import { Body, Controller, Post } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/employee.dto';

@Controller('employee')
export class EmployeeController {
    constructor(private employeeService: EmployeeService) {}

    @Post()
    createEmployee(
        @Body() dto: CreateEmployeeDto, 
    ){
        return this.employeeService.createEmployee(dto);
    }
}
