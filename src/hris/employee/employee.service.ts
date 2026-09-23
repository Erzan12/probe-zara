import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/config/prisma/prisma/prisma.service';
import { CreateEmployeeDto } from './dto/employee.dto';

@Injectable()
export class EmployeeService {
    constructor(private prisma: PrismaService) {}

    async createEmployee(dto: CreateEmployeeDto){
        try {
            const employee = await this.prisma.employee.create({
                data: {
                    firstName: dto.firstName,
                    lastName: dto.lastName,
                    email: dto.email,
                    salary: dto.salary,
                    bonus: dto.bonus,
                    departmentId: dto.departmentId,
                },
            });
            return {
                status: 'success',
                message: 'Employee created successfully',
                employee,
            };
        } catch (e) {
            if (dto.firstName && dto.lastName ) {
                throw new BadRequestException("Employee already exists.");
            }

            if (dto.email) {
                throw new BadRequestException("Email already exists.");
            }
        }
    }
}
