export interface CastMember {
  id: string
  name: string
  role: string
  description: string
  avatar: string
}

export interface StoryStep {
  id: string
  number: number
  title: string
  description: string
  icon: string
}

export interface Scenario {
  id: string
  title: string
  description: string
  characters: Array<{
    name: string
    role: string
    avatar: string
  }>
}
