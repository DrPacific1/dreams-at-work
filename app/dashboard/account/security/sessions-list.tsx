"use client"

import { Cross2Icon } from "@radix-ui/react-icons"
import { formatDistanceToNow } from "date-fns"
import { toast } from "sonner"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { SubmitButton } from "@/components/submit-button"

import { revokeSession } from "./actions"

type Session = {
  id: string
  last_interacted_at: string
  device?: {
    last_user_agent?: string
    last_ip?: string
  }
}

function parseUA(ua: string): string {
  const os = /Windows/.test(ua)
    ? "Windows"
    : /Mac OS/.test(ua)
      ? "Mac OS"
      : /iPhone|iPad/.test(ua)
        ? "iOS"
        : /Android/.test(ua)
          ? "Android"
          : /Linux/.test(ua)
            ? "Linux"
            : "Unknown"

  const browser = /Edg\//.test(ua)
    ? "Edge"
    : /Chrome\//.test(ua)
      ? "Chrome"
      : /Firefox\//.test(ua)
        ? "Firefox"
        : /Safari\//.test(ua)
          ? "Safari"
          : "Browser"

  return `${os} · ${browser}`
}

export function SessionsList({ sessions }: { sessions: Session[] }) {
  if (!sessions.length) return null

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sessions</CardTitle>
        <CardDescription>
          The following sessions are currently active with your account.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <div className="grid grid-cols-[1fr_1fr_1fr_auto] gap-x-4 border-b px-6 pb-2 text-xs font-medium text-muted-foreground">
          <span>Device</span>
          <span>Location</span>
          <span>Last seen</span>
          <span />
        </div>
        {sessions.map((s, idx) => (
          <div key={s.id}>
            {idx > 0 && <Separator />}
            <div className="grid grid-cols-[1fr_1fr_1fr_auto] items-center gap-x-4 px-6 py-4">
              <span className="text-sm font-medium">
                {s.device?.last_user_agent
                  ? parseUA(s.device.last_user_agent)
                  : "Unknown device"}
              </span>
              <span className="text-sm text-muted-foreground">
                {s.device?.last_ip ?? "—"}
              </span>
              <span className="text-sm text-muted-foreground">
                {formatDistanceToNow(new Date(s.last_interacted_at), {
                  addSuffix: true,
                })}
              </span>
              <form
                action={async (formData: FormData) => {
                  const { error } = await revokeSession(formData)
                  if (error) {
                    toast.error(error)
                  } else {
                    toast.success("Session revoked.")
                  }
                }}
              >
                <input type="hidden" name="session_id" value={s.id} />
                <SubmitButton
                  variant="outline"
                  size="icon"
                  className="size-8 shrink-0"
                >
                  <Cross2Icon className="size-3.5" />
                </SubmitButton>
              </form>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
