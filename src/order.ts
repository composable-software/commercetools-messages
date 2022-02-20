import { Builder } from 'builder-pattern'
import {
  DeliveryAddedMessage,
  OrderCreatedMessage,
  OrderPaymentStateChangedMessage,
  OrderShipmentStateChangedMessage,
  OrderStateChangedMessage,
  OrderReturnInfoAddedMessage,
  LineItemStateTransitionMessage,
} from '@commercetools/platform-sdk'

import deliveryAddedMessage from '../data/order/DeliveryAddedMessage.json'
import orderCreatedMessage from '../data/order/OrderCreatedMessage.json'
import orderPaymentStateChangedMessage from '../data/order/OrderPaymentStateChangedMessage.json'
import orderShipmentStateChangedMessage from '../data/order/OrderShipmentStateChangedMessage.json'
import orderStateChangedMessage from '../data/order/OrderStateChangedMessage.json'
import returnInfoAddedMessage from '../data/order/ReturnInfoAddedMessage.json'
import lineItemStateTransitionMessage from '../data/order/LineItemStateTransitionMessage.json'

export const DeliveryAdded = () => Builder<DeliveryAddedMessage>(deliveryAddedMessage as DeliveryAddedMessage)
export const OrderCreated = () => Builder<OrderCreatedMessage>(orderCreatedMessage as OrderCreatedMessage)
export const OrderPaymentStateChanged = () => Builder<OrderPaymentStateChangedMessage>(orderPaymentStateChangedMessage as OrderPaymentStateChangedMessage)
export const OrderShipmentStateChanged = () => Builder<OrderShipmentStateChangedMessage>(orderShipmentStateChangedMessage as OrderShipmentStateChangedMessage)
export const OrderStateChanged = () => Builder<OrderStateChangedMessage>(orderStateChangedMessage as OrderStateChangedMessage)
export const OrderReturnInfoAdded = () => Builder<OrderReturnInfoAddedMessage>(returnInfoAddedMessage as OrderReturnInfoAddedMessage)
export const LineItemStateTransition = () => Builder<LineItemStateTransitionMessage>(lineItemStateTransitionMessage as LineItemStateTransitionMessage)
