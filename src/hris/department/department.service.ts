import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/config/prisma/prisma/prisma.service';
import { CreateDepartmentDto } from './dto/department.dto';

@Injectable()
export class DepartmentService {
    constructor(private prisma: PrismaService) {}

    async createDepartment(dto: CreateDepartmentDto) {
        const department = await this.prisma.department.create({
            data: {
                name: dto.name,
            },
        });

        return {
            status: 'success',
            message: 'Department created successsfully',
            department,
        };
    }
}
