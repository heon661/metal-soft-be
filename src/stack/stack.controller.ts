import { Controller } from '@nestjs/common';
import { StackService } from './stack.service';
import { Body, Delete, Get, Post } from '@nestjs/common';

@Controller('stack')
export class StackController {
  constructor(private readonly stackService: StackService) {}

  @Post()
  push(@Body('number') number: number): void {
    return this.stackService.add(number);
  }

  @Delete()
  pop(): number | null {
    return this.stackService.pop();
  }

  @Get()
  get(): number[] {
    return this.stackService.get();
  }

  @Delete('clear')
  clear(): void {
    return this.stackService.clear();
  }
}
