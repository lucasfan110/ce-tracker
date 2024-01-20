export type Result<T, E> =
    | {
          type: "ok";
          value: T;
      }
    | {
          type: "error";
          error: E;
      };
