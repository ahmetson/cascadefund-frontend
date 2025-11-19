import { motion } from "framer-motion";
import { getIcon } from "@/components/icon";

export enum Accent {
    monetizationPrimaryAccent = "monetizationPrimaryAccent",
    formalResponsibleCollaborationAccent = "formalResponsibleCollaborationAccent",
    questSystemAccent = "questSystemAccent",
    timeSavedProjectManagementAccent = "timeSavedProjectManagementAccent",
    // visionaryAccent = "visionaryAccent",
}

export const data: Record<Accent, {
    icon: string;
    title: string;
    subtitle: string;
    description: string;
    howTo?: React.ReactNode;
}> = {
    [Accent.monetizationPrimaryAccent]: {
        icon: 'money',
        title: "Get help with branding and monetization",
        subtitle: "Turning open-source development into a recognized, collaborative, and financially sustainable pursuit.",
        description: "For maintainers, helping with PRs and monetization.",
        howTo: <div>CascadeFund is a social media, where people interact with your work in a formalized way.<br />
            <br />Rating rewards highlight your work, boosts project trust. <br />While, self-checking todo list makes everything almost automatic.</div>,
    },
    [Accent.formalResponsibleCollaborationAccent]: {
        icon: 'project',
        title: "Collaborate in contractlike-workflow",
        subtitle: "Formal definition, and requirements for issues, and adapted century old practice for responsible collaboration. Inspired by government/private contractlike workflows.",
        description: "Formal definition, and requirements for issues, and adapted century old practice for responsible collaboration. Inspired by government/private contractlike workflows.",
        howTo: <motion.ul className="space-y-3">
            <motion.li className="flex items-start gap-3 ml-4">
                <span className="mt-1 flex-shrink-0">
                    {getIcon({ iconType: 'project', className: 'w-5 h-5 text-blue-500' })}
                </span>
                <span>Turn your open-source projects into structured, accountable collaborations:</span>
            </motion.li>
            <motion.li className="flex items-start gap-3 ml-4">
                <span className="mt-1 flex-shrink-0">
                    {getIcon({ iconType: 'issue', className: 'w-5 h-5 text-purple-500' })}
                </span>
                <span>Users open issues, contributors submit patches, and maintainers review and release them.</span>
            </motion.li>
            <motion.li className="flex items-start gap-3 ml-4">
                <span className="mt-1 flex-shrink-0">
                    {getIcon({ iconType: 'work', className: 'w-5 h-5 text-green-500' })}
                </span>
                <span>A self-checking to-do automates the routine, making formal process seamless.</span>
            </motion.li>
        </motion.ul>,
    },
    [Accent.questSystemAccent]: {
        icon: 'play',
        title: "Use gamified guide",
        subtitle: "Turning open-source development into a recognized, collaborative, and financially sustainable pursuit.",
        description: "Turning open-source development into a recognized, collaborative, and financially sustainable pursuit.",
        howTo: <motion.div className="space-y-3">
            Here is how collaboration is implemented as a gamified guide within the CascadeFund:
            <ul className="space-y-3 mt-2">
                <li>🔌 Todo Tasks are automatically generated after certain user actions. 😌 You don't have to create them yourself.</li>
                <li>🎮 It wraps these tasks into an interactive mini-player called "Smart"</li>
                <li>🚀 When you "play", the system opens the exact page 📄, scrolls to the right section ✍️, and focuses the target element ⚡.</li>
                <li>🤖 Adds 3 the AI suggestions, for quick solution.</li>
            </ul>
        </motion.div>
    },
    [Accent.timeSavedProjectManagementAccent]: {
        icon: 'ten-pm-ten-min',
        title: "Manage projects with self-checking todo list",
        subtitle: "Turning open-source development into a recognized, collaborative, and financially sustainable pursuit.",
        description: "Turning open-source development into a recognized, collaborative, and financially sustainable pursuit.",
        howTo: <motion.div className="space-y-3">
            In CascadeFund collaboration is done using todo tasks.
            <ul className="space-y-3 mt-2">
                <li>🔌 Todo Tasks are automatically generated after certain user actions. 😌 You don't have to create them yourself.</li>
                <li>🎮 It wraps these tasks into an interactive mini-player called "Smart"</li>
                <li>🚀 When you "play", the system opens the exact page 📄, scrolls to the right section ✍️, and focuses the target element ⚡.</li>
                <li>🤖 +3 the AI suggestions, for quick solution.</li>
                <li>🏆 When a step is done, CascadeFund automatically ✅, marks it complete, updates your progress 📈, and even the tasks for next people.
                    And as a super bonus 🤖 it adds 3 AI suggestions for every step 💡, giving you quick-click options so you’re never stuck and reducing routine even more.
                </li>
            </ul>
        </motion.div>
    },
    // [Accent.visionaryAccent]: {
    // title1: "The first platform for maintainers to grow PRs and support",
    // title2: "Turning open-source development into a recognized, collaborative, and financially sustainable pursuit.",
    // },
}


export const features = [
    {
        // icon: <Code2 className="w-8 h-8" />,
        title: "Collaborative Platform",
        description: "Unified workspace for developers, contributors, and users",
        platform: "github"
    },
    {
        // icon: <Users className="w-8 h-8" />,
        title: "Gamified System",
        description: "Collaboration is two click tasks. Project management = 10 minutes of daily guided tasks.",
        platform: "bitbucket"
    },
    {
        // icon: <Users className="w-8 h-8" />,
        title: "Non-competitive Rating",
        description: "Rating represents how you work with others and on which types of projects.",
        platform: "github"
    },
    {
        // icon: <Zap className="w-8 h-8" />,
        title: "Sustainable Growth",
        description: "Financial sustainability through innovative gamified paywall.",
        platform: "bitbucket"
    }
]

export const accentToUrl: Record<Accent, string> = {
    [Accent.monetizationPrimaryAccent]: '/',
    [Accent.formalResponsibleCollaborationAccent]: '/meta/collaboration',
    [Accent.questSystemAccent]: '/meta/quests',
    [Accent.timeSavedProjectManagementAccent]: '/meta/management',
    // [Accent.visionaryAccent]: '/meta/vision',
}

export type SocialLinkType = 'github' | 'telegram' | 'youtube' | 'twitter' | 'bluesky'

export interface SocialLink {
    url: string
    type: SocialLinkType
    useCustomIcon?: boolean // true for bluesky (uses getIcon), false for react-icons
}

export const socialLinks: SocialLink[] = [
    {
        url: 'https://github.com/ara-foundation/cascadefund-frontend',
        type: 'github',
        useCustomIcon: false,
    },
    {
        url: 'https://t.me/arasangha',
        type: 'telegram',
        useCustomIcon: false,
    },
    {
        url: 'https://www.youtube.com/@medet-ahmetson',
        type: 'youtube',
        useCustomIcon: false,
    },
    {
        url: 'https://x.com/ara_foundation_',
        type: 'twitter',
        useCustomIcon: false,
    },
    {
        url: 'https://bsky.app/profile/cascadefund.bsky.social',
        type: 'bluesky',
        useCustomIcon: true,
    },
]