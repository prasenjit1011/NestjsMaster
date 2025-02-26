import { CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable, UnauthorizedException } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { Observable } from "rxjs";
import { MobileEntity } from "src/mobile/entity/mobile.entity";
import { MobileService } from "src/mobile/mobile.service";

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private readonly mobileService:MobileService){}

    async canActivate(context: ExecutionContext): Promise<boolean>{
        const ctx = GqlExecutionContext.create(context).getContext();
        const {email, password} = ctx.req.body.variables;
        const mobile: MobileEntity = await this.mobileService.findMobileById(email);

        if(mobile && mobile.price == password){
            ctx.mobile = mobile;
            return true;
        }
        throw new HttpException("UnAuthenticated", HttpStatus.UNAUTHORIZED);
    }
}