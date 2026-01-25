"use client"

import * as React from "react"
import {
  AudioWaveform,
  BicepsFlexed,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  Music,
  PieChart,
  School,
  Settings2,
  SquareTerminal,
  UserRoundSearch,
  Vote,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "Nischal Khanal",
    email: "nischalkhanal.satri@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Nischal",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Nischal",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Nischal",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "About",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "CV",
          url: "https://nischalkhanal7.com.np/",
        },
      ],
    },
    {
      title: "Contact",
      url: "#",
      icon: UserRoundSearch,
      items: [
        {
          title: "Gmail",
          url: "https://mail.google.com/mail/u/4/#inbox?compose=new",
        },
        {
          title: "Phone",
          url: "#",
        },

      ],
    },
    {
      title: "Connect with me",
      url: "#",
      icon: Vote,
      items: [
        {
          title: "Facebook",
          url: "https://www.facebook.com/nischal.khanal.777/",
        },
        {
          title: "Insta",
          url: "https://www.instagram.com/nshl_knl",
        },
        {
          title: "Github",
          url: "https://github.com/nshlxyknl",
        },
        {
          title: "LinkedIn",
          url: "https://www.linkedin.com/in/nischalnischal/",
        },
      ],
    },
    {
      title: "Skills",
      url: "#",
      icon: BicepsFlexed,
      items: [
        {
          title: "JS",
          url: "#",
        },
        {
          title: "React",
          url: "#",
        },
        {
          title: "Node",
          url: "#",
        },
        {
          title: "MongoDb",
          url: "#",
        },
      ],
    },
   
  ],
  projects: [
    {
      name: "RoomBooking System",
      url: "https://github.com/nshlxyknl/RoomBookingSystem",
      icon: School,
    },
    {
      name: "E-commerce",
      url: "https://github.com/nshlxyknl/BookEcom",
      icon: PieChart,
    },
    {
      name: "Music-play",
      url: "https://github.com/nshlxyknl/music-play",
      icon: Music,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
