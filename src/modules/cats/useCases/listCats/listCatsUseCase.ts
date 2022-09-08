import { Inject, Injectable } from "@nestjs/common";
import { ICatsRepository } from "../../contracts/repositories/ICatsRepository";
// import { ITagModel } from "../../contracts/models/ITagModel";

@Injectable()
export class ListCatsUseCase {
    constructor(
        @Inject('CatsRepository')
        private catsRepository: ICatsRepository,
    ) { }

    public async execute(): Promise<string> {
        return 'my cats';
    }
}