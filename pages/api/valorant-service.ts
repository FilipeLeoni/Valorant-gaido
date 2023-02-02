import api from './api'
import { Agent } from '../../entities/agent';
import { AgentResponse, GetAgentsParams, MapResponse, RankResponse, WeaponResponse } from './types';
import { Weapon } from '../../entities/weapon';
import { Rank } from '../../entities/rank';
import { Map } from '../../entities/map';

export const getAgents = async (params: GetAgentsParams): Promise<Agent[]> => {
    const { data } = await api.get<AgentResponse>("/agents", { params });
    return data.data
}

export const getWeapons = async (): Promise<Weapon[]> => {
    const { data } = await api.get<WeaponResponse>("/weapons");
    return data.data
}

export const getMaps = async (): Promise<Map[]> => {
    const { data } = await api.get<MapResponse>("/maps");
    return data.data
}

export const getRanks = async (): Promise<Rank[]> => {
    const { data } = await api.get<RankResponse>("/competitivetiers");
    return data.data
}