import { Builder } from 'builder-pattern'
import {
  ReturnInfoAddedMessage,
  ReturnInfoSetMessage,
  LineItemStateTransitionMessage,
  CustomLineItemStateTransitionMessage,
  DeliveryAddedMessage,
  DeliveryRemovedMessage,
  DeliveryItemsUpdatedMessage,
  DeliveryAddressSetMessage,
  ParcelAddedToDeliveryMessage,
  ParcelRemovedFromDeliveryMessage,
  ParcelTrackingDataUpdatedMessage,
  ParcelMeasurementsUpdatedMessage,
  ParcelItemsUpdatedMessage,
  OrderCreatedMessage,
  OrderImportedMessage,
  OrderPaymentStateChangedMessage,
  OrderShipmentStateChangedMessage,
  OrderStateChangedMessage,
  OrderStateTransitionMessage,
  OrderCustomerEmailSetMessage,
  OrderCustomerSetMessage,
  OrderCustomerGroupSetMessage,
  OrderShippingAddressSetMessage,
  OrderBillingAddressSetMessage,
  OrderReturnShipmentStateChangedMessage,
  OrderEditAppliedMessage,
  OrderCustomLineItemAddedMessage,
  OrderCustomLineItemRemovedMessage,
  OrderCustomLineItemQuantityChangedMessage,
  OrderLineItemAddedMessage,
  OrderLineItemRemovedMessage,
  OrderLineItemDistributionChannelSetMessage,
  OrderShippingInfoSetMessage,
  OrderShippingRateInputSetMessage,
  OrderDiscountCodeAddedMessage,
  OrderDiscountCodeRemovedMessage,
  OrderDiscountCodeStateSetMessage,
  OrderLineItemDiscountSetMessage,
  OrderCustomLineItemDiscountSetMessage,
  OrderStoreSetMessage,
  OrderDeletedMessage,
} from '@commercetools/platform-sdk'

import returnInfoAddedMessage from '../data/order/ReturnInfoAdded.json'
import returnInfoSetMessage from '../data/order/ReturnInfoSet.json'
import lineItemStateTransitionMessage from '../data/order/LineItemStateTransition.json'
import customLineItemStateTransitionMessage from '../data/order/CustomLineItemStateTransition.json'
import deliveryAddedMessage from '../data/order/DeliveryAdded.json'
import deliveryRemovedMessage from '../data/order/DeliveryRemoved.json'
import deliveryItemsUpdatedMessage from '../data/order/DeliveryItemsUpdated.json'
import deliveryAddressSetMessage from '../data/order/DeliveryAddressSet.json'
import parcelAddedToDeliveryMessage from '../data/order/ParcelAddedToDelivery.json'
import parcelRemovedFromDeliveryMessage from '../data/order/ParcelRemovedFromDelivery.json'
import parcelTrackingDataUpdatedMessage from '../data/order/ParcelTrackingDataUpdated.json'
import parcelMeasurementsUpdatedMessage from '../data/order/ParcelMeasurementsUpdated.json'
import parcelItemsUpdatedMessage from '../data/order/ParcelItemsUpdated.json'
import orderCreatedMessage from '../data/order/OrderCreated.json'
import orderImportedMessage from '../data/order/OrderImported.json'
import orderPaymentStateChangedMessage from '../data/order/OrderPaymentStateChanged.json'
import orderShipmentStateChangedMessage from '../data/order/OrderShipmentStateChanged.json'
import orderStateChangedMessage from '../data/order/OrderStateChanged.json'
import orderStateTransitionMessage from '../data/order/OrderStateTransition.json'
import orderCustomerEmailSetMessage from '../data/order/OrderCustomerEmailSet.json'
import orderCustomerSetMessage from '../data/order/OrderCustomerSet.json'
import orderCustomerGroupSetMessage from '../data/order/OrderCustomerGroupSet.json'
import orderShippingAddressSetMessage from '../data/order/OrderShippingAddressSet.json'
import orderBillingAddressSetMessage from '../data/order/OrderBillingAddressSet.json'
import orderReturnShipmentStateChangedMessage from '../data/order/OrderReturnShipmentStateChanged.json'
import orderEditAppliedMessage from '../data/order/OrderEditApplied.json'
import orderCustomLineItemAddedMessage from '../data/order/OrderCustomLineItemAdded.json'
import orderCustomLineItemRemovedMessage from '../data/order/OrderCustomLineItemRemoved.json'
import orderCustomLineItemQuantityChangedMessage from '../data/order/OrderCustomLineItemQuantityChanged.json'
import orderLineItemAddedMessage from '../data/order/OrderLineItemAdded.json'
import orderLineItemRemovedMessage from '../data/order/OrderLineItemRemoved.json'
import orderLineItemDistributionChannelSetMessage from '../data/order/OrderLineItemDistributionChannelSet.json'
import orderShippingInfoSetMessage from '../data/order/OrderShippingInfoSet.json'
import orderShippingRateInputSetMessage from '../data/order/OrderShippingRateInputSet.json'
import orderDiscountCodeAddedMessage from '../data/order/OrderDiscountCodeAdded.json'
import orderDiscountCodeRemovedMessage from '../data/order/OrderDiscountCodeRemoved.json'
import orderDiscountCodeStateSetMessage from '../data/order/OrderDiscountCodeStateSet.json'
import orderLineItemDiscountSetMessage from '../data/order/OrderLineItemDiscountSet.json'
import orderCustomLineItemDiscountSetMessage from '../data/order/OrderCustomLineItemDiscountSet.json'
import orderStoreSetMessage from '../data/order/OrderStoreSet.json'
import orderDeletedMessage from '../data/order/OrderDeleted.json'

export const ReturnInfoAdded = () => Builder<ReturnInfoAddedMessage>(returnInfoAddedMessage as ReturnInfoAddedMessage)
export const ReturnInfoSet = () => Builder<ReturnInfoSetMessage>(returnInfoSetMessage as ReturnInfoSetMessage)
export const LineItemStateTransition = () => Builder<LineItemStateTransitionMessage>(lineItemStateTransitionMessage as LineItemStateTransitionMessage)
export const CustomLineItemStateTransition = () => Builder<CustomLineItemStateTransitionMessage>(customLineItemStateTransitionMessage as CustomLineItemStateTransitionMessage)
export const DeliveryAdded = () => Builder<DeliveryAddedMessage>(deliveryAddedMessage as DeliveryAddedMessage)
export const DeliveryRemoved = () => Builder<DeliveryRemovedMessage>(deliveryRemovedMessage as DeliveryRemovedMessage)
export const DeliveryItemsUpdated = () => Builder<DeliveryItemsUpdatedMessage>(deliveryItemsUpdatedMessage as DeliveryItemsUpdatedMessage)
export const DeliveryAddressSet = () => Builder<DeliveryAddressSetMessage>(deliveryAddressSetMessage as DeliveryAddressSetMessage)
export const ParcelAddedToDelivery = () => Builder<ParcelAddedToDeliveryMessage>(parcelAddedToDeliveryMessage as ParcelAddedToDeliveryMessage)
export const ParcelRemovedFromDelivery = () => Builder<ParcelRemovedFromDeliveryMessage>(parcelRemovedFromDeliveryMessage as ParcelRemovedFromDeliveryMessage)
export const ParcelTrackingDataUpdated = () => Builder<ParcelTrackingDataUpdatedMessage>(parcelTrackingDataUpdatedMessage as ParcelTrackingDataUpdatedMessage)
export const ParcelMeasurementsUpdated = () => Builder<ParcelMeasurementsUpdatedMessage>(parcelMeasurementsUpdatedMessage as ParcelMeasurementsUpdatedMessage)
export const ParcelItemsUpdated = () => Builder<ParcelItemsUpdatedMessage>(parcelItemsUpdatedMessage as ParcelItemsUpdatedMessage)
export const OrderCreated = () => Builder<OrderCreatedMessage>(orderCreatedMessage as OrderCreatedMessage)
export const OrderImported = () => Builder<OrderImportedMessage>(orderImportedMessage as OrderImportedMessage)
export const OrderPaymentStateChanged = () => Builder<OrderPaymentStateChangedMessage>(orderPaymentStateChangedMessage as OrderPaymentStateChangedMessage)
export const OrderShipmentStateChanged = () => Builder<OrderShipmentStateChangedMessage>(orderShipmentStateChangedMessage as OrderShipmentStateChangedMessage)
export const OrderStateChanged = () => Builder<OrderStateChangedMessage>(orderStateChangedMessage as OrderStateChangedMessage)
export const OrderStateTransition = () => Builder<OrderStateTransitionMessage>(orderStateTransitionMessage as OrderStateTransitionMessage)
export const OrderCustomerEmailSet = () => Builder<OrderCustomerEmailSetMessage>(orderCustomerEmailSetMessage as OrderCustomerEmailSetMessage)
export const OrderCustomerSet = () => Builder<OrderCustomerSetMessage>(orderCustomerSetMessage as OrderCustomerSetMessage)
export const OrderCustomerGroupSet = () => Builder<OrderCustomerGroupSetMessage>(orderCustomerGroupSetMessage as OrderCustomerGroupSetMessage)
export const OrderShippingAddressSet = () => Builder<OrderShippingAddressSetMessage>(orderShippingAddressSetMessage as OrderShippingAddressSetMessage)
export const OrderBillingAddressSet = () => Builder<OrderBillingAddressSetMessage>(orderBillingAddressSetMessage as OrderBillingAddressSetMessage)
export const OrderReturnShipmentStateChanged = () => Builder<OrderReturnShipmentStateChangedMessage>(orderReturnShipmentStateChangedMessage as OrderReturnShipmentStateChangedMessage)
export const OrderEditApplied = () => Builder<OrderEditAppliedMessage>(orderEditAppliedMessage as OrderEditAppliedMessage)
export const OrderCustomLineItemAdded = () => Builder<OrderCustomLineItemAddedMessage>(orderCustomLineItemAddedMessage as OrderCustomLineItemAddedMessage)
export const OrderCustomLineItemRemoved = () => Builder<OrderCustomLineItemRemovedMessage>(orderCustomLineItemRemovedMessage as OrderCustomLineItemRemovedMessage)
export const OrderCustomLineItemQuantityChanged = () => Builder<OrderCustomLineItemQuantityChangedMessage>(orderCustomLineItemQuantityChangedMessage as OrderCustomLineItemQuantityChangedMessage)
export const OrderLineItemAdded = () => Builder<OrderLineItemAddedMessage>(orderLineItemAddedMessage as OrderLineItemAddedMessage)
export const OrderLineItemRemoved = () => Builder<OrderLineItemRemovedMessage>(orderLineItemRemovedMessage as OrderLineItemRemovedMessage)
export const OrderLineItemDistributionChannelSet = () => Builder<OrderLineItemDistributionChannelSetMessage>(orderLineItemDistributionChannelSetMessage as OrderLineItemDistributionChannelSetMessage)
export const OrderShippingInfoSet = () => Builder<OrderShippingInfoSetMessage>(orderShippingInfoSetMessage as OrderShippingInfoSetMessage)
export const OrderShippingRateInputSet = () => Builder<OrderShippingRateInputSetMessage>(orderShippingRateInputSetMessage as OrderShippingRateInputSetMessage)
export const OrderDiscountCodeAdded = () => Builder<OrderDiscountCodeAddedMessage>(orderDiscountCodeAddedMessage as OrderDiscountCodeAddedMessage)
export const OrderDiscountCodeRemoved = () => Builder<OrderDiscountCodeRemovedMessage>(orderDiscountCodeRemovedMessage as OrderDiscountCodeRemovedMessage)
export const OrderDiscountCodeStateSet = () => Builder<OrderDiscountCodeStateSetMessage>(orderDiscountCodeStateSetMessage as OrderDiscountCodeStateSetMessage)
export const OrderLineItemDiscountSet = () => Builder<OrderLineItemDiscountSetMessage>(orderLineItemDiscountSetMessage as OrderLineItemDiscountSetMessage)
export const OrderCustomLineItemDiscountSet = () => Builder<OrderCustomLineItemDiscountSetMessage>(orderCustomLineItemDiscountSetMessage as OrderCustomLineItemDiscountSetMessage)
export const OrderStoreSet = () => Builder<OrderStoreSetMessage>(orderStoreSetMessage as OrderStoreSetMessage)
export const OrderDeleted = () => Builder<OrderDeletedMessage>(orderDeletedMessage as OrderDeletedMessage)
