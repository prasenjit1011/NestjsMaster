import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MobileEntity } from "./entity/mobile.entity";
import { MobileResolver } from "./mobile.resolver";
import { MobileService } from "./mobile.service";




@Module({
    imports:[TypeOrmModule.forFeature([MobileEntity])],
    controllers:[],
    providers:[MobileResolver, MobileService],
    exports:[MobileService]
})
export class MobileModule{}