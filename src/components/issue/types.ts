export interface Issue {
    uri: string
    number: string
    authorId: string
    projectId: string
    categoryId: string
    title: string
    description: string
    type: 'improvement' | 'feature' | 'bug' | 'enhancement' | 'custom'
    storage: 'github' | 'cascadefund'
}