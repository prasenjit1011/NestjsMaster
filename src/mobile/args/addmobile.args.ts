import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class AddMobileArgs{
    @Field()
    title: string;

    @Field((type) => Int )
    price: number;
}