import { IsArray, IsInt, IsNotEmpty } from "class-validator";

export class PayBonusDto {
    @IsInt({ each: true })
    @IsArray()
    @IsNotEmpty()
    employeeIds!: number[];
}