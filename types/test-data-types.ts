export interface TestDataItem {
  id: number;
  name: string;
  value: string;
}

export interface TestDataResponse {
  data: TestDataItem[];
  success: boolean;
  message?: string;
}