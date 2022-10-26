import { Builder } from 'builder-pattern'
import {
  ProductAddedToCategoryMessage,
  ProductCreatedMessage,
  ProductDeletedMessage,
  ProductImageAddedMessage,
  ProductPublishedMessage,
  ProductRemovedFromCategoryMessage,
  ProductRevertedStagedChangesMessage,
  ProductSlugChangedMessage,
  ProductStateTransitionMessage,
  ProductUnpublishedMessage,
  ProductVariantAddedMessage,
  ProductVariantDeletedMessage,
  ProductPriceDiscountsSetMessage,
} from '@commercetools/platform-sdk'

import productAddedToCategoryMessage from '../data/product/ProductAddedToCategory.json'
import productCreatedMessage from '../data/product/ProductCreated.json'
import productDeletedMessage from '../data/product/ProductDeleted.json'
import productImageAddedMessage from '../data/product/ProductImageAdded.json'
import productPublishedMessage from '../data/product/ProductPublished.json'
import productRemovedFromCategoryMessage from '../data/product/ProductRemovedFromCategory.json'
import productRevertedStagedChangesMessage from '../data/product/ProductRevertedStagedChanges.json'
import productSlugChangedMessage from '../data/product/ProductSlugChanged.json'
import productStateTransitionMessage from '../data/product/ProductStateTransition.json'
import productUnpublishedMessage from '../data/product/ProductUnpublished.json'
import productVariantAddedMessage from '../data/product/ProductVariantAdded.json'
import productVariantDeletedMessage from '../data/product/ProductVariantDeleted.json'
import productPriceDiscountsSetMessage from '../data/product/ProductPriceDiscountsSet.json'

export const ProductAddedToCategory = () => Builder<ProductAddedToCategoryMessage>(productAddedToCategoryMessage as ProductAddedToCategoryMessage)
export const ProductCreated = () => Builder<ProductCreatedMessage>(productCreatedMessage as ProductCreatedMessage)
export const ProductDeleted = () => Builder<ProductDeletedMessage>(productDeletedMessage as ProductDeletedMessage)
export const ProductImageAdded = () => Builder<ProductImageAddedMessage>(productImageAddedMessage as ProductImageAddedMessage)
export const ProductPublished = () => Builder<ProductPublishedMessage>(productPublishedMessage as ProductPublishedMessage)
export const ProductRemovedFromCategory = () => Builder<ProductRemovedFromCategoryMessage>(productRemovedFromCategoryMessage as ProductRemovedFromCategoryMessage)
export const ProductRevertedStagedChanges = () => Builder<ProductRevertedStagedChangesMessage>(productRevertedStagedChangesMessage as ProductRevertedStagedChangesMessage)
export const ProductSlugChanged = () => Builder<ProductSlugChangedMessage>(productSlugChangedMessage as ProductSlugChangedMessage)
export const ProductStateTransition = () => Builder<ProductStateTransitionMessage>(productStateTransitionMessage as ProductStateTransitionMessage)
export const ProductUnpublished = () => Builder<ProductUnpublishedMessage>(productUnpublishedMessage as ProductUnpublishedMessage)
export const ProductVariantAdded = () => Builder<ProductVariantAddedMessage>(productVariantAddedMessage as ProductVariantAddedMessage)
export const ProductVariantDeleted = () => Builder<ProductVariantDeletedMessage>(productVariantDeletedMessage as ProductVariantDeletedMessage)
export const ProductPriceDiscountsSet = () => Builder<ProductPriceDiscountsSetMessage>(productPriceDiscountsSetMessage as ProductPriceDiscountsSetMessage)
