import { TestDataResponse } from '../../../types/test-data-types';

// testData как функция
export const testData = async (): Promise<TestDataResponse> => {
  try {
    // Здесь будет реальный API вызов
    const response = await fetch('/api/common');
    const data = await response.json();
    
    return {
      success: true,
      data: data.items || []
    };
  } catch (error) {
    return {
      success: false,
      data: [],
      message: 'Ошибка загрузки данных'
    };
  }
};

// Или тестовые данные для разработки
export const mockTestData = (): TestDataResponse => ({
  success: true,
  data: [
    { id: 1, name: 'Тест 1', value: 'значение 1' },
    { id: 2, name: 'Тест 2', value: 'значение 2' },
    { id: 3, name: 'Тест 3', value: 'значение 3' }
  ]
});