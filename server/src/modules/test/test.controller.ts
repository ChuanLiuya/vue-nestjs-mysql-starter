import { Controller, Get, Param } from '@nestjs/common';
import { testData, TestItem } from './mocks/test-data';

@Controller('test')
export class TestController {
  @Get()
  getHello(): string {
    return 'Hello World';
  }

  @Get(':id')
  getById(@Param('id') id: string): TestItem | { message: string } {
    const item = testData.find((t) => t.id === Number(id));
    if (!item) {
      return { message: `ID 为 ${id} 的数据不存在` };
    }
    return item;
  }
}
