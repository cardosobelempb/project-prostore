import { ProductEntity } from '../../../../../../core/src/anterprise/entity/product';
import { UniqueEntityUUID } from '../../../../../../core/src/shared/enterprise';
// import { Product as EntityMapper, Prisma } from "@prisma/client"

// export class CategoryPrismaMapper {
// 	static toDomain(raw: EntityMapper): ProductEntity {
// 		return ProductEntity.create(
// 			{
// 				name: raw.name,
//                 brand: raw.brand,

// 				isActive: raw.isActive,
// 				createdAt: raw.createdAt,
// 				updatedAt: raw.updatedAt,
// 			},
// 			new UniqueEntityUUID(raw.id)
// 		)
// 	}

// 	static toPrisma(entity: ProductEntity): Prisma.CategoryUncheckedCreateInput {
// 		return {
// 			id: entity.id.toString(),
// 			name: entity.name,
// 			isActive: entity.isActive,
// 			createdAt: entity.createdAt,
// 			updatedAt: entity.updatedAt,
// 		}
// 	}
// }
