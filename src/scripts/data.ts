export enum Accent {
    monetizationPrimaryAccent = "monetizationPrimaryAccent",
    formalResponsibleCollaborationAccent = "formalResponsibleCollaborationAccent",
    questSystemAccent = "questSystemAccent",
    timeSavedProjectManagementAccent = "timeSavedProjectManagementAccent",
    // visionaryAccent = "visionaryAccent",
}

export const data: Record<Accent, {
    title: string;
    subtitle: string;
    description: string;
}> = {
    [Accent.monetizationPrimaryAccent]: {
        title: "Get help with branding and monetization.",
        subtitle: "Turning open-source development into a recognized, collaborative, and financially sustainable pursuit.",
        description: "For maintainers, helping with PRs and monetization.",
    },
    [Accent.formalResponsibleCollaborationAccent]: {
        title: "Standardized contractlike-workflow",
        subtitle: "Formal definition, and requirements for issues, and adapted century old practice for responsible collaboration. Inspired by government/private contractlike workflows.",
        description: "Formal definition, and requirements for issues, and adapted century old practice for responsible collaboration. Inspired by government/private contractlike workflows.",
    },
    [Accent.questSystemAccent]: {
        title: "Gamified, with non-competitive rating system.",
        subtitle: "Turning open-source development into a recognized, collaborative, and financially sustainable pursuit.",
        description: "Turning open-source development into a recognized, collaborative, and financially sustainable pursuit.",
    },
    [Accent.timeSavedProjectManagementAccent]: {
        title: "Self-checking smart todo list as project management.",
        subtitle: "Turning open-source development into a recognized, collaborative, and financially sustainable pursuit.",
        description: "Turning open-source development into a recognized, collaborative, and financially sustainable pursuit.",
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
    [Accent.visionaryAccent]: '/meta/vision',
}