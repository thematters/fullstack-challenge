export const devCorsOptions = {
  credentials: true,
  origin: (_: any, callback: any) => {
    callback(null, true);
  },
};
