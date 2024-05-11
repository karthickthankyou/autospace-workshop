import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
    }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any }
}

export type Address = {
  __typename?: 'Address'
  address: Scalars['String']['output']
  createdAt: Scalars['DateTime']['output']
  garage?: Maybe<Garage>
  garageId?: Maybe<Scalars['Int']['output']>
  id: Scalars['Int']['output']
  lat: Scalars['Int']['output']
  lng: Scalars['Int']['output']
  updatedAt: Scalars['DateTime']['output']
}

export type AddressOrderByWithRelationInput = {
  Garage?: InputMaybe<GarageOrderByWithRelationInput>
  address?: InputMaybe<SortOrder>
  createdAt?: InputMaybe<SortOrder>
  garageId?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  lat?: InputMaybe<SortOrder>
  lng?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export type AddressRelationFilter = {
  is?: InputMaybe<AddressWhereInput>
  isNot?: InputMaybe<AddressWhereInput>
}

export enum AddressScalarFieldEnum {
  Address = 'address',
  CreatedAt = 'createdAt',
  GarageId = 'garageId',
  Id = 'id',
  Lat = 'lat',
  Lng = 'lng',
  UpdatedAt = 'updatedAt',
}

export type AddressWhereInput = {
  AND?: InputMaybe<Array<AddressWhereInput>>
  Garage?: InputMaybe<GarageRelationFilter>
  NOT?: InputMaybe<Array<AddressWhereInput>>
  OR?: InputMaybe<Array<AddressWhereInput>>
  address?: InputMaybe<StringFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  garageId?: InputMaybe<IntFilter>
  id?: InputMaybe<IntFilter>
  lat?: InputMaybe<FloatFilter>
  lng?: InputMaybe<FloatFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type AddressWhereUniqueInput = {
  id: Scalars['Int']['input']
}

export type Admin = {
  __typename?: 'Admin'
  createdAt: Scalars['DateTime']['output']
  uid: Scalars['String']['output']
  updatedAt: Scalars['DateTime']['output']
  user?: Maybe<User>
  verifications: Array<Verification>
  verificationsCount: Scalars['Int']['output']
}

export type AdminOrderByWithRelationInput = {
  User?: InputMaybe<UserOrderByWithRelationInput>
  Verifications?: InputMaybe<VerificationOrderByRelationAggregateInput>
  createdAt?: InputMaybe<SortOrder>
  uid?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export type AdminRelationFilter = {
  is?: InputMaybe<AdminWhereInput>
  isNot?: InputMaybe<AdminWhereInput>
}

export enum AdminScalarFieldEnum {
  CreatedAt = 'createdAt',
  Uid = 'uid',
  UpdatedAt = 'updatedAt',
}

export type AdminWhereInput = {
  AND?: InputMaybe<Array<AdminWhereInput>>
  NOT?: InputMaybe<Array<AdminWhereInput>>
  OR?: InputMaybe<Array<AdminWhereInput>>
  User?: InputMaybe<UserRelationFilter>
  Verifications?: InputMaybe<VerificationListRelationFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  uid?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type AdminWhereUniqueInput = {
  uid: Scalars['String']['input']
}

export type AuthProvider = {
  __typename?: 'AuthProvider'
  type: AuthProviderType
  uid: Scalars['String']['output']
}

export enum AuthProviderType {
  Credentials = 'CREDENTIALS',
  Google = 'GOOGLE',
}

export type Booking = {
  __typename?: 'Booking'
  createdAt: Scalars['DateTime']['output']
  customer: Customer
  customerId: Scalars['String']['output']
  endTime: Scalars['DateTime']['output']
  id: Scalars['Int']['output']
  passcode?: Maybe<Scalars['String']['output']>
  phoneNumber?: Maybe<Scalars['String']['output']>
  pricePerHour?: Maybe<Scalars['Int']['output']>
  slot: Slot
  slotId: Scalars['Int']['output']
  startTime: Scalars['DateTime']['output']
  status: BookingStatus
  totalPrice?: Maybe<Scalars['Int']['output']>
  updatedAt: Scalars['DateTime']['output']
  valetAssignment?: Maybe<ValetAssignment>
  vehicleNumber: Scalars['String']['output']
}

export type BookingListRelationFilter = {
  every?: InputMaybe<BookingWhereInput>
  none?: InputMaybe<BookingWhereInput>
  some?: InputMaybe<BookingWhereInput>
}

export type BookingOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type BookingOrderByWithRelationInput = {
  BookingTimeline?: InputMaybe<BookingTimelineOrderByRelationAggregateInput>
  Customer?: InputMaybe<CustomerOrderByWithRelationInput>
  Slot?: InputMaybe<SlotOrderByWithRelationInput>
  ValetAssignment?: InputMaybe<ValetAssignmentOrderByWithRelationInput>
  createdAt?: InputMaybe<SortOrder>
  customerId?: InputMaybe<SortOrder>
  endTime?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  passcode?: InputMaybe<SortOrder>
  phoneNumber?: InputMaybe<SortOrder>
  pricePerHour?: InputMaybe<SortOrder>
  slotId?: InputMaybe<SortOrder>
  startTime?: InputMaybe<SortOrder>
  status?: InputMaybe<SortOrder>
  totalPrice?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
  vehicleNumber?: InputMaybe<SortOrder>
}

export type BookingRelationFilter = {
  is?: InputMaybe<BookingWhereInput>
  isNot?: InputMaybe<BookingWhereInput>
}

export enum BookingScalarFieldEnum {
  CreatedAt = 'createdAt',
  CustomerId = 'customerId',
  EndTime = 'endTime',
  Id = 'id',
  Passcode = 'passcode',
  PhoneNumber = 'phoneNumber',
  PricePerHour = 'pricePerHour',
  SlotId = 'slotId',
  StartTime = 'startTime',
  Status = 'status',
  TotalPrice = 'totalPrice',
  UpdatedAt = 'updatedAt',
  VehicleNumber = 'vehicleNumber',
}

export enum BookingStatus {
  Booked = 'BOOKED',
  CheckedIn = 'CHECKED_IN',
  CheckedOut = 'CHECKED_OUT',
  ValetAssignedForCheckIn = 'VALET_ASSIGNED_FOR_CHECK_IN',
  ValetAssignedForCheckOut = 'VALET_ASSIGNED_FOR_CHECK_OUT',
  ValetPickedUp = 'VALET_PICKED_UP',
  ValetReturned = 'VALET_RETURNED',
}

export type BookingTimeline = {
  __typename?: 'BookingTimeline'
  bookingId: Scalars['Int']['output']
  id: Scalars['Int']['output']
  managerId?: Maybe<Scalars['String']['output']>
  status: BookingStatus
  timestamp: Scalars['DateTime']['output']
  valetId?: Maybe<Scalars['String']['output']>
}

export type BookingTimelineListRelationFilter = {
  every?: InputMaybe<BookingTimelineWhereInput>
  none?: InputMaybe<BookingTimelineWhereInput>
  some?: InputMaybe<BookingTimelineWhereInput>
}

export type BookingTimelineOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type BookingTimelineOrderByWithRelationInput = {
  Booking?: InputMaybe<BookingOrderByWithRelationInput>
  Manager?: InputMaybe<ManagerOrderByWithRelationInput>
  Valet?: InputMaybe<ValetOrderByWithRelationInput>
  bookingId?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  managerId?: InputMaybe<SortOrder>
  status?: InputMaybe<SortOrder>
  timestamp?: InputMaybe<SortOrder>
  valetId?: InputMaybe<SortOrder>
}

export enum BookingTimelineScalarFieldEnum {
  BookingId = 'bookingId',
  Id = 'id',
  ManagerId = 'managerId',
  Status = 'status',
  Timestamp = 'timestamp',
  ValetId = 'valetId',
}

export type BookingTimelineWhereInput = {
  AND?: InputMaybe<Array<BookingTimelineWhereInput>>
  Booking?: InputMaybe<BookingRelationFilter>
  Manager?: InputMaybe<ManagerRelationFilter>
  NOT?: InputMaybe<Array<BookingTimelineWhereInput>>
  OR?: InputMaybe<Array<BookingTimelineWhereInput>>
  Valet?: InputMaybe<ValetRelationFilter>
  bookingId?: InputMaybe<IntFilter>
  id?: InputMaybe<IntFilter>
  managerId?: InputMaybe<StringFilter>
  status?: InputMaybe<BookingStatus>
  timestamp?: InputMaybe<DateTimeFilter>
  valetId?: InputMaybe<StringFilter>
}

export type BookingTimelineWhereUniqueInput = {
  id: Scalars['Int']['input']
}

export type BookingWhereInput = {
  AND?: InputMaybe<Array<BookingWhereInput>>
  BookingTimeline?: InputMaybe<BookingTimelineListRelationFilter>
  Customer?: InputMaybe<CustomerRelationFilter>
  NOT?: InputMaybe<Array<BookingWhereInput>>
  OR?: InputMaybe<Array<BookingWhereInput>>
  Slot?: InputMaybe<SlotRelationFilter>
  ValetAssignment?: InputMaybe<ValetAssignmentRelationFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  customerId?: InputMaybe<StringFilter>
  endTime?: InputMaybe<DateTimeFilter>
  id?: InputMaybe<IntFilter>
  passcode?: InputMaybe<StringFilter>
  phoneNumber?: InputMaybe<StringFilter>
  pricePerHour?: InputMaybe<FloatFilter>
  slotId?: InputMaybe<IntFilter>
  startTime?: InputMaybe<DateTimeFilter>
  status?: InputMaybe<BookingStatus>
  totalPrice?: InputMaybe<FloatFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
  vehicleNumber?: InputMaybe<StringFilter>
}

export type BookingWhereUniqueInput = {
  id: Scalars['Int']['input']
}

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>
  not?: InputMaybe<Scalars['Boolean']['input']>
}

export type Company = {
  __typename?: 'Company'
  createdAt: Scalars['DateTime']['output']
  description?: Maybe<Scalars['String']['output']>
  displayName?: Maybe<Scalars['String']['output']>
  garages: Array<Garage>
  id: Scalars['Int']['output']
  managers: Array<Manager>
  updatedAt: Scalars['DateTime']['output']
}

export type CompanyOrderByWithRelationInput = {
  Garages?: InputMaybe<GarageOrderByRelationAggregateInput>
  Managers?: InputMaybe<ManagerOrderByRelationAggregateInput>
  Valets?: InputMaybe<ValetOrderByRelationAggregateInput>
  createdAt?: InputMaybe<SortOrder>
  description?: InputMaybe<SortOrder>
  displayName?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export type CompanyRelationFilter = {
  is?: InputMaybe<CompanyWhereInput>
  isNot?: InputMaybe<CompanyWhereInput>
}

export enum CompanyScalarFieldEnum {
  CreatedAt = 'createdAt',
  Description = 'description',
  DisplayName = 'displayName',
  Id = 'id',
  UpdatedAt = 'updatedAt',
}

export type CompanyWhereInput = {
  AND?: InputMaybe<Array<CompanyWhereInput>>
  Garages?: InputMaybe<GarageListRelationFilter>
  Managers?: InputMaybe<ManagerListRelationFilter>
  NOT?: InputMaybe<Array<CompanyWhereInput>>
  OR?: InputMaybe<Array<CompanyWhereInput>>
  Valets?: InputMaybe<ValetListRelationFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  description?: InputMaybe<StringFilter>
  displayName?: InputMaybe<StringFilter>
  id?: InputMaybe<IntFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type CompanyWhereUniqueInput = {
  id: Scalars['Int']['input']
}

export type CreateAddressInput = {
  address: Scalars['String']['input']
  garageId?: InputMaybe<Scalars['Int']['input']>
  lat: Scalars['Int']['input']
  lng: Scalars['Int']['input']
}

export type CreateAdminInput = {
  uid: Scalars['String']['input']
}

export type CreateBookingInput = {
  customerId: Scalars['String']['input']
  endTime: Scalars['DateTime']['input']
  passcode?: InputMaybe<Scalars['String']['input']>
  phoneNumber?: InputMaybe<Scalars['String']['input']>
  pricePerHour?: InputMaybe<Scalars['Int']['input']>
  slotId: Scalars['Int']['input']
  startTime: Scalars['DateTime']['input']
  status: BookingStatus
  totalPrice?: InputMaybe<Scalars['Int']['input']>
  vehicleNumber: Scalars['String']['input']
}

export type CreateBookingTimelineInput = {
  bookingId: Scalars['Int']['input']
  managerId?: InputMaybe<Scalars['String']['input']>
  status: BookingStatus
  timestamp: Scalars['DateTime']['input']
  valetId?: InputMaybe<Scalars['String']['input']>
}

export type CreateCompanyInput = {
  description?: InputMaybe<Scalars['String']['input']>
  displayName?: InputMaybe<Scalars['String']['input']>
  managerId: Scalars['String']['input']
}

export type CreateCustomerInput = {
  displayName?: InputMaybe<Scalars['String']['input']>
  uid: Scalars['String']['input']
}

export type CreateGarageInput = {
  companyId: Scalars['Int']['input']
  description?: InputMaybe<Scalars['String']['input']>
  displayName?: InputMaybe<Scalars['String']['input']>
  images: Array<Scalars['String']['input']>
}

export type CreateManagerInput = {
  displayName?: InputMaybe<Scalars['String']['input']>
  uid: Scalars['String']['input']
}

export type CreateReviewInput = {
  comment?: InputMaybe<Scalars['String']['input']>
  customerId: Scalars['String']['input']
  garageId: Scalars['Int']['input']
  rating: Scalars['Int']['input']
}

export type CreateSlotInput = {
  displayName?: InputMaybe<Scalars['String']['input']>
  garageId: Scalars['Int']['input']
  height?: InputMaybe<Scalars['Int']['input']>
  length?: InputMaybe<Scalars['Int']['input']>
  pricePerHour: Scalars['Int']['input']
  type: SlotType
  width?: InputMaybe<Scalars['Int']['input']>
}

export type CreateValetAssignmentInput = {
  bookingId: Scalars['Int']['input']
  pickupLat: Scalars['Int']['input']
  pickupLng: Scalars['Int']['input']
  pickupValetId: Scalars['String']['input']
  returnLat?: InputMaybe<Scalars['Int']['input']>
  returnLng?: InputMaybe<Scalars['Int']['input']>
  returnValetId: Scalars['String']['input']
}

export type CreateValetInput = {
  companyId?: InputMaybe<Scalars['Int']['input']>
  displayName: Scalars['String']['input']
  image?: InputMaybe<Scalars['String']['input']>
  licenceID: Scalars['String']['input']
  uid: Scalars['String']['input']
}

export type CreateVerificationInput = {
  adminId: Scalars['String']['input']
  garageId: Scalars['Int']['input']
  verified: Scalars['Boolean']['input']
}

export type Customer = {
  __typename?: 'Customer'
  bookings: Array<Booking>
  createdAt: Scalars['DateTime']['output']
  displayName?: Maybe<Scalars['String']['output']>
  uid: Scalars['String']['output']
  updatedAt: Scalars['DateTime']['output']
  user?: Maybe<User>
}

export type CustomerOrderByWithRelationInput = {
  Bookings?: InputMaybe<BookingOrderByRelationAggregateInput>
  Reviews?: InputMaybe<ReviewOrderByRelationAggregateInput>
  User?: InputMaybe<UserOrderByWithRelationInput>
  createdAt?: InputMaybe<SortOrder>
  displayName?: InputMaybe<SortOrder>
  uid?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export type CustomerRelationFilter = {
  is?: InputMaybe<CustomerWhereInput>
  isNot?: InputMaybe<CustomerWhereInput>
}

export enum CustomerScalarFieldEnum {
  CreatedAt = 'createdAt',
  DisplayName = 'displayName',
  Uid = 'uid',
  UpdatedAt = 'updatedAt',
}

export type CustomerWhereInput = {
  AND?: InputMaybe<Array<CustomerWhereInput>>
  Bookings?: InputMaybe<BookingListRelationFilter>
  NOT?: InputMaybe<Array<CustomerWhereInput>>
  OR?: InputMaybe<Array<CustomerWhereInput>>
  Reviews?: InputMaybe<ReviewListRelationFilter>
  User?: InputMaybe<UserRelationFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  displayName?: InputMaybe<StringFilter>
  uid?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type CustomerWhereUniqueInput = {
  uid: Scalars['String']['input']
}

export type DateFilterInput = {
  end: Scalars['String']['input']
  start: Scalars['String']['input']
}

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  in?: InputMaybe<Array<Scalars['String']['input']>>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  notIn?: InputMaybe<Array<Scalars['String']['input']>>
}

export type EnumSlotTypeFilter = {
  equals?: InputMaybe<SlotType>
  in?: InputMaybe<Array<SlotType>>
  not?: InputMaybe<SlotType>
  notIn?: InputMaybe<Array<SlotType>>
}

export type FloatFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>
  gt?: InputMaybe<Scalars['Int']['input']>
  gte?: InputMaybe<Scalars['Int']['input']>
  lt?: InputMaybe<Scalars['Int']['input']>
  lte?: InputMaybe<Scalars['Int']['input']>
  not?: InputMaybe<Scalars['Int']['input']>
}

export type Garage = {
  __typename?: 'Garage'
  address?: Maybe<Address>
  availableSlots: Array<MinimalSlotGroupBy>
  company: Company
  companyId: Scalars['Int']['output']
  createdAt: Scalars['DateTime']['output']
  description?: Maybe<Scalars['String']['output']>
  displayName?: Maybe<Scalars['String']['output']>
  id: Scalars['Int']['output']
  images: Array<Scalars['String']['output']>
  slots: Array<Slot>
  updatedAt: Scalars['DateTime']['output']
  verification?: Maybe<Verification>
}

export type GarageAvailableSlotsArgs = {
  dateFilter: DateFilterInput
  slotsFilter?: InputMaybe<SlotWhereInput>
}

export type GarageFilter = {
  orderBy?: InputMaybe<Array<GarageOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<GarageWhereInput>
}

export type GarageListRelationFilter = {
  every?: InputMaybe<GarageWhereInput>
  none?: InputMaybe<GarageWhereInput>
  some?: InputMaybe<GarageWhereInput>
}

export type GarageOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type GarageOrderByWithRelationInput = {
  Address?: InputMaybe<AddressOrderByWithRelationInput>
  Company?: InputMaybe<CompanyOrderByWithRelationInput>
  Reviews?: InputMaybe<ReviewOrderByRelationAggregateInput>
  Slots?: InputMaybe<SlotOrderByRelationAggregateInput>
  Verification?: InputMaybe<VerificationOrderByWithRelationInput>
  companyId?: InputMaybe<SortOrder>
  createdAt?: InputMaybe<SortOrder>
  description?: InputMaybe<SortOrder>
  displayName?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  images?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export type GarageRelationFilter = {
  is?: InputMaybe<GarageWhereInput>
  isNot?: InputMaybe<GarageWhereInput>
}

export enum GarageScalarFieldEnum {
  CompanyId = 'companyId',
  CreatedAt = 'createdAt',
  Description = 'description',
  DisplayName = 'displayName',
  Id = 'id',
  Images = 'images',
  UpdatedAt = 'updatedAt',
}

export type GarageWhereInput = {
  AND?: InputMaybe<Array<GarageWhereInput>>
  Address?: InputMaybe<AddressRelationFilter>
  Company?: InputMaybe<CompanyRelationFilter>
  NOT?: InputMaybe<Array<GarageWhereInput>>
  OR?: InputMaybe<Array<GarageWhereInput>>
  Reviews?: InputMaybe<ReviewListRelationFilter>
  Slots?: InputMaybe<SlotListRelationFilter>
  Verification?: InputMaybe<VerificationRelationFilter>
  companyId?: InputMaybe<IntFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  description?: InputMaybe<StringFilter>
  displayName?: InputMaybe<StringFilter>
  id?: InputMaybe<IntFilter>
  images?: InputMaybe<StringListFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type GarageWhereUniqueInput = {
  id: Scalars['Int']['input']
}

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>
  gt?: InputMaybe<Scalars['Int']['input']>
  gte?: InputMaybe<Scalars['Int']['input']>
  lt?: InputMaybe<Scalars['Int']['input']>
  lte?: InputMaybe<Scalars['Int']['input']>
}

export type LocationFilterInput = {
  ne_lat: Scalars['Float']['input']
  ne_lng: Scalars['Float']['input']
  sw_lat: Scalars['Float']['input']
  sw_lng: Scalars['Float']['input']
}

export type LoginInput = {
  email: Scalars['String']['input']
  password: Scalars['String']['input']
}

export type LoginOutput = {
  __typename?: 'LoginOutput'
  token: Scalars['String']['output']
  user: User
}

export type Manager = {
  __typename?: 'Manager'
  company?: Maybe<Company>
  companyId: Scalars['Int']['output']
  createdAt: Scalars['DateTime']['output']
  displayName?: Maybe<Scalars['String']['output']>
  uid: Scalars['String']['output']
  updatedAt: Scalars['DateTime']['output']
}

export type ManagerListRelationFilter = {
  every?: InputMaybe<ManagerWhereInput>
  none?: InputMaybe<ManagerWhereInput>
  some?: InputMaybe<ManagerWhereInput>
}

export type ManagerOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type ManagerOrderByWithRelationInput = {
  BookingTimeline?: InputMaybe<BookingTimelineOrderByRelationAggregateInput>
  Company?: InputMaybe<CompanyOrderByWithRelationInput>
  User?: InputMaybe<UserOrderByWithRelationInput>
  companyId?: InputMaybe<SortOrder>
  createdAt?: InputMaybe<SortOrder>
  displayName?: InputMaybe<SortOrder>
  uid?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export type ManagerRelationFilter = {
  is?: InputMaybe<ManagerWhereInput>
  isNot?: InputMaybe<ManagerWhereInput>
}

export enum ManagerScalarFieldEnum {
  CompanyId = 'companyId',
  CreatedAt = 'createdAt',
  DisplayName = 'displayName',
  Uid = 'uid',
  UpdatedAt = 'updatedAt',
}

export type ManagerWhereInput = {
  AND?: InputMaybe<Array<ManagerWhereInput>>
  BookingTimeline?: InputMaybe<BookingTimelineListRelationFilter>
  Company?: InputMaybe<CompanyRelationFilter>
  NOT?: InputMaybe<Array<ManagerWhereInput>>
  OR?: InputMaybe<Array<ManagerWhereInput>>
  User?: InputMaybe<UserRelationFilter>
  companyId?: InputMaybe<IntFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  displayName?: InputMaybe<StringFilter>
  uid?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type ManagerWhereUniqueInput = {
  uid: Scalars['String']['input']
}

export type MinimalSlotGroupBy = {
  __typename?: 'MinimalSlotGroupBy'
  count: Scalars['Int']['output']
  pricePerHour: Scalars['Int']['output']
  type: SlotType
}

export type Mutation = {
  __typename?: 'Mutation'
  createAddress: Address
  createAdmin: Admin
  createBooking: Booking
  createBookingTimeline: BookingTimeline
  createCompany: Company
  createCustomer: Customer
  createGarage: Garage
  createManager: Manager
  createReview: Review
  createSlot: Slot
  createValet: Valet
  createValetAssignment: ValetAssignment
  createVerification: Verification
  login: LoginOutput
  registerWithCredentials: User
  registerWithProvider: User
  removeAddress: Address
  removeAdmin: Admin
  removeBooking: Booking
  removeBookingTimeline: BookingTimeline
  removeCompany: Company
  removeCustomer: Customer
  removeGarage: Garage
  removeManager: Manager
  removeReview: Review
  removeSlot: Slot
  removeUser: User
  removeValet: Valet
  removeValetAssignment: ValetAssignment
  removeVerification: Verification
  updateAddress: Address
  updateAdmin: Admin
  updateBooking: Booking
  updateBookingTimeline: BookingTimeline
  updateCompany: Company
  updateCustomer: Customer
  updateGarage: Garage
  updateManager: Manager
  updateReview: Review
  updateSlot: Slot
  updateUser: User
  updateValet: Valet
  updateValetAssignment: ValetAssignment
  updateVerification: Verification
}

export type MutationCreateAddressArgs = {
  createAddressInput: CreateAddressInput
}

export type MutationCreateAdminArgs = {
  createAdminInput: CreateAdminInput
}

export type MutationCreateBookingArgs = {
  createBookingInput: CreateBookingInput
}

export type MutationCreateBookingTimelineArgs = {
  createBookingTimelineInput: CreateBookingTimelineInput
}

export type MutationCreateCompanyArgs = {
  createCompanyInput: CreateCompanyInput
}

export type MutationCreateCustomerArgs = {
  createCustomerInput: CreateCustomerInput
}

export type MutationCreateGarageArgs = {
  createGarageInput: CreateGarageInput
}

export type MutationCreateManagerArgs = {
  createManagerInput: CreateManagerInput
}

export type MutationCreateReviewArgs = {
  createReviewInput: CreateReviewInput
}

export type MutationCreateSlotArgs = {
  createSlotInput: CreateSlotInput
}

export type MutationCreateValetArgs = {
  createValetInput: CreateValetInput
}

export type MutationCreateValetAssignmentArgs = {
  createValetAssignmentInput: CreateValetAssignmentInput
}

export type MutationCreateVerificationArgs = {
  createVerificationInput: CreateVerificationInput
}

export type MutationLoginArgs = {
  loginInput: LoginInput
}

export type MutationRegisterWithCredentialsArgs = {
  registerWithCredentialsInput: RegisterWithCredentialsInput
}

export type MutationRegisterWithProviderArgs = {
  registerWithProviderInput: RegisterWithProviderInput
}

export type MutationRemoveAddressArgs = {
  where: AddressWhereUniqueInput
}

export type MutationRemoveAdminArgs = {
  where: AdminWhereUniqueInput
}

export type MutationRemoveBookingArgs = {
  where: BookingWhereUniqueInput
}

export type MutationRemoveBookingTimelineArgs = {
  where: BookingTimelineWhereUniqueInput
}

export type MutationRemoveCompanyArgs = {
  where: CompanyWhereUniqueInput
}

export type MutationRemoveCustomerArgs = {
  where: CustomerWhereUniqueInput
}

export type MutationRemoveGarageArgs = {
  where: GarageWhereUniqueInput
}

export type MutationRemoveManagerArgs = {
  where: ManagerWhereUniqueInput
}

export type MutationRemoveReviewArgs = {
  where: ReviewWhereUniqueInput
}

export type MutationRemoveSlotArgs = {
  where: SlotWhereUniqueInput
}

export type MutationRemoveUserArgs = {
  where: UserWhereUniqueInput
}

export type MutationRemoveValetArgs = {
  where: ValetWhereUniqueInput
}

export type MutationRemoveValetAssignmentArgs = {
  where: ValetAssignmentWhereUniqueInput
}

export type MutationRemoveVerificationArgs = {
  where: VerificationWhereUniqueInput
}

export type MutationUpdateAddressArgs = {
  updateAddressInput: UpdateAddressInput
}

export type MutationUpdateAdminArgs = {
  updateAdminInput: UpdateAdminInput
}

export type MutationUpdateBookingArgs = {
  updateBookingInput: UpdateBookingInput
}

export type MutationUpdateBookingTimelineArgs = {
  updateBookingTimelineInput: UpdateBookingTimelineInput
}

export type MutationUpdateCompanyArgs = {
  updateCompanyInput: UpdateCompanyInput
}

export type MutationUpdateCustomerArgs = {
  updateCustomerInput: UpdateCustomerInput
}

export type MutationUpdateGarageArgs = {
  updateGarageInput: UpdateGarageInput
}

export type MutationUpdateManagerArgs = {
  updateManagerInput: UpdateManagerInput
}

export type MutationUpdateReviewArgs = {
  updateReviewInput: UpdateReviewInput
}

export type MutationUpdateSlotArgs = {
  updateSlotInput: UpdateSlotInput
}

export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput
}

export type MutationUpdateValetArgs = {
  updateValetInput: UpdateValetInput
}

export type MutationUpdateValetAssignmentArgs = {
  updateValetAssignmentInput: UpdateValetAssignmentInput
}

export type MutationUpdateVerificationArgs = {
  updateVerificationInput: UpdateVerificationInput
}

export type Query = {
  __typename?: 'Query'
  address: Address
  addresses: Array<Address>
  admin: Admin
  admins: Array<Admin>
  booking: Booking
  bookingTimeline: BookingTimeline
  bookingTimelines: Array<BookingTimeline>
  bookings: Array<Booking>
  companies: Array<Company>
  company: Company
  customer: Customer
  customers: Array<Customer>
  garage: Garage
  garages: Array<Garage>
  getAuthProvider?: Maybe<AuthProvider>
  manager: Manager
  managers: Array<Manager>
  review: Review
  reviews: Array<Review>
  searchGarages: Array<Garage>
  slot: Slot
  slots: Array<Slot>
  user: User
  users: Array<User>
  valet: Valet
  valetAssignment: ValetAssignment
  valetAssignments: Array<ValetAssignment>
  valets: Array<Valet>
  verification: Verification
  verifications: Array<Verification>
  whoami: User
}

export type QueryAddressArgs = {
  where: AddressWhereUniqueInput
}

export type QueryAddressesArgs = {
  cursor?: InputMaybe<AddressWhereUniqueInput>
  distinct?: InputMaybe<Array<AddressScalarFieldEnum>>
  orderBy?: InputMaybe<Array<AddressOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<AddressWhereInput>
}

export type QueryAdminArgs = {
  where: AdminWhereUniqueInput
}

export type QueryAdminsArgs = {
  cursor?: InputMaybe<AdminWhereUniqueInput>
  distinct?: InputMaybe<Array<AdminScalarFieldEnum>>
  orderBy?: InputMaybe<Array<AdminOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<AdminWhereInput>
}

export type QueryBookingArgs = {
  where: BookingWhereUniqueInput
}

export type QueryBookingTimelineArgs = {
  where: BookingTimelineWhereUniqueInput
}

export type QueryBookingTimelinesArgs = {
  cursor?: InputMaybe<BookingTimelineWhereUniqueInput>
  distinct?: InputMaybe<Array<BookingTimelineScalarFieldEnum>>
  orderBy?: InputMaybe<Array<BookingTimelineOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<BookingTimelineWhereInput>
}

export type QueryBookingsArgs = {
  cursor?: InputMaybe<BookingWhereUniqueInput>
  distinct?: InputMaybe<Array<BookingScalarFieldEnum>>
  orderBy?: InputMaybe<Array<BookingOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<BookingWhereInput>
}

export type QueryCompaniesArgs = {
  cursor?: InputMaybe<CompanyWhereUniqueInput>
  distinct?: InputMaybe<Array<CompanyScalarFieldEnum>>
  orderBy?: InputMaybe<Array<CompanyOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<CompanyWhereInput>
}

export type QueryCompanyArgs = {
  where: CompanyWhereUniqueInput
}

export type QueryCustomerArgs = {
  where: CustomerWhereUniqueInput
}

export type QueryCustomersArgs = {
  cursor?: InputMaybe<CustomerWhereUniqueInput>
  distinct?: InputMaybe<Array<CustomerScalarFieldEnum>>
  orderBy?: InputMaybe<Array<CustomerOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<CustomerWhereInput>
}

export type QueryGarageArgs = {
  where: GarageWhereUniqueInput
}

export type QueryGaragesArgs = {
  cursor?: InputMaybe<GarageWhereUniqueInput>
  distinct?: InputMaybe<Array<GarageScalarFieldEnum>>
  orderBy?: InputMaybe<Array<GarageOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<GarageWhereInput>
}

export type QueryGetAuthProviderArgs = {
  uid: Scalars['String']['input']
}

export type QueryManagerArgs = {
  where: ManagerWhereUniqueInput
}

export type QueryManagersArgs = {
  cursor?: InputMaybe<ManagerWhereUniqueInput>
  distinct?: InputMaybe<Array<ManagerScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ManagerOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ManagerWhereInput>
}

export type QueryReviewArgs = {
  where: ReviewWhereUniqueInput
}

export type QueryReviewsArgs = {
  cursor?: InputMaybe<ReviewWhereUniqueInput>
  distinct?: InputMaybe<Array<ReviewScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ReviewOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ReviewWhereInput>
}

export type QuerySearchGaragesArgs = {
  dateFilter: DateFilterInput
  garageFilter?: InputMaybe<GarageFilter>
  locationFilter: LocationFilterInput
  slotsFilter?: InputMaybe<SlotWhereInput>
}

export type QuerySlotArgs = {
  where: SlotWhereUniqueInput
}

export type QuerySlotsArgs = {
  cursor?: InputMaybe<SlotWhereUniqueInput>
  distinct?: InputMaybe<Array<SlotScalarFieldEnum>>
  orderBy?: InputMaybe<Array<SlotOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<SlotWhereInput>
}

export type QueryUserArgs = {
  where: UserWhereUniqueInput
}

export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<UserWhereInput>
}

export type QueryValetArgs = {
  where: ValetWhereUniqueInput
}

export type QueryValetAssignmentArgs = {
  where: ValetAssignmentWhereUniqueInput
}

export type QueryValetAssignmentsArgs = {
  cursor?: InputMaybe<ValetAssignmentWhereUniqueInput>
  distinct?: InputMaybe<Array<ValetAssignmentScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ValetAssignmentOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ValetAssignmentWhereInput>
}

export type QueryValetsArgs = {
  cursor?: InputMaybe<ValetWhereUniqueInput>
  distinct?: InputMaybe<Array<ValetScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ValetOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ValetWhereInput>
}

export type QueryVerificationArgs = {
  where: VerificationWhereUniqueInput
}

export type QueryVerificationsArgs = {
  cursor?: InputMaybe<VerificationWhereUniqueInput>
  distinct?: InputMaybe<Array<VerificationScalarFieldEnum>>
  orderBy?: InputMaybe<Array<VerificationOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<VerificationWhereInput>
}

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive',
}

export type RegisterWithCredentialsInput = {
  email: Scalars['String']['input']
  image?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  password: Scalars['String']['input']
}

export type RegisterWithProviderInput = {
  image?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  type: AuthProviderType
  uid: Scalars['String']['input']
}

export type Review = {
  __typename?: 'Review'
  comment?: Maybe<Scalars['String']['output']>
  createdAt: Scalars['DateTime']['output']
  customerId: Scalars['String']['output']
  garageId: Scalars['Int']['output']
  id: Scalars['Int']['output']
  rating: Scalars['Int']['output']
  updatedAt: Scalars['DateTime']['output']
}

export type ReviewListRelationFilter = {
  every?: InputMaybe<ReviewWhereInput>
  none?: InputMaybe<ReviewWhereInput>
  some?: InputMaybe<ReviewWhereInput>
}

export type ReviewOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type ReviewOrderByWithRelationInput = {
  Customer?: InputMaybe<CustomerOrderByWithRelationInput>
  Garage?: InputMaybe<GarageOrderByWithRelationInput>
  comment?: InputMaybe<SortOrder>
  createdAt?: InputMaybe<SortOrder>
  customerId?: InputMaybe<SortOrder>
  garageId?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  rating?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export enum ReviewScalarFieldEnum {
  Comment = 'comment',
  CreatedAt = 'createdAt',
  CustomerId = 'customerId',
  GarageId = 'garageId',
  Id = 'id',
  Rating = 'rating',
  UpdatedAt = 'updatedAt',
}

export type ReviewWhereInput = {
  AND?: InputMaybe<Array<ReviewWhereInput>>
  Customer?: InputMaybe<CustomerRelationFilter>
  Garage?: InputMaybe<GarageRelationFilter>
  NOT?: InputMaybe<Array<ReviewWhereInput>>
  OR?: InputMaybe<Array<ReviewWhereInput>>
  comment?: InputMaybe<StringFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  customerId?: InputMaybe<StringFilter>
  garageId?: InputMaybe<IntFilter>
  id?: InputMaybe<IntFilter>
  rating?: InputMaybe<IntFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type ReviewWhereUniqueInput = {
  id: Scalars['Int']['input']
}

export type Slot = {
  __typename?: 'Slot'
  bookings: Array<Booking>
  createdAt: Scalars['DateTime']['output']
  displayName?: Maybe<Scalars['String']['output']>
  garage: Garage
  garageId: Scalars['Int']['output']
  height?: Maybe<Scalars['Int']['output']>
  id: Scalars['Int']['output']
  length?: Maybe<Scalars['Int']['output']>
  pricePerHour: Scalars['Int']['output']
  type: SlotType
  updatedAt: Scalars['DateTime']['output']
  width?: Maybe<Scalars['Int']['output']>
}

export type SlotListRelationFilter = {
  every?: InputMaybe<SlotWhereInput>
  none?: InputMaybe<SlotWhereInput>
  some?: InputMaybe<SlotWhereInput>
}

export type SlotOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type SlotOrderByWithRelationInput = {
  Bookings?: InputMaybe<BookingOrderByRelationAggregateInput>
  Garage?: InputMaybe<GarageOrderByWithRelationInput>
  createdAt?: InputMaybe<SortOrder>
  displayName?: InputMaybe<SortOrder>
  garageId?: InputMaybe<SortOrder>
  height?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  length?: InputMaybe<SortOrder>
  pricePerHour?: InputMaybe<SortOrder>
  type?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
  width?: InputMaybe<SortOrder>
}

export type SlotRelationFilter = {
  is?: InputMaybe<SlotWhereInput>
  isNot?: InputMaybe<SlotWhereInput>
}

export enum SlotScalarFieldEnum {
  CreatedAt = 'createdAt',
  DisplayName = 'displayName',
  GarageId = 'garageId',
  Height = 'height',
  Id = 'id',
  Length = 'length',
  PricePerHour = 'pricePerHour',
  Type = 'type',
  UpdatedAt = 'updatedAt',
  Width = 'width',
}

export enum SlotType {
  Bicycle = 'BICYCLE',
  Bike = 'BIKE',
  Car = 'CAR',
  Heavy = 'HEAVY',
}

export type SlotWhereInput = {
  AND?: InputMaybe<Array<SlotWhereInput>>
  Bookings?: InputMaybe<BookingListRelationFilter>
  Garage?: InputMaybe<GarageRelationFilter>
  NOT?: InputMaybe<Array<SlotWhereInput>>
  OR?: InputMaybe<Array<SlotWhereInput>>
  createdAt?: InputMaybe<DateTimeFilter>
  displayName?: InputMaybe<StringFilter>
  garageId?: InputMaybe<IntFilter>
  height?: InputMaybe<IntFilter>
  id?: InputMaybe<IntFilter>
  length?: InputMaybe<IntFilter>
  pricePerHour?: InputMaybe<FloatFilter>
  type?: InputMaybe<EnumSlotTypeFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
  width?: InputMaybe<IntFilter>
}

export type SlotWhereUniqueInput = {
  id: Scalars['Int']['input']
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc',
}

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>
  endsWith?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  in?: InputMaybe<Array<Scalars['String']['input']>>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  mode?: InputMaybe<QueryMode>
  not?: InputMaybe<Scalars['String']['input']>
  notIn?: InputMaybe<Array<Scalars['String']['input']>>
  startsWith?: InputMaybe<Scalars['String']['input']>
}

export type StringListFilter = {
  equals?: InputMaybe<Array<Scalars['String']['input']>>
  has?: InputMaybe<Scalars['String']['input']>
  hasEvery?: InputMaybe<Array<Scalars['String']['input']>>
  hasSome?: InputMaybe<Array<Scalars['String']['input']>>
  isEmpty?: InputMaybe<Scalars['Boolean']['input']>
}

export type UpdateAddressInput = {
  address?: InputMaybe<Scalars['String']['input']>
  garageId?: InputMaybe<Scalars['Int']['input']>
  id: Scalars['Int']['input']
  lat?: InputMaybe<Scalars['Int']['input']>
  lng?: InputMaybe<Scalars['Int']['input']>
}

export type UpdateAdminInput = {
  uid: Scalars['String']['input']
}

export type UpdateBookingInput = {
  customerId?: InputMaybe<Scalars['String']['input']>
  endTime?: InputMaybe<Scalars['DateTime']['input']>
  id: Scalars['Int']['input']
  passcode?: InputMaybe<Scalars['String']['input']>
  phoneNumber?: InputMaybe<Scalars['String']['input']>
  pricePerHour?: InputMaybe<Scalars['Int']['input']>
  slotId?: InputMaybe<Scalars['Int']['input']>
  startTime?: InputMaybe<Scalars['DateTime']['input']>
  status?: InputMaybe<BookingStatus>
  totalPrice?: InputMaybe<Scalars['Int']['input']>
  vehicleNumber?: InputMaybe<Scalars['String']['input']>
}

export type UpdateBookingTimelineInput = {
  bookingId?: InputMaybe<Scalars['Int']['input']>
  id: Scalars['Int']['input']
  managerId?: InputMaybe<Scalars['String']['input']>
  status?: InputMaybe<BookingStatus>
  timestamp?: InputMaybe<Scalars['DateTime']['input']>
  valetId?: InputMaybe<Scalars['String']['input']>
}

export type UpdateCompanyInput = {
  description?: InputMaybe<Scalars['String']['input']>
  displayName?: InputMaybe<Scalars['String']['input']>
  id: Scalars['Int']['input']
  managerId?: InputMaybe<Scalars['String']['input']>
}

export type UpdateCustomerInput = {
  displayName?: InputMaybe<Scalars['String']['input']>
  uid: Scalars['String']['input']
}

export type UpdateGarageInput = {
  companyId?: InputMaybe<Scalars['Int']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  displayName?: InputMaybe<Scalars['String']['input']>
  id: Scalars['Int']['input']
  images?: InputMaybe<Array<Scalars['String']['input']>>
}

export type UpdateManagerInput = {
  displayName?: InputMaybe<Scalars['String']['input']>
  uid: Scalars['String']['input']
}

export type UpdateReviewInput = {
  comment?: InputMaybe<Scalars['String']['input']>
  customerId?: InputMaybe<Scalars['String']['input']>
  garageId?: InputMaybe<Scalars['Int']['input']>
  id: Scalars['Int']['input']
  rating?: InputMaybe<Scalars['Int']['input']>
}

export type UpdateSlotInput = {
  displayName?: InputMaybe<Scalars['String']['input']>
  garageId?: InputMaybe<Scalars['Int']['input']>
  height?: InputMaybe<Scalars['Int']['input']>
  id: Scalars['Int']['input']
  length?: InputMaybe<Scalars['Int']['input']>
  pricePerHour?: InputMaybe<Scalars['Int']['input']>
  type?: InputMaybe<SlotType>
  width?: InputMaybe<Scalars['Int']['input']>
}

export type UpdateUserInput = {
  uid: Scalars['String']['input']
}

export type UpdateValetAssignmentInput = {
  bookingId: Scalars['Int']['input']
  pickupLat?: InputMaybe<Scalars['Int']['input']>
  pickupLng?: InputMaybe<Scalars['Int']['input']>
  pickupValetId?: InputMaybe<Scalars['String']['input']>
  returnLat?: InputMaybe<Scalars['Int']['input']>
  returnLng?: InputMaybe<Scalars['Int']['input']>
  returnValetId?: InputMaybe<Scalars['String']['input']>
}

export type UpdateValetInput = {
  companyId?: InputMaybe<Scalars['Int']['input']>
  displayName?: InputMaybe<Scalars['String']['input']>
  image?: InputMaybe<Scalars['String']['input']>
  licenceID?: InputMaybe<Scalars['String']['input']>
  uid: Scalars['String']['input']
}

export type UpdateVerificationInput = {
  adminId?: InputMaybe<Scalars['String']['input']>
  garageId: Scalars['Int']['input']
  verified?: InputMaybe<Scalars['Boolean']['input']>
}

export type User = {
  __typename?: 'User'
  admin?: Maybe<Admin>
  createdAt: Scalars['DateTime']['output']
  customer?: Maybe<Customer>
  image?: Maybe<Scalars['String']['output']>
  manager?: Maybe<Manager>
  name?: Maybe<Scalars['String']['output']>
  uid: Scalars['String']['output']
  updatedAt: Scalars['DateTime']['output']
  valet?: Maybe<Valet>
}

export type UserOrderByWithRelationInput = {
  Customer?: InputMaybe<CustomerOrderByWithRelationInput>
  Manager?: InputMaybe<ManagerOrderByWithRelationInput>
  Valet?: InputMaybe<ValetOrderByWithRelationInput>
  createdAt?: InputMaybe<SortOrder>
  name?: InputMaybe<SortOrder>
  uid?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>
  isNot?: InputMaybe<UserWhereInput>
}

export enum UserScalarFieldEnum {
  CreatedAt = 'createdAt',
  Image = 'image',
  Name = 'name',
  Uid = 'uid',
  UpdatedAt = 'updatedAt',
}

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>
  Customer?: InputMaybe<CustomerRelationFilter>
  Manager?: InputMaybe<ManagerRelationFilter>
  NOT?: InputMaybe<Array<UserWhereInput>>
  OR?: InputMaybe<Array<UserWhereInput>>
  Valet?: InputMaybe<ValetRelationFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  name?: InputMaybe<StringFilter>
  uid?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type UserWhereUniqueInput = {
  uid: Scalars['String']['input']
}

export type Valet = {
  __typename?: 'Valet'
  companyId?: Maybe<Scalars['Int']['output']>
  createdAt: Scalars['DateTime']['output']
  displayName: Scalars['String']['output']
  image?: Maybe<Scalars['String']['output']>
  licenceID: Scalars['String']['output']
  uid: Scalars['String']['output']
  updatedAt: Scalars['DateTime']['output']
}

export type ValetAssignment = {
  __typename?: 'ValetAssignment'
  bookingId: Scalars['Int']['output']
  createdAt: Scalars['DateTime']['output']
  pickupLat: Scalars['Int']['output']
  pickupLng: Scalars['Int']['output']
  pickupValet?: Maybe<Valet>
  pickupValetId: Scalars['String']['output']
  returnLat?: Maybe<Scalars['Int']['output']>
  returnLng?: Maybe<Scalars['Int']['output']>
  returnValet?: Maybe<Valet>
  returnValetId: Scalars['String']['output']
  updatedAt: Scalars['DateTime']['output']
}

export type ValetAssignmentListRelationFilter = {
  every?: InputMaybe<ValetAssignmentWhereInput>
  none?: InputMaybe<ValetAssignmentWhereInput>
  some?: InputMaybe<ValetAssignmentWhereInput>
}

export type ValetAssignmentOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type ValetAssignmentOrderByWithRelationInput = {
  Booking?: InputMaybe<BookingOrderByWithRelationInput>
  PickupValet?: InputMaybe<ValetOrderByWithRelationInput>
  ReturnValet?: InputMaybe<ValetOrderByWithRelationInput>
  bookingId?: InputMaybe<SortOrder>
  createdAt?: InputMaybe<SortOrder>
  pickupLat?: InputMaybe<SortOrder>
  pickupLng?: InputMaybe<SortOrder>
  pickupValetId?: InputMaybe<SortOrder>
  returnLat?: InputMaybe<SortOrder>
  returnLng?: InputMaybe<SortOrder>
  returnValetId?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export type ValetAssignmentRelationFilter = {
  is?: InputMaybe<ValetAssignmentWhereInput>
  isNot?: InputMaybe<ValetAssignmentWhereInput>
}

export enum ValetAssignmentScalarFieldEnum {
  BookingId = 'bookingId',
  CreatedAt = 'createdAt',
  PickupLat = 'pickupLat',
  PickupLng = 'pickupLng',
  PickupValetId = 'pickupValetId',
  ReturnLat = 'returnLat',
  ReturnLng = 'returnLng',
  ReturnValetId = 'returnValetId',
  UpdatedAt = 'updatedAt',
}

export type ValetAssignmentWhereInput = {
  AND?: InputMaybe<Array<ValetAssignmentWhereInput>>
  Booking?: InputMaybe<BookingRelationFilter>
  NOT?: InputMaybe<Array<ValetAssignmentWhereInput>>
  OR?: InputMaybe<Array<ValetAssignmentWhereInput>>
  PickupValet?: InputMaybe<ValetRelationFilter>
  ReturnValet?: InputMaybe<ValetRelationFilter>
  bookingId?: InputMaybe<IntFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  pickupLat?: InputMaybe<FloatFilter>
  pickupLng?: InputMaybe<FloatFilter>
  pickupValetId?: InputMaybe<StringFilter>
  returnLat?: InputMaybe<FloatFilter>
  returnLng?: InputMaybe<FloatFilter>
  returnValetId?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type ValetAssignmentWhereUniqueInput = {
  bookingId: Scalars['Int']['input']
}

export type ValetListRelationFilter = {
  every?: InputMaybe<ValetWhereInput>
  none?: InputMaybe<ValetWhereInput>
  some?: InputMaybe<ValetWhereInput>
}

export type ValetOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type ValetOrderByWithRelationInput = {
  BookingTimeline?: InputMaybe<BookingTimelineOrderByRelationAggregateInput>
  Company?: InputMaybe<CompanyOrderByWithRelationInput>
  PickupAssignments?: InputMaybe<ValetAssignmentOrderByRelationAggregateInput>
  ReturnAssignments?: InputMaybe<ValetAssignmentOrderByRelationAggregateInput>
  User?: InputMaybe<UserOrderByWithRelationInput>
  companyId?: InputMaybe<SortOrder>
  createdAt?: InputMaybe<SortOrder>
  displayName?: InputMaybe<SortOrder>
  image?: InputMaybe<SortOrder>
  licenceID?: InputMaybe<SortOrder>
  uid?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export type ValetRelationFilter = {
  is?: InputMaybe<ValetWhereInput>
  isNot?: InputMaybe<ValetWhereInput>
}

export enum ValetScalarFieldEnum {
  CompanyId = 'companyId',
  CreatedAt = 'createdAt',
  DisplayName = 'displayName',
  Image = 'image',
  LicenceId = 'licenceID',
  Uid = 'uid',
  UpdatedAt = 'updatedAt',
}

export type ValetWhereInput = {
  AND?: InputMaybe<Array<ValetWhereInput>>
  BookingTimeline?: InputMaybe<BookingTimelineListRelationFilter>
  Company?: InputMaybe<CompanyRelationFilter>
  NOT?: InputMaybe<Array<ValetWhereInput>>
  OR?: InputMaybe<Array<ValetWhereInput>>
  PickupAssignments?: InputMaybe<ValetAssignmentListRelationFilter>
  ReturnAssignments?: InputMaybe<ValetAssignmentListRelationFilter>
  User?: InputMaybe<UserRelationFilter>
  companyId?: InputMaybe<IntFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  displayName?: InputMaybe<StringFilter>
  image?: InputMaybe<StringFilter>
  licenceID?: InputMaybe<StringFilter>
  uid?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type ValetWhereUniqueInput = {
  uid: Scalars['String']['input']
}

export type Verification = {
  __typename?: 'Verification'
  adminId: Scalars['String']['output']
  createdAt: Scalars['DateTime']['output']
  garageId: Scalars['Int']['output']
  updatedAt: Scalars['DateTime']['output']
  verified: Scalars['Boolean']['output']
}

export type VerificationListRelationFilter = {
  every?: InputMaybe<VerificationWhereInput>
  none?: InputMaybe<VerificationWhereInput>
  some?: InputMaybe<VerificationWhereInput>
}

export type VerificationOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type VerificationOrderByWithRelationInput = {
  Admin?: InputMaybe<AdminOrderByWithRelationInput>
  Garage?: InputMaybe<GarageOrderByWithRelationInput>
  adminId?: InputMaybe<SortOrder>
  createdAt?: InputMaybe<SortOrder>
  garageId?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
  verified?: InputMaybe<SortOrder>
}

export type VerificationRelationFilter = {
  is?: InputMaybe<VerificationWhereInput>
  isNot?: InputMaybe<VerificationWhereInput>
}

export enum VerificationScalarFieldEnum {
  AdminId = 'adminId',
  CreatedAt = 'createdAt',
  GarageId = 'garageId',
  UpdatedAt = 'updatedAt',
  Verified = 'verified',
}

export type VerificationWhereInput = {
  AND?: InputMaybe<Array<VerificationWhereInput>>
  Admin?: InputMaybe<AdminRelationFilter>
  Garage?: InputMaybe<GarageRelationFilter>
  NOT?: InputMaybe<Array<VerificationWhereInput>>
  OR?: InputMaybe<Array<VerificationWhereInput>>
  adminId?: InputMaybe<StringFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  garageId?: InputMaybe<IntFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
  verified?: InputMaybe<BoolFilter>
}

export type VerificationWhereUniqueInput = {
  garageId: Scalars['Int']['input']
}

export type RegisterWithCredentialsMutationVariables = Exact<{
  registerWithCredentialsInput: RegisterWithCredentialsInput
}>

export type RegisterWithCredentialsMutation = {
  __typename?: 'Mutation'
  registerWithCredentials: {
    __typename?: 'User'
    updatedAt: any
    uid: string
    name?: string | null
    image?: string | null
    createdAt: any
  }
}

export type CompaniesQueryVariables = Exact<{
  distinct?: InputMaybe<Array<CompanyScalarFieldEnum> | CompanyScalarFieldEnum>
  orderBy?: InputMaybe<
    Array<CompanyOrderByWithRelationInput> | CompanyOrderByWithRelationInput
  >
  where?: InputMaybe<CompanyWhereInput>
  cursor?: InputMaybe<CompanyWhereUniqueInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
}>

export type CompaniesQuery = {
  __typename?: 'Query'
  companies: Array<{
    __typename?: 'Company'
    createdAt: any
    description?: string | null
    displayName?: string | null
    id: number
    updatedAt: any
    garages: Array<{ __typename?: 'Garage'; id: number }>
    managers: Array<{ __typename?: 'Manager'; uid: string }>
  }>
}

export type LoginMutationVariables = Exact<{
  loginInput: LoginInput
}>

export type LoginMutation = {
  __typename?: 'Mutation'
  login: {
    __typename?: 'LoginOutput'
    token: string
    user: {
      __typename?: 'User'
      uid: string
      name?: string | null
      image?: string | null
    }
  }
}

export type GetAuthProviderQueryVariables = Exact<{
  uid: Scalars['String']['input']
}>

export type GetAuthProviderQuery = {
  __typename?: 'Query'
  getAuthProvider?: {
    __typename?: 'AuthProvider'
    uid: string
    type: AuthProviderType
  } | null
}

export type RegisterWithProviderMutationVariables = Exact<{
  registerWithProviderInput: RegisterWithProviderInput
}>

export type RegisterWithProviderMutation = {
  __typename?: 'Mutation'
  registerWithProvider: { __typename?: 'User'; uid: string }
}

export type SearchGaragesQueryVariables = Exact<{
  dateFilter: DateFilterInput
  locationFilter: LocationFilterInput
  slotsFilter?: InputMaybe<SlotWhereInput>
  garageFilter?: InputMaybe<GarageFilter>
}>

export type SearchGaragesQuery = {
  __typename?: 'Query'
  searchGarages: Array<{
    __typename?: 'Garage'
    id: number
    images: Array<string>
    address?: {
      __typename?: 'Address'
      lat: number
      lng: number
      address: string
    } | null
    availableSlots: Array<{
      __typename?: 'MinimalSlotGroupBy'
      type: SlotType
      pricePerHour: number
      count: number
    }>
    verification?: { __typename?: 'Verification'; verified: boolean } | null
  }>
}

export const namedOperations = {
  Query: {
    Companies: 'Companies',
    GetAuthProvider: 'GetAuthProvider',
    SearchGarages: 'SearchGarages',
  },
  Mutation: {
    RegisterWithCredentials: 'RegisterWithCredentials',
    Login: 'Login',
    RegisterWithProvider: 'RegisterWithProvider',
  },
}

export const RegisterWithCredentialsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'RegisterWithCredentials' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'registerWithCredentialsInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'RegisterWithCredentialsInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'registerWithCredentials' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'registerWithCredentialsInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'registerWithCredentialsInput' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'image' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  RegisterWithCredentialsMutation,
  RegisterWithCredentialsMutationVariables
>
export const CompaniesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Companies' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'distinct' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: { kind: 'Name', value: 'CompanyScalarFieldEnum' },
              },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'orderBy' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: {
                  kind: 'Name',
                  value: 'CompanyOrderByWithRelationInput',
                },
              },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'CompanyWhereInput' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'cursor' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'CompanyWhereUniqueInput' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'skip' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'take' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'companies' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'distinct' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'distinct' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'orderBy' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'cursor' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'cursor' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'skip' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'skip' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'take' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'take' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'displayName' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'garages' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'managers' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CompaniesQuery, CompaniesQueryVariables>
export const LoginDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'Login' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'loginInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'LoginInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'login' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'loginInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'loginInput' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'token' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'user' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'image' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>
export const GetAuthProviderDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetAuthProvider' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'uid' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getAuthProvider' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'uid' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'uid' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
                { kind: 'Field', name: { kind: 'Name', value: 'type' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetAuthProviderQuery,
  GetAuthProviderQueryVariables
>
export const RegisterWithProviderDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'RegisterWithProvider' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'registerWithProviderInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'RegisterWithProviderInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'registerWithProvider' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'registerWithProviderInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'registerWithProviderInput' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  RegisterWithProviderMutation,
  RegisterWithProviderMutationVariables
>
export const SearchGaragesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'SearchGarages' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'dateFilter' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'DateFilterInput' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'locationFilter' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'LocationFilterInput' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'slotsFilter' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'SlotWhereInput' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'garageFilter' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'GarageFilter' },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'searchGarages' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'dateFilter' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'dateFilter' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'locationFilter' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'locationFilter' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'slotsFilter' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'slotsFilter' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'garageFilter' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'garageFilter' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'address' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'lat' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'lng' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'address' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'images' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'availableSlots' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'dateFilter' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'dateFilter' },
                      },
                    },
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'slotsFilter' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'slotsFilter' },
                      },
                    },
                  ],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pricePerHour' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'count' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'verification' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'verified' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SearchGaragesQuery, SearchGaragesQueryVariables>
