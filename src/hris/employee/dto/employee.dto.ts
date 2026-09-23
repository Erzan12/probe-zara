import { IsDecimal, IsEmail, IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateEmployeeDto {
    @IsString()
    @IsNotEmpty()
    firstName!: string;

    @IsString()
    @IsNotEmpty()
    lastName!: string;

    @IsEmail()
    @IsNotEmpty()
    email!: string;

    @IsDecimal()
    @IsNotEmpty()
    salary!: string;

    @IsDecimal()
    @IsNotEmpty()
    bonus!: string;

    @IsInt()
    @IsNotEmpty()
    departmentId!: number;
}