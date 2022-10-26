import { Builder } from 'builder-pattern'
import {
  CategoryCreatedMessage,
  CategorySlugChangedMessage,
} from '@commercetools/platform-sdk'

import categoryCreatedMessage from '../data/category/CategoryCreated.json'
import categorySlugChangedMessage from '../data/category/CategorySlugChanged.json'

export const CategoryCreated = () => Builder<CategoryCreatedMessage>(categoryCreatedMessage as CategoryCreatedMessage)
export const CategorySlugChanged = () => Builder<CategorySlugChangedMessage>(categorySlugChangedMessage as CategorySlugChangedMessage)
