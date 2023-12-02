export function debug(
  _target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor,
) {
  const original = descriptor.value

  descriptor.value = function (...args: any[]) {
    // @ts-ignore
    const { displayName, debug: debugging } = this

    try {
      return original.apply(this, args)
    } catch (e) {
      if (debugging) {
        const pluginName = '[LanguageMapping]'
        const prefix = displayName
          ? `${pluginName} (${displayName})`
          : `${pluginName}`
        console.error(`${prefix} Error occurred in ${propertyKey}: \n`, e)
      }
    }

    original.apply(this, args)
  }

  return descriptor
}
