import type { CSSProperties } from "react"

export interface Pattern {
  id: string
  name: string
  description?: string
  badge?: "New" | " "
  style: CSSProperties
  code: string
}