export interface GetItemsDto<T> {
  limit: number;
  offset: number;
  count: number;
  items: T[];
}
