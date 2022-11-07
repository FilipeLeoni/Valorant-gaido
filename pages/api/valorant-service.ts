import api from './api'
import { Agent } from '../entities/agent';
import { AgentResponse, GetAgentsParams } from './types';

export const getAgents = async (params: GetAgentsParams): Promise<Agent[]> => {
    const { data } = await api.get<AgentResponse>("/agents", { params });
    return data.data
}