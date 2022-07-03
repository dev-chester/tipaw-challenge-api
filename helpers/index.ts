export const successResponse = (
  req: any,
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: { (arg0: {}): any; new (): any };
    };
  },
  data = {},
  code = 200
) =>
  res.status(code).json({
    ...data,
  });

export const errorResponse = (
  req: any,
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: {
        (arg0: { code: number; message: string; error: {} }): any;
        new (): any;
      };
    };
  },
  message = "Something went wrong",
  code = 500,
  error = {}
) =>
  res.status(500).json({
    code,
    message,
    error,
  });
