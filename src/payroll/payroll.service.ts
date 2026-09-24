import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/config/prisma/prisma/prisma.service';
import { PayBonusDto } from './dto/payroll.dto';

@Injectable()
export class PayrollService {
    constructor (private prisma: PrismaService) {}

    async getDepartmentsWithEmployeeCount() {
        const departments = await this.prisma.department.findMany({
            select: {
                id: true,
                name: true,
                _count: {
                    select: { employee: true },
                },
            },
        });

        return departments.map((dept) => ({
            id: dept.id,
            name: dept.name,
            employeeCount: dept._count.employee,
        }));
    }

    async payBonuses(dto: PayBonusDto) {
        return this.prisma.$transaction(async (tx) => {
            const employees = await tx.employee.findMany({
                where: { id: { in: dto.employeeIds }, bonus: { gt: 0} },
            });

            for (const emp of employees) {
                const newSalary = emp.salary.plus(emp.bonus);

                // console.log("new salary", newSalary);

                await tx.employee.update({
                    where: { id: emp.id },
                    data: { salary: newSalary, bonus: 0 },
                });

                // console.log("emp", emp);

                // if (emp.id === 9) {
                //     throw new Error('Simulated failure after employee 9 updated');
                // }

                await tx.transactionLog.create({
                    data: { employeeId: emp.id, amount: emp.bonus, type: 'BONUS_PAYOUT', },
                });
            }

            return { processed: employees.length };
        })
    }
}
