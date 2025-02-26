import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MobileModule } from "src/mobile/mobile.module";
import { AuthGuard } from "./auth.guard";




@Module({
    imports:[MobileModule],
    controllers:[],
    providers:[AuthGuard]
})
export class AuthModule{}