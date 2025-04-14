import { ProductEntity } from "../../anterprise/entity/product"
import { RepositoryAbstract } from "../../shared/enterprise/repository/repository.abstract"

export abstract class ProductRepository extends RepositoryAbstract<ProductEntity> {}
