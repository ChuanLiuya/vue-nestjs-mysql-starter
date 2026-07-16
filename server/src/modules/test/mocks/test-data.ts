export interface TestItem {
  id: number;
  name: string;
  description: string;
}

export const testData: TestItem[] = [
  { id: 1, name: 'Item Alpha', description: '这是第一个测试数据项' },
  { id: 2, name: 'Item Beta', description: '这是第二个测试数据项' },
  { id: 3, name: 'Item Gamma', description: '这是第三个测试数据项' },
];
