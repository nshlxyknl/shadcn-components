"use client"

import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { Bell, RefreshCcwIcon } from "lucide-react"

const  EmptyMuted=()=> {
  return (
    <Empty className="bg-muted/30 h-full">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Bell />
        </EmptyMedia>
        <EmptyTitle>No Items here </EmptyTitle>
        <EmptyDescription className="max-w-xs text-pretty">
          You&apos;re all caught up. Refresh to see.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline" onClick={()=>{ window.location.reload()}}>
          <RefreshCcwIcon /> 
          Refresh
        </Button>
      </EmptyContent>
    </Empty>
  )
}

export default EmptyMuted