import { Agent } from "../../entities/agent"
import { Map } from "../../entities/map"
import { Rank } from "../../entities/rank"
import { Weapon } from "../../entities/weapon"

export interface AgentResponse {
    status: string
    data: Agent[]
}

export interface GetAgentsParams {
    isPlayableCharacter: boolean
}

export interface WeaponResponse {
    status: string
    data: Weapon[]
}

export interface MapResponse {
    status: string
    data: Map[]
}

export interface RankResponse {
    status: string
    data: Rank[]
}