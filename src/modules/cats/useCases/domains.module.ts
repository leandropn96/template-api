import { Module } from "@nestjs/common";
import { ListCatsUseCase } from './listCats/listCatsUseCase'
import { RepositoriesModule } from '../contracts/repository.modulte'

@Module({
    imports: [
        RepositoriesModule,
    ],
    providers: [
        ListCatsUseCase
    ],
    exports: [
        ListCatsUseCase
    ]
})
export class DomainsModule { }
