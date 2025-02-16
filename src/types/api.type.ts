type PaginationType = {
  meta: {
    page: number;
    page_size: number;
    count: number;
    page_count: number;
  };
};

/* eslint-disable-next-line  @typescript-eslint/no-explicit-any */
export type DefaultResponseType<T = any> = {
  data: T;
};

/* eslint-disable-next-line  @typescript-eslint/no-explicit-any */
export type DefaultResponsePaginationType<T = any> = PaginationType & {
  data: T;
};
