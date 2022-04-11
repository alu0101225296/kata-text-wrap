export class Integer {
  private readonly value: number;

  constructor(value: number) {
    this.value = value;
  }

  add(num: Integer): Integer {
    return new Integer(this.value + num.value);
  }

  isGreaterThan(value: Integer): boolean {
    return this.value > value.value;
  }

  isGreaterOrEqualThan(value: Integer): boolean {
    return this.value >= value.value;
  }

  isLessOrEqualThan(value: Integer): boolean {
    return this.value <= value.value;
  }

  isEqualTo(value: Integer): boolean {
    return this.value == value.value;
  }

  getValue(): number {
    return this.value;
  }
}
