import { ProductEntity } from "../../anterprise/entity/product"
import { RepositoryAbstract } from "../../shared/enterprise"

export abstract class ProductRepository extends RepositoryAbstract<ProductEntity> {}
