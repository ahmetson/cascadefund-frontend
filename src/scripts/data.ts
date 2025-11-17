export enum Accent {
    monetizationPrimaryAccent = "monetizationPrimaryAccent",
    formalResponsibleCollaborationAccent = "formalResponsibleCollaborationAccent",
    questSystemAccent = "questSystemAccent",
    timeSavedProjectManagementAccent = "timeSavedProjectManagementAccent",
    visionaryAccent = "visionaryAccent",
}

export const data: Record<Accent, {
    title1: string;
    title2: string;
}> = {
    [Accent.monetizationPrimaryAccent]: {
        title1: "For maintainers, helping with PRs and monetization.",
        title2: "Turning open-source development into a recognized, collaborative, and financially sustainable pursuit.",
    },
    [Accent.formalResponsibleCollaborationAccent]: {
        title1: "A better procedure between users and maintainers inspired by government/private contractor models.",
        title2: "Automatic formal definition, and requirements for issues, and adapted century old practice for responsible collaboration.",
    },
    [Accent.questSystemAccent]: {
        title1: "The first platform for maintainers to grow PRs and support",
        title2: "Turning open-source development into a recognized, collaborative, and financially sustainable pursuit.",
    },
    [Accent.timeSavedProjectManagementAccent]: {
        title1: "The first platform for maintainers to grow PRs and support",
        title2: "Turning open-source development into a recognized, collaborative, and financially sustainable pursuit.",
    },
    [Accent.visionaryAccent]: {
        title1: "The first platform for maintainers to grow PRs and support",
        title2: "Turning open-source development into a recognized, collaborative, and financially sustainable pursuit.",
    },
}
