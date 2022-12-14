import api from './api'
import { Agent } from '../../entities/agent';
import { AgentResponse, GetAgentsParams, WeaponResponse } from './types';
import { Weapon } from '../../entities/weapon';

export const getAgents = async (params: GetAgentsParams): Promise<Agent[]> => {
    const { data } = await api.get<AgentResponse>("/agents", { params });
    return data.data
}

export const getWeapons = async (): Promise<Weapon[]> => {
    const { data } = await api.get<WeaponResponse>("/weapons");
    return data.data
}