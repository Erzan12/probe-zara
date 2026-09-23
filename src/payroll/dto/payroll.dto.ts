import { IsInt, IsNotEmpty } from "class-validator";

export class PayBonusDto {
    @IsInt()
    @IsNotEmpty()
    employeeIds!: number[];
}