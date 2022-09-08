import { ICatsRepository } from 'src/modules/cats/contracts/repositories/ICatsRepository';
import { EntityRepository, getMongoRepository, MongoRepository } from 'typeorm';
import { Cats } from '../schemas/Cats';

@EntityRepository(Cats)
export class CatsRepository  implements ICatsRepository{
    private ormRepository: MongoRepository<Cats>;

    constructor() {
        this.ormRepository = getMongoRepository(Cats, 'mongo');
    }

    public async list(): Promise<Cats[]> {
        return await this.ormRepository.find();
    }
}