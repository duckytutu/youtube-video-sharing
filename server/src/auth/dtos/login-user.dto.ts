import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class LoginUserDto {
  @ApiProperty({ nullable: false, uniqueItems: true })
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty({ nullable: false })
  @IsString()
  @IsNotEmpty()
  password: string;
}
