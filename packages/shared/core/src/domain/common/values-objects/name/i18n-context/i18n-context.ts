export interface I18nContext {
  t(key: string, options?: { args?: Record<string, any> }): string
}
