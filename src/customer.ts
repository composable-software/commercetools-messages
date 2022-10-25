import { Builder } from 'builder-pattern'
import {
  CustomerAddressAddedMessage,
  CustomerAddressChangedMessage,
  CustomerAddressRemovedMessage,
  CustomerCompanyNameSetMessage,
  CustomerCreatedMessage,
  CustomerDateOfBirthSetMessage,
  CustomerDeletedMessage,
  CustomerEmailChangedMessage,
  CustomerEmailVerifiedMessage,
  CustomerFirstNameSetMessage,
  CustomerGroupSetMessage,
  CustomerLastNameSetMessage,
  CustomerPasswordUpdatedMessage,
  CustomerTitleSetMessage,
} from '@commercetools/platform-sdk'

import customerAddressAddedMessage from '../data/customer/CustomerAddressAdded.json'
import customerAddressChangedMessage from '../data/customer/CustomerAddressChanged.json'
import customerAddressRemovedMessage from '../data/customer/CustomerAddressRemoved.json'
import customerCompanyNameSetMessage from '../data/customer/CustomerCompanyNameSet.json'
import customerCreatedMessage from '../data/customer/CustomerCreated.json'
import customerDateOfBirthSetMessage from '../data/customer/CustomerDateOfBirthSet.json'
import customerDeletedMessage from '../data/customer/CustomerDeleted.json'
import customerEmailChangedMessage from '../data/customer/CustomerEmailChanged.json'
import customerEmailVerifiedMessage from '../data/customer/CustomerEmailVerified.json'
import customerFirstNameSetMessage from '../data/customer/CustomerFirstNameSet.json'
import customerGroupSetMessage from '../data/customer/CustomerGroupSet.json'
import customerLastNameSetMessage from '../data/customer/CustomerLastNameSet.json'
import customerPasswordUpdatedMessage from '../data/customer/CustomerPasswordUpdated.json'
import customerTitleSetMessage from '../data/customer/CustomerTitleSet.json'

export const CustomerAddressAdded = () => Builder<CustomerAddressAddedMessage>(customerAddressAddedMessage as CustomerAddressAddedMessage)
export const CustomerAddressChanged = () => Builder<CustomerAddressChangedMessage>(customerAddressChangedMessage as CustomerAddressChangedMessage)
export const CustomerAddressRemoved = () => Builder<CustomerAddressRemovedMessage>(customerAddressRemovedMessage as CustomerAddressRemovedMessage)
export const CustomerCompanyNameSet = () => Builder<CustomerCompanyNameSetMessage>(customerCompanyNameSetMessage as CustomerCompanyNameSetMessage)
export const CustomerCreated = () => Builder<CustomerCreatedMessage>(customerCreatedMessage as CustomerCreatedMessage)
export const CustomerDateOfBirthSet = () => Builder<CustomerDateOfBirthSetMessage>(customerDateOfBirthSetMessage as CustomerDateOfBirthSetMessage)
export const CustomerEmailChanged = () => Builder<CustomerEmailChangedMessage>(customerEmailChangedMessage as CustomerEmailChangedMessage)
export const CustomerEmailVerified = () => Builder<CustomerEmailVerifiedMessage>(customerEmailVerifiedMessage as CustomerEmailVerifiedMessage)
export const CustomerFirstNameSet = () => Builder<CustomerFirstNameSetMessage>(customerFirstNameSetMessage as CustomerFirstNameSetMessage)
export const CustomerGroupSet = () => Builder<CustomerGroupSetMessage>(customerGroupSetMessage as CustomerGroupSetMessage)
export const CustomerLastNameSet = () => Builder<CustomerLastNameSetMessage>(customerLastNameSetMessage as CustomerLastNameSetMessage)
export const CustomerPasswordUpdated = () => Builder<CustomerPasswordUpdatedMessage>(customerPasswordUpdatedMessage as CustomerPasswordUpdatedMessage)
export const CustomerDeleted = () => Builder<CustomerDeletedMessage>(customerDeletedMessage as CustomerDeletedMessage)
export const CustomerTitleSet = () => Builder<CustomerTitleSetMessage>(customerTitleSetMessage as CustomerTitleSetMessage)
