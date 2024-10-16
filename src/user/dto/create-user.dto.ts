import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'must be string' })
  @IsNotEmpty({ message: 'must be required' })
  @IsEmail({}, { message: 'must be email ex:example@gmail.com  ' })
  email: string;

  @IsString({ message: 'must be string' })
  @IsNotEmpty({ message: 'must be required' })
  @IsPhoneNumber('SY', { message: 'must be phone' })
  phone: string;

  @IsString({ message: 'must be string' })
  @IsNotEmpty({ message: 'must be required' })
  gender: string;

  @IsString({ message: 'must be string' })
  @IsNotEmpty({ message: 'must be required' })
  password: string;

  @IsString({ message: 'must be string' })
  @IsNotEmpty({ message: 'must be required' })
  firstName: string;

  @IsString({ message: 'must be string' })
  @IsNotEmpty({ message: 'must be required' })
  lastName: string;

  @IsString({ message: 'must be string' })
  image: string;
}
