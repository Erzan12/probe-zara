import { Body, Controller, Post } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { CreateDepartmentDto } from './dto/department.dto';

@Controller('department')
export class DepartmentController {
    constructor(private departmentService: DepartmentService) {}

    @Post()
    createDepartment(
        @Body() dto: CreateDepartmentDto,
    ) {
        return this.departmentService.createDepartment(dto);
    }
}
