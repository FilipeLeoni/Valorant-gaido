export interface Tiers {
    tierName: string
    divisionName: string
    largeIcon: string
    tier: string
}

export interface Rank {
    uuid: string
    assetObjectName: string
    tiers: Tiers[]
}

