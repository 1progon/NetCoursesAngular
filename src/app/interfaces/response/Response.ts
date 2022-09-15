export interface Response<T> {
  data: T;
  responseCode: number;
  message?: string;
}
