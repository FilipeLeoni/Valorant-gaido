import { Agent } from "../../entities/agent"
import React, { SetStateAction } from 'react';
export interface AgentResponse {
    status: string
    data: Agent[]
}

export interface GetAgentsParams {
    isPlayableCharacter: boolean
}
export interface MenuProps {
    setActiveRole: React.Dispatch<SetStateAction<string>>
    agents: Agent[]
    setFiltered: React.Dispatch<SetStateAction<Agent[]>>
    activeRole: string
}