type MergeTypes<A, B> = {
  [key in keyof A]: key extends keyof B ? B[key] : A[key];
} & B;
export interface IResponse<T> {
  status?: number | string;
  message?: string;
  error?: number;
  data?: T;
  total?: number;
  code?: number;
  errorCode?: string;
}

export interface ItemApp {
  indexApp: number;
  key: string;
  name: string;
  className: string;
  link: {
    LOCAL: string;
    STAGING: string;
    BETA: string;
    PRODUCTION: string;
  };
}

export interface IPagination {
  page: number;
  limit: number;
}

export interface PayloadGetTripList {
  hub_id: string;
  status: string;
  is_ready: number | undefined;
  service_id?: string;
  created_by_id?: string;
  actStatus?: string;
  reverse: number;
  offset: number;
  limit: number;
}

export interface SearchTripList {
  status?: string;
  serviceId?: string;
  createdById?: string;
  reverse?: boolean;
  isReady?: string | undefined;
  actStatus?: string;
  page?: string;
  size?: string;
}

export interface TripItem {
  createDateIndex: number;
  createdById: string;
  createdByName: string;
  createdTime: string;
  startTime: string;
  endTime: string;
  date: string;
  displayCounter: number;
  hubId: string;
  id: string;
  isReady: boolean;
  lastUpdatedTime: string;
  pickCount: number;
  servicePartner: string;
  partnerServiceCode?: string;
  partnerTripCode?: string;
  startDateIndex: number;
  status: string;
  tripCode: string;
  driverId: string;
  driverName: string;
  driverPhone: string;
}

export interface TripProfile {
  orderCount: number;
  updatedCount: number;
  pickCount: number;
  deliverCount: number;
  returnCount: number;
  totalTripValue: number;
  tripCode: string;
  needToCollect: number;
  collectedAmount: number;
}

export interface TripDetail {
  tripCode: string;
  status: string;
  hubId: string;
  servicePartner: string;
  createdById: string;
  createdByName: string;
  isReady: boolean;
  displayCounter: number;
  createDateIndex: number;
  startDateIndex: number;
  date: string;
  id: string;
  createdTime: string;
  endTime: string;
  lastUpdatedTime: string;
  partnerTripCode: string;
  partnerServiceCode: string;
}

export interface ContactInfo {
  contactId: string;
  contactName: string;
  contactPhone: string;
  address: string;
  cityCode: string;
  cityName: string;
  districtCode: string;
  districtName: string;
  wardCode: string;
  wardName: string;
  haveToCollectAmount: number;
  lat: number;
  lng: number;
}

export interface TripItemDetail {
  nextRedoTime?: string;
  failCode?: string;
  failNote?: string;
  isCancel?: boolean;
  isReturn?: boolean;
  isSucceeded?: boolean;
  isUpdated?: boolean;
  collectCodFailedAmount: number;
  inTripIndex: number;
  orderCode: string;
  type: string;
  tripCode: string;
  hubId: string;
  collectAmount: number;
  updateUserId: string;
  updateUserName: string;
  senderContact: ContactInfo;
  receiverContact: ContactInfo;
  returnContact: ContactInfo;
  pickInfo: ContactInfo;
  deliverInfo: ContactInfo;
  returnInfo: ContactInfo;
  tags: string[];
  clientHubId: string;
  date: string;
  createdTime: string;
  lastUpdatedTime: string;
  id: string;
  items?:
    | {
        parcelCode: string;
        code: string;
        name: string;
        weight: number;
        status: string;
      }[]
    | null;
  serviceTypeId: number;
  contactInfo?: ContactInfo;
}

export type TripListType = MergeTypes<TripItem, TripProfile>;

export interface TableTripListProps {
  loading: boolean;
  dataSource: TripListType[];
  page: number;
  size: number;
  tableName: string;
  filtered?: any;
  onTableChange: Function;
  total: number;
  onReload: Function;
  onBack: Function;
}

export interface HubInfo {
  createdTime: string;
  description: string;
  districtId: number;
  districtName: string;
  hubCode: string;
  hubId: number;
  hubName: string;
  id: string;
  lastUpdatedTime: string;
  provinceId: number;
  provinceName: string;
}

export interface IHubAddress {
  address: string;
  hubId: string;
  id: string;
  lat: number;
  lng: number;
  locationId: string;
  locationName: string;
  key: string;
  no?: number;
  type?: string;
}

export interface PayloadCreateHubAddress {
  address: string;
  hubId: string;
  lat: number;
  lng: number;
  locationName: string;
  type: string;
}

export interface AreaHub {
  areaCode: string;
  areaName: string;
  createdTime: string;
  hubId: number;
  id: string;
  lastUpdatedTime: string;
  position: string;
}

export interface SelectHubProps {
  value: string | undefined;
  onChange: (id: string) => void;
}

export interface AreaByHub {
  areaCode: string;
  areaName: string;
  createdTime: string;
  hubId: number;
  id: string;
  lastUpdatedTime: string;
  position: string;
}

export interface SlotItem {
  containerCode: string;
  containerName: string;
  containerStatus: string;
  containerType: string;
  createdTime: string;
  hubId: number;
  id: string;
  lastUpdatedTime: string;
  numOfShelf: number;
  position: string;
}

export interface PayloadScanOrder {
  orderCode: string;
  tripCode: string;
}

export interface TripDetail {
  createDateIndex: number;
  createdById: string;
  createdByName: string;
  createdTime: string;
  date: string;
  displayCounter: number;
  driverId: string;
  driverName: string;
  driverPhone: string;
  hubId: string;
  id: string;
  isReady: boolean;
  lastUpdatedTime: string;
  servicePartner: string;
  startDateIndex: number;
  startTime: string;
  status: string;
  tripCode: string;
}

export interface OrderInfo {
  driverId: string;
  driverName: string;
  driverPhone: string;
  finishedAt: string;
  hubId: string;
  orderCode: string;
  startedAt: string;
  tripCode: string;
  type: string;
}

interface ScanInfo {
  orderCode: string;
  isScanned: boolean;
  scannedTime: any;
}

export interface ScanItem {
  driverInfo: { id: string; name: string };
  deliverItems: ScanInfo[] | null;
  deliveringItems: ScanInfo[] | null;
  pickItems: ScanInfo[] | null;
  returnItems: ScanInfo[] | null;

  returningItems: ScanInfo[] | null;

  transitItems: ScanInfo[] | null;
  waitingToReturnItems: ScanInfo[] | null;
  totalNeedScan: number;
  totalOrder: number;
  totalScanned: number;
  tripCode: string;
}

export interface ContainerShelf {
  containerCode: string;
  containerName: string;
  containerStatus: string;
  containerType: string;
  createdTime: string;
  hubId: number;
  id: string;
  lastUpdatedTime: string;
  numOfOrder: number;
  parentCode: string;
  position: string;
  countTotalOrder?: number;
}

export interface ContainerSlot {
  containerCode: string;
  containerName: string;
  containerStatus: string;
  containerType: string;
  createdTime: string;
  hubId: number;
  id: string;
  lastUpdatedTime: string;
  numOfShelf: number;
  parentCode: string;
  position: string;
}

export interface CoreOrder {
  clientId: string;
  clientPhone: string;
  createdTime: string;
  externalCode: string;
  id: string;
  lastUpdatedTime: string;
  loadedBy: string;
  orderCode: string;
  orderId: string;
  orgCode: string;
  updatedBy: string;
  version: number;
}

export interface LocationOrder {
  createdTime: string;
  currentId: string;
  currentType: string;
  deliverId: string;
  deliverType: string;
  id: string;
  lastUpdateFromPartner: string | null;
  lastUpdatedTime: string;
  loadedBy: string;
  locationId: string;
  locationType: string;
  orderCode: string;
  orgCode: string;
  pickId: string;
  pickType: string;
  previousId: string;
  previousType: string;
  returnId: string;
  returnType: string;
  sameHubPickDelivery: boolean;
  updatedBy: string;
  version: number;
}

export interface OperationOrder {
  action: string;
  bulkyAction: string;
  bulkyType: string;
  createdTime: string;
  deliveryFailTime: string;
  // documentReturn: null;
  doubleCheck: boolean;
  height: number;
  id: string;
  internalProcessStatus: string;
  internalProcessType: string;
  isCancel: boolean;
  items:
    | {
        parcelCode: string;
        code: string;
        name: string;
        weight: number;
      }[]
    | null;
  lastUpdateFromPartner: string;
  lastUpdatedTime: string;
  length: number;
  loadedBy: string;
  lost: false;
  orderCode: string;
  orderTypes: any[];
  orgCode: string;
  partnerAction: string;
  partnerStatus: string;
  pickAtStation: boolean | null;
  pickFailTime: string;
  serviceId: string;
  serviceName: string;
  serviceTypeID: number;
  status: string;
  tags: any[];
  tripId: string;
  tripPartner: string;
  updatedBy: string;
  version: number;
  weight: number;
  width: number;
}

export interface PickingOrder {
  id: string;
  address: string;
  cityCode: string;
  cityName: string;
  districtCode: string;
  districtName: string;
  lattitude: 0;
  longitude: 0;
  name: string;
  phone: string;
  wardCode: string;
  wardName: string;
  cellCode: string;
  clientHubId: string;
  clientId: string;
  clientName: string;
  createdTime: string;
  lastUpdatedTime: string;
  loadedBy: string;
  orderCode: string;
  orgCode: string;
  pickCell: string;
  pickTrust: boolean;
  pickTrustLevel: number;
  updatedBy: string;
  version: number;
}

export interface ReturnOrder {
  address: string;
  cellCode: string;
  cityCode: string;
  cityName: string;
  createdTime: string;
  deliveryCell: string;
  deliveryHubId: string;
  deliveryTrust: boolean;
  deliveryTrustLevel: number;
  districtCode: string;
  districtName: string;
  extraNote: string;
  id: string;
  isPartialReturn: boolean;
  lastUpdatedTime: string;
  lattitude: number;
  loadedBy: string;
  longitude: number;
  name: string;
  orderCode: string;
  orgCode: string;
  phone: string;
  requiredCode: string;
  requiredNote: string;
  version: number;
  wardCode: string;
  wardName: string;
  clientId: string;
}

export interface DeliveryOrder {
  address: string;
  cellCode: string;
  cityCode: string;
  cityName: string;
  createdTime: string;
  deliveryCell: string;
  deliveryHubId: string;
  deliveryTrust: boolean;
  deliveryTrustLevel: number;
  districtCode: string;
  districtName: string;
  extraNote: string;
  id: string;
  isPartialReturn: boolean;
  lastUpdatedTime: string;
  lattitude: number;
  loadedBy: string;
  longitude: number;
  name: string;
  orderCode: string;
  orgCode: string;
  phone: string;
  requiredCode: string;
  requiredNote: string;
  version: number;
  wardCode: string;
  wardName: string;
}

export interface MultiOfOrder {
  core: CoreOrder | null;
  location: LocationOrder | null;
  operation: OperationOrder | null;
  picking: PickingOrder | null;
  delivery: DeliveryOrder | null;
  externalCode: number;
  orderCode: string;
  orderId: string;
  status: string;
  return: ReturnOrder | null;
  time: any;
}

export interface CollectAmountTable {
  deadline: string;
  order_number: number;
  paid_amount: number;
  paid_user_id: string;
  paid_user_name: string;
  partner_code: string;
  schedule_code: string;
  trip_code: string;
}

export interface CreateReceiptProps {
  hub_id: string;
  paid_user_id: string;
  callBackAfterCreate?: Function;
  showItemNotUpdated?: boolean;
}

export interface CollectAmountByUser {
  order_code: string;
  paid_amount: number;
  paid_user_id: string;
  paid_user_name: string;
  trip_code: string;
  type: string;
  idx: string | number;
}

export interface PayloadCreateReceipt {
  hubId: string;
  paidUserId: string;
  paidUserName: string;
  receiptDetails: {
    orderCode: string;
    tripCode: string;
    type: string;
    amount: number;
  }[];
  tempReceipt: boolean;
}

export interface FormReceiptSearchProps {
  onSubmit: (values: FilterSearchReceipt) => void;
  loading: boolean;
  isDetail: boolean;
  isDisableActionExport: boolean;
  defaultValues: any;
  onPrint?: () => Promise<void>;
  loadingPrint?: boolean;
}
interface CommonSearchReceipt {
  createdById?: string;
  paidUserId?: string;
  receiptCode?: string;
  syncStatus?: any;
}

export interface SearchReceipt extends CommonSearchReceipt {
  fromDate?: any;
  toDate?: any;
  page?: any;
  limit?: any;
}

export interface SearchReceiptDetail extends CommonSearchReceipt {
  orderCode?: string;
  tripCode?: string;
}

export interface FilterSearchReceipt
  extends SearchReceipt,
    SearchReceiptDetail {}

export interface PayloadSearchReceipt {
  createdById?: string;
  fromDate?: string;
  hubId: string;
  paging: { offset: number; limit: number };
  paidUserId?: string;
  receiptCode?: string;
  syncStatus?: string;
  toDate?: string;
}

export interface PayloadSearchReceiptDetail {
  createdById?: string;
  hubId: string;
  orderCode?: string;
  paging: { offset: number; limit: number };
  paidUserId?: string;
  receiptCode?: string;
  syncStatus?: string;
  tripCode?: string;
}

export interface DataSearchReceipt {
  createdById: string;
  createdByName: string;
  createdTime: string;
  locationId: number;
  paidUserId: string;
  paidUserName: string;
  paymentMethod: string;
  receiptCode: string;
  syncStatus: string;
  totalAmount: number;
}

export interface DataSearchReceiptDetail {
  createReceiptTime: string;
  createdById: string;
  createdByName: string;
  createdTime: string;
  deliveryType: string;
  orderCode: string;
  paidAmount: number;
  paidUserId: string;
  paidUserName: string;
  receiptCode: string;
  receiverName: string;
  receiverPhone: string;
  senderName: string;
  senderPhone: string;
  syncStatus: string;
  tripCode: string;
}

export interface ReceiptHeader {
  createdById: string;
  createdByName: string;
  createdTime: string;
  locationId: number;
  paidUserId: string;
  paidUserName: string;
  paymentMethod: string;
  receiptCode: string;
  syncStatus: string;
  totalAmount: number;
  tempReceipt: boolean;
}

export interface ResponseReceiptDetail {
  createReceiptTime: string;
  createdById: string;
  createdByName: string;
  createdTime: string;
  deliveryType: string;
  orderCode: string;
  paidAmount: number;
  paidUserId: string;
  paidUserName: string;
  receiptCode: string;
  receiverName: string;
  receiverPhone: string;
  senderName: string;
  senderPhone: string;
  syncStatus: string;
  tripCode: string;
}

export interface ItemCollectScanOrder {
  deadline: string;
  paid_amount: number;
  paid_orders: { order_code: string; amount: number }[];
  paid_user_id: string;
  paid_user_name: string;
  partner_code: string;
  scan_orders: string[];
  storing_orders: string[];
  trip_code: string;
}

export interface AhamoveServices {
  code: string;
  goBackHub: boolean;
  hubId: string;
  id: string;
  name: string;
  key?: string;
}

export interface AhamoveInfo {
  ahamoveTripCode: string;
  backToStart: boolean;
  discount: number;
  distanceFee: number;
  hubId: string;
  isConfirmPickup: boolean;
  isStarted: boolean;
  pickingAddress: string;
  pickingLat: number;
  pickingLng: number;
  requestFee: number;
  serviceId: string;
  stopFee: number;
  totalPay: number;
  trackingLink: string;
  tripCode: string;
  vatFee: number;
}

export interface SelectServicePartnerProps {
  defaultValues: { servicePartner: string; partnerServiceCode?: string };
  onReload: Function;
  tripCode: string;
  ahamoveServices?: AhamoveServices[];
  disabled?: boolean;
}

export interface Driver {
  name?: string;
  createdTime: string;
  departmentList: string[];
  fullname: string;
  id: string;
  lastUpdatedTime: string;
  orgCode: string;
  phoneNumber: string;
  scopeList: string[];
  status: string;
  subType: string[];
  title: string;
  uniqueId: string;
  driverStatus: {
    driver_id: string;
    trip_code: string;
    status: string;
    description: string;
    not_collected: boolean;
  };
}

export interface IAddFast {
  orderCode: string;
  type: string;
}

export interface LocalDataCreateTrip {
  targetPick?: any[];
  targetDeliver?: any[];
  targetReturn?: any[];
  targetFast?: IAddFast[];
  districtCode?: string;
  // wardCode?: string;
  areaCode?: string;
  total: {
    totalPick: number;
    totalDeliver: number;
    totalReturn: number;
  };
}

export interface OrdersByGroup {
  groupName: string;
  groupCode: string;
  orders: string[];
  actionType: string;
  needToActCount: number;
}

export type AddFastOrderType = "PICK" | "DELIVER" | "RETURN";

export interface CreateTripInfo {
  tripCode: string;
  status: string;
  hubId: string;
  createdById: string;
  createdByName: string;
  createDateIndex: number;
  date: string;
  createdTime: string;
  lastUpdatedTime: string;
}

export interface GetTripItemsReqBody {
  orderCode?: string;
  isCancel?: number;
  isSucceeded?: number;
  isUpdated?: number;
  isReturn?: number;
  TripCode: string;
  typeList?: string[];
  offset: number;
  limit: number;
}

export interface Reasons {
  code: string;
  message: string;
  call_sender_ring_number: number;
  call_sender_ring: number;
  call_sender_duration: number;
  call_sender_number: number;
  sms_sender: number;
  call_receiver_duration: number;
  call_receiver_number: number;
  call_receiver_ring: number;
  call_receiver_ring_number: number;
  sms_receiver: number;
}

export interface FailReasons {
  pick_failed: Reasons[];
  deliver_failed: Reasons[];
  return_failed: Reasons[];
}

export interface Updater {
  orderCode: string;
  type: string;
  isUpdated: boolean;
  items?:
    | {
        parcelCode: string;
        code: string;
        name: string;
        weight: number;
      }[]
    | null;
  isSucceeded: boolean;
  isCancel?: boolean;
  isReturn?: boolean;
  status: string;
  failNote?: string;
  failCode?: string;
  podFileIds?: string[];
}

export interface CollectedAmount {
  orderCode: string;
  codAmount: number;
  totalAmount: number;
  realPayAmount: number;
  senderPayAmount: number;
  receiverPayAmount: number;
  codFailedAmount: number;
  collectedCodFailAmount: number;
}

export interface OrderLocationInHub {
  areaCode: string;
  createdTime: string;
  hubId: number;
  id: string;
  lastUpdatedTime: string;
  orderCode: string;
  shelfCode: string;
  slotCode: string;
  userAction: string;
  userId: string;
  userName: string;
  userType: string;
}

export interface DeviceInfo {
  appVersion: string;
  uniqueId: string;
  name: string;
  type: string;
  brand: string;
  userAgent: string;
  osName: string;
  osVersion: string;
  ip: string;
}

export interface History {
  createdById: string;
  createdByName: string;
  createdTime: string;
  data: string;
  historyType: string;
  hubId: string;
  orderCode: string;
  tripCode: string;
  deviceInfo: DeviceInfo | null;
  orderType?: string;
  senderPhone?: string;
  senderName?: string;
  receiverPhone?: string;
  receiverName?: string;
}

export interface ItemPOD {
  order_code: string;
  type: string;
  is_succeeded: boolean;
  file_id: string;
  file_url: string;
  fail_note: string;
  fail_code: string;
  upload_at: string;
}

export interface ConfigTime {
  validTime: string;
  expiredTime: string;
  fromHour: number;
  toHour: number;
  message: string;
}

export interface HubConfig {
  limitCreateTrip: ConfigTime | null;
  limitUpdateStatus: ConfigTime | null;
}

export interface ServiceConfig {
  createdTime: string;
  id: string;
  lastUpdatedTime: string;
  locationCode: string;
  locationName: string;
  locationType: string;
  orgCode: string;
  services: { applyType: string; serviceCode: string }[];
}

export interface ReqCreateCoordinate {
  phone: string;
  address: string;
  name: string;
}

export interface RespCreateCoordinate {
  address: string;
  lat: number;
  lng: number;
}

export interface ILayoutPort {
  containerCode: string;
  containerName: string;
  containerStatus: string;
  containerType: string;
  createdTime: string;
  hubId: number;
  id: string;
  lastUpdatedTime: string;
  numOfShelf: number;
  parentCode: string;
  position: string;
}

export interface IAhamoveCityService {
  id: string;
  allow_none_coordinate: boolean;
  code: string;
  ahamove_city_id: string;
  name: string;
  province_id: string;
  province_name: string;
}

export interface ItemFile {
  file_id: string;
  name: string;
  size: number;
  type: string;
}

export interface ReqCreateTicketLostParcel {
  order_code: string;
  order_status: string;
  action_type: number;
  lost_parcels: any[];
  parcels: any[];
  hub_id: string;
  shop_id: number;
  client_id: number;
  from_name: string;
  from_phone: string;
  from_address: string;
}
export interface Comment {
  ticket_id: string;
  content: string;
  created_by_id: string;
  created_by_name: string;
  created_by_title: string;
  created_time: string;
  last_updated_time: string;
  files?: ItemFile[];
}

export interface LostParcelTicket {
  code: string;
  action_type: number;
  status: number;
  order_code: string;
  order_status: string;
  lost_parcels:
    | [
        {
          code: string;
          name: string;
          lost: boolean;
        }
      ]
    | null;
  parcels: string[] | null;
  hub_id: string;
  shop_id: number;
  from_address: string;
  created_by_id: string;
  created_by_name: string;
  created_time: string;
  from_name?: string;
  from_phone?: string;
}

export interface History {
  action_id: string;
  created_by_id: string;
  created_by_name: string;
  created_time: string;
}

export interface ResultUpload {
  fileName: string;
  fileId: string;
  type: string;
  size: number;
}

export interface Parcel {
  code: string;
  name: string;
  status: string;
}
export interface OrderInfoLostParcel {
  order_code: string;
  order_status: string;
  parcels: Parcel[];
  hub_id: string;
  shop_id: number;
  client_id: number;
  from_name: string;
  from_phone: string;
  from_address: string;
}

export interface SearchTicketLostParcel {
  order_code?: string;
  status?: number;
  action_type?: number;
  from_created_time?: string;
  to_created_time?: string;
}

export interface SuggestTransport {
  combinedKey: string;
  packageCodes?: string[];
  routeType: string;
  toLocationId: string;
  routeCode: string;
  total?: number;
  packages?: any[];
  toLocationName?: string;
  countPackages?: number;
  showWarning?: boolean;
  isException?: boolean;
}

export interface ExportedPackage {
  createdTime: string;
  expectedArrivalTime: string;
  id: string;
  lastUpdatedTime: string;
  orderCode: string;
  orgCode: string;
  packType: string;
  packageCode: string;
  partner: string;
  pickupAtStop: string;
  pickupById: string;
  pickupByName: string;
  pickupSessionCode: string;
  pickupTime: string;
  routeCode: string;
  routeType: string;
  status: string;
  toLocationID: string;
  transportationCode: string;
}

export interface MultiPackageInformation {
  code: string;
  createdById: string;
  createdByName: string;
  createdTime: string;
  currentLocationId: string;
  currentLocationName: string;
  currentLocationType: string;
  fromLocationId: string;
  fromLocationName: string;
  fromLocationType: string;
  height: number;
  id: string;
  lastUpdatedTime: string;
  length: number;
  next_hub_id: string;
  next_hub_name: string;
  orgCode: string;
  packType: string;
  routeCode: string;
  routeType: string;
  sortStatus: string;
  status: string;
  toLocationId: string;
  toLocationName: string;
  toLocationType: string;
  width: number;
}

export interface ImportedPackage {
  createdTime: string;
  dropoffAtStop: string;
  dropoffById: string;
  dropoffByName: string;
  dropoffSessionCode: string;
  dropoffTime: string;
  expectedArrivalTime: string;
  id: string;
  lastUpdatedTime: string;
  orderCode: string;
  orgCode: string;
  packType: string;
  packageCode: string;
  parcelCodes: string[];
  partner: string;
  pickupAtStop: string;
  pickupById: string;
  pickupByName: string;
  pickupSessionCode: string;
  pickupTime: string;
  routeCode: string;
  routeType: string;
  status: string;
  toLocationID: string;
  transportationCode: string;
}
