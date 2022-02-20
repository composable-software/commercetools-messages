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
} from '@commercetools/platform-sdk'

import productAddedToCategoryMessage from '../data/product/ProductAddedToCategoryMessage.json'
import productCreatedMessage from '../data/product/ProductCreatedMessage.json'
import productDeletedMessage from '../data/product/ProductDeletedMessage.json'
import productImageAddedMessage from '../data/product/ProductImageAddedMessage.json'
import productPublishedMessage from '../data/product/ProductPublishedMessage.json'
import productRemovedFromCategoryMessage from '../data/product/ProductRemovedFromCategoryMessage.json'
import productRevertedStagedChangesMessage from '../data/product/ProductRevertedStagedChangesMessage.json'
import productSlugChangedMessage from '../data/product/ProductSlugChangedMessage.json'
import productStateTransitionMessage from '../data/product/ProductStateTransitionMessage.json'
import productUnpublishedMessage from '../data/product/ProductUnpublishedMessage.json'
import productVariantAddedMessage from '../data/product/ProductVariantAddedMessage.json'
import productVariantDeletedMessage from '../data/product/ProductVariantDeletedMessage.json'

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
