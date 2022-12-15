import { DynamicModule, Provider } from '@nestjs/common';

export class GlobalModule {
  static forRoot(providers: Provider[]): DynamicModule {
    return {
      module: GlobalModule,
      global: true,
      providers,
      exports: providers,
    };
  }
}
