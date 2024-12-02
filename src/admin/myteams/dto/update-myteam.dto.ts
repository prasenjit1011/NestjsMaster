import { PartialType } from '@nestjs/mapped-types';
import { CreateMyteamDto } from './create-myteam.dto';

export class UpdateMyteamDto extends PartialType(CreateMyteamDto) {}
