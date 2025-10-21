import type { Meta, StoryObj } from '@storybook/react'
import ProfileRatingTooltip from './ProfileRatingPanel'
import { ProfileRatingProps, RatingType } from './ProfileRating'

const meta: Meta<typeof ProfileRatingTooltip> = {
    title: 'Components/Rating/ProfileRatingPanel',
    component: ProfileRatingTooltip,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A tooltip component that displays detailed rating information for different rating types with a professional design.',
            },
        },
    },
    argTypes: {
        topRating: {
            control: { type: 'select' },
            options: ['influencer', 'maintainer', 'contributor', 'persona'],
            description: 'The top rating type to display as the main trigger',
        },
    },
}

export default meta
type Story = StoryObj<typeof ProfileRatingTooltip>

// Sample data for different scenarios
const createSampleRatings = (topRating: RatingType): {
    ratings: {
        'influencer': ProfileRatingProps,
        'maintainer': ProfileRatingProps,
        'contributor': ProfileRatingProps,
        'persona': ProfileRatingProps
    },
    topRating: RatingType
} => ({
    ratings: {
        influencer: {
            ratingType: 'influencer',
            lvl: 8,
            maxLvl: 10,
            top: 15
        },
        maintainer: {
            ratingType: 'maintainer',
            lvl: 5,
            maxLvl: 10,
            top: 42
        },
        contributor: {
            ratingType: 'contributor',
            lvl: 12,
            maxLvl: 15,
            top: 8
        },
        persona: {
            ratingType: 'persona',
            lvl: 3,
            maxLvl: 10,
            top: 67
        }
    },
    topRating
})

// Default story with influencer as top rating
export const Default: Story = {
    args: createSampleRatings('influencer'),
}

// Maintainer as top rating
export const TopMaintainer: Story = {
    args: createSampleRatings('maintainer'),
}

// Contributor as top rating
export const TopContributor: Story = {
    args: createSampleRatings('contributor'),
}

// Persona as top rating
export const TopPersona: Story = {
    args: createSampleRatings('persona'),
}

// High level ratings
export const HighLevelRatings: Story = {
    args: {
        ratings: {
            influencer: {
                ratingType: 'influencer',
                lvl: 9,
                maxLvl: 10,
                top: 3
            },
            maintainer: {
                ratingType: 'maintainer',
                lvl: 8,
                maxLvl: 10,
                top: 7
            },
            contributor: {
                ratingType: 'contributor',
                lvl: 14,
                maxLvl: 15,
                top: 1
            },
            persona: {
                ratingType: 'persona',
                lvl: 7,
                maxLvl: 10,
                top: 12
            }
        },
        topRating: 'contributor'
    },
}

// Low level ratings
export const LowLevelRatings: Story = {
    args: {
        ratings: {
            influencer: {
                ratingType: 'influencer',
                lvl: 2,
                maxLvl: 10,
                top: 150
            },
            maintainer: {
                ratingType: 'maintainer',
                lvl: 1,
                maxLvl: 10,
                top: 200
            },
            contributor: {
                ratingType: 'contributor',
                lvl: 3,
                maxLvl: 15,
                top: 89
            },
            persona: {
                ratingType: 'persona',
                lvl: 1,
                maxLvl: 10,
                top: 300
            }
        },
        topRating: 'influencer'
    },
}

// Mixed ratings with different max levels
export const MixedMaxLevels: Story = {
    args: {
        ratings: {
            influencer: {
                ratingType: 'influencer',
                lvl: 5,
                maxLvl: 5,
                top: 25
            },
            maintainer: {
                ratingType: 'maintainer',
                lvl: 8,
                maxLvl: 20,
                top: 45
            },
            contributor: {
                ratingType: 'contributor',
                lvl: 3,
                maxLvl: 3,
                top: 12
            },
            persona: {
                ratingType: 'persona',
                lvl: 15,
                maxLvl: 25,
                top: 8
            }
        },
        topRating: 'persona'
    },
}

// Interactive playground
export const Playground: Story = {
    args: createSampleRatings('influencer'),
    parameters: {
        docs: {
            description: {
                story: 'Use the controls below to interact with different rating configurations and see how the tooltip adapts.',
            },
        },
    },
}
