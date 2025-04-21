export class Result {
  constructor(
    readonly value: any,
    readonly errors: string[] = []
  ) {}

  get ok(): boolean {
    return this.errors.length === 0;
  }

  get failure(): boolean {
    return this.errors.length > 0;
  }

  static try(fn: () => any): Result {
    try {
      return new Result(fn());
    } catch (error) {
      return new Result(null, [
        error instanceof Error ? error.message : "Unknown error",
      ]);
    }
  }

  static combine(results: Result[]): Result {
    const errors = results.flatMap((result) => result.errors);
    return new Result(null, errors);
  }

  //   static combine(results: Result[]): Result {
  //     const errors: string[] = [];
  //     const values: any[] = [];

  //     for (const result of results) {
  //       if (result.failure) {
  //         errors.push(...result.errors);
  //       } else {
  //         values.push(result.value);
  //       }
  //     }

  //     return new Result(values, errors);
  //   }
}
