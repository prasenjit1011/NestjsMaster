import { Query, Resolver } from "@nestjs/graphql";
import { Book } from "./book.schema";
import { Book as BookModel } from "../graphql";

//@Resolver("Book")
@Resolver(of => Book)
export class BookResolver{

    //@Query("books")
    @Query(returns => [Book], {name:'books'})
    getAllBooks(){
        let arr: BookModel[] = [
            {id:5, title:"Hello", price:11},
            {id:7, title:"World", price:22},
            {id:9, title:"NewWorld", price:885}
        ];

        return arr;
    }

}
