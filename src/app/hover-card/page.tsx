import { Button } from "@/components/ui/button"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

const HoverCardDemo = () => {
    return (
        <HoverCard openDelay={10} closeDelay={100}>
            <HoverCardTrigger asChild>
                <Button variant="outline" className="w-25" >Hover Here</Button>
            </HoverCardTrigger>
            <HoverCardContent className="flex w-64 flex-col gap-0.5" side="right">
                <div className="font-semibold">Title</div>
                <div>descriptionnnnnnnnn</div>
                <div className="text-muted-foreground mt-1 text-xs">
Footer
                </div>
            </HoverCardContent>
        </HoverCard>
    )
}

export default HoverCardDemo