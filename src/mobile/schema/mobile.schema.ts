import { Field, Int, ObjectType } from "@nestjs/graphql";


@ObjectType()
export class Mobile{
    @Field((type)=> Int)
    id: number;

    @Field()
    title: string;

    @Field((type) => Int, {nullable:false})
    price: number;
}