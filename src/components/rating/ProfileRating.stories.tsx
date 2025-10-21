import type { Meta, StoryObj } from '@storybook/react'
import ProfileRating from './ProfileRating'

const meta: Meta<typeof ProfileRating> = {
    title: 'Components/Rating/ProfileRating',
    component: ProfileRating,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A rating component that displays user level, ranking, and rating type with color-coded stars and trophies.'
            }
        }
    },
    argTypes: {
        ratingType: {
            control: { type: 'select' },
            options: ['influencer', 'maintainer', 'contributor', 'all'],
            description: 'The type of rating being displayed'
        },
        lvl: {
            control: { type: 'number', min: 1, max: 100 },
            description: 'Current level of the user'
        },
        maxLvl: {
            control: { type: 'number', min: 1, max: 100 },
            description: 'Maximum possible level'
        },
        top: {
            control: { type: 'text' },
            description: 'Top ranking position (can be number or string)'
        }
    },
    tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof ProfileRating>

// Default story
export const Default: Story = {
    args: {
        ratingType: 'influencer',
        lvl: 5,
        maxLvl: 10,
        top: 15
    }
}

// High level influencer
export const HighLevelInfluencer: Story = {
    args: {
        ratingType: 'influencer',
        lvl: 8,
        maxLvl: 10,
        top: 3
    }
}

// Top contributor
export const TopContributor: Story = {
    args: {
        ratingType: 'contributor',
        lvl: 10,
        maxLvl: 10,
        top: 1
    }
}

// Maintainer with good ranking
export const Maintainer: Story = {
    args: {
        ratingType: 'maintainer',
        lvl: 6,
        maxLvl: 15,
        top: 25
    }
}

// Bronze tier ranking
export const BronzeTier: Story = {
    args: {
        ratingType: 'contributor',
        lvl: 3,
        maxLvl: 10,
        top: 75
    }
}

// Silver tier ranking
export const SilverTier: Story = {
    args: {
        ratingType: 'influencer',
        lvl: 4,
        maxLvl: 8,
        top: 35
    }
}

// Gold tier ranking
export const GoldTier: Story = {
    args: {
        ratingType: 'maintainer',
        lvl: 7,
        maxLvl: 10,
        top: 5
    }
}

// Herald tier (101+)
export const HeraldTier: Story = {
    args: {
        ratingType: 'all',
        lvl: 2,
        maxLvl: 5,
        top: 150
    }
}

// Maximum level achieved
export const MaxLevel: Story = {
    args: {
        ratingType: 'influencer',
        lvl: 10,
        maxLvl: 10,
        top: 2
    }
}

// Low level, high ranking
export const LowLevelHighRanking: Story = {
    args: {
        ratingType: 'contributor',
        lvl: 2,
        maxLvl: 20,
        top: 8
    }
}

// String top value
export const StringTopValue: Story = {
    args: {
        ratingType: 'maintainer',
        lvl: 5,
        maxLvl: 12,
        top: '42'
    }
}

// All rating types showcase
export const AllRatingTypes: Story = {
    render: () => (
        <div className="space-y-4">
            <div>
                <h3 className="text-lg font-semibold mb-2">Influencer</h3>
                <ProfileRating ratingType="influencer" lvl={7} maxLvl={10} top={12} />
            </div>
            <div>
                <h3 className="text-lg font-semibold mb-2">Maintainer</h3>
                <ProfileRating ratingType="maintainer" lvl={5} maxLvl={8} top={28} />
            </div>
            <div>
                <h3 className="text-lg font-semibold mb-2">Contributor</h3>
                <ProfileRating ratingType="contributor" lvl={9} maxLvl={15} top={6} />
            </div>
            <div>
                <h3 className="text-lg font-semibold mb-2">All</h3>
                <ProfileRating ratingType="all" lvl={3} maxLvl={5} top={95} />
            </div>
        </div>
    )
}

// Color progression showcase
export const ColorProgression: Story = {
    render: () => (
        <div className="space-y-3">
            <h3 className="text-lg font-semibold mb-4">Level Color Progression (Yellow to Dark Rose)</h3>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(level => (
                <div key={level} className="flex items-center space-x-2">
                    <span className="w-8 text-sm">Lvl {level}:</span>
                    <ProfileRating ratingType="influencer" lvl={level} maxLvl={10} top={50} />
                </div>
            ))}
        </div>
    )
}

// Trophy color showcase
export const TrophyColorShowcase: Story = {
    render: () => (
        <div className="space-y-3">
            <h3 className="text-lg font-semibold mb-4">Trophy Color by Ranking</h3>
            <div className="space-y-2">
                <div className="flex items-center space-x-2">
                    <span className="w-16 text-sm">Top 1-10:</span>
                    <ProfileRating ratingType="influencer" lvl={8} maxLvl={10} top={3} />
                </div>
                <div className="flex items-center space-x-2">
                    <span className="w-16 text-sm">Top 11-50:</span>
                    <ProfileRating ratingType="maintainer" lvl={6} maxLvl={10} top={25} />
                </div>
                <div className="flex items-center space-x-2">
                    <span className="w-16 text-sm">Top 51-100:</span>
                    <ProfileRating ratingType="contributor" lvl={4} maxLvl={10} top={75} />
                </div>
                <div className="flex items-center space-x-2">
                    <span className="w-16 text-sm">Top 101+:</span>
                    <ProfileRating ratingType="all" lvl={2} maxLvl={10} top={150} />
                </div>
            </div>
        </div>
    )
}
