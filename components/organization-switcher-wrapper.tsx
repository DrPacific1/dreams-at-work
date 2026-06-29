"use client"

import dynamic from "next/dynamic"

export const OrganizationSwitcherWrapper = dynamic(
  () =>
    import("@/components/organization-switcher").then(
      (m) => m.OrganizationSwitcher
    ),
  { ssr: false }
)
