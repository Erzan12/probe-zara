import { Module } from '@nestjs/common';
import { EmployeeService } from './employee/employee.service';
import { EmployeeController } from './employee/employee.controller';
import { PrismaService } from 'src/config/prisma/prisma/prisma.service';
import { DepartmentController } from './department/department.controller';
import { DepartmentService } from './department/department.service';

@Module({
  controllers: [EmployeeController, DepartmentController],
  providers: [EmployeeService, PrismaService, DepartmentService]
})
export class HrisModule {}
