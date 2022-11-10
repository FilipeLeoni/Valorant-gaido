import { Agent } from "../../entities/agent"

export interface AgentResponse {
    status: string
    data: Agent[]
}

export interface GetAgentsParams {
    isPlayableCharacter: boolean
}
