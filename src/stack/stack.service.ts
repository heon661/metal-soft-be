import { Injectable } from '@nestjs/common';

@Injectable()
export class StackService {
  private stack: number[] = [];

  add(number: number): void {
    this.stack.push(number);
  }

  pop(): number | null {
    if (this.stack.length === 0) return null;
    return this.stack.pop() || null;
  }

  get(): number[] {
    return this.stack;
  }

  clear(): void {
    this.stack = [];
  }
}

