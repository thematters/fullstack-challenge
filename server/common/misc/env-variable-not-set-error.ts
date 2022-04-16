export class EnvVariableNotSetError extends Error {
  constructor(variableName: string) {
    super(`Environment variable "${variableName}" is not set.`);
  }
}
