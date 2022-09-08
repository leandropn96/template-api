import { Cats } from "../../infra/typeorm/schemas/Cats";

export interface ICatsRepository {
   list(): Promise<Cats[]>
}
