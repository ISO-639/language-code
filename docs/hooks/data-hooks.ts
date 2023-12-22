import { useMemo } from 'react'
import { useTheme } from 'nextra-theme-docs'
import { isServer } from '@bassist/utils'

export function useAppearance() {
  const { resolvedTheme } = useTheme()

  const isDark = useMemo(() => {
    if (isServer) return true
    return resolvedTheme === 'dark'
  }, [resolvedTheme])

  return {
    isDark,
  }
}
