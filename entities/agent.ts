export interface AgentRole {
    displayName: string
    displayIcon: string
}

export interface Agent {
    uuid: string
    displayName: string
    description: string
    displayIcon: string
    displayIconSmall: string
    background: string
    fullPortraitV2: string
    role: AgentRole
}

export interface AgentAbilities {
    displayName: string
    description: string
    displayIcon: string
}
