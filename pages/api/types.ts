import { Agent } from "../../entities/agent"
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