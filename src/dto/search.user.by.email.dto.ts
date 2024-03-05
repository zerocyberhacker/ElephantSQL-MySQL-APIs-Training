import { IsString } from 'class-validator';

export class SearchUserByEmailDto {
  @IsString()
  email: string;
}
