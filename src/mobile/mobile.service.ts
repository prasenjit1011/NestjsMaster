import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { MobileEntity } from "./entity/mobile.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { AddMobileArgs } from "./args/addmobile.args";
import { UpdateMobileArgs } from "./args/updatemobile.args";



@Injectable()
export class MobileService{
    constructor(@InjectRepository(MobileEntity) public readonly mobilRepo: Repository<MobileEntity>){

    }

    async findAllMobiles():Promise<MobileEntity[]>{
        let mobiles = await this.mobilRepo.find();
        return mobiles;
    }

    async findMobileById(id:number):Promise<MobileEntity>{
        let mobile = await this.mobilRepo.findOne({where:{id:id}});
        return mobile;
    }

    async deleteMobileById(id:number):Promise<string>{
        let mobile = await this.mobilRepo.delete(id);
        return "Mobile deleted";
    }

    async addMobile(addMobileArgs:AddMobileArgs):Promise<string>{
        let mobile: MobileEntity= new MobileEntity();
        mobile.title = addMobileArgs.title;
        mobile.price = addMobileArgs.price;
        await this.mobilRepo.save(mobile);
        return "Mobile added";
    }
    
    async updateMobile(updateMobileArgs:UpdateMobileArgs):Promise<string>{
        let mobile = await this.mobilRepo.findOne({where:{id:updateMobileArgs.id}});

        mobile.title = updateMobileArgs.title;
        mobile.price = updateMobileArgs.price;
        await this.mobilRepo.save(mobile);
        
        return "Mobile updated successfully";
                
    }
}