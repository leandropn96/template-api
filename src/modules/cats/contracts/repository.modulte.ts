import { Module } from "@nestjs/common";
import { CatsRepository } from "../infra/typeorm/repositories/CatsRepository";

@Module({
    providers: [
        {
            provide: 'CatsRepository',
            inject: [CatsRepository],
            useClass: CatsRepository,
        }
    ],
    exports: [
        {
            provide: 'CatsRepository',
            inject: [CatsRepository],
            useClass: CatsRepository,
        }
    ],
})
export class RepositoriesModule { }