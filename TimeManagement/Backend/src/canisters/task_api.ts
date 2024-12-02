import { Actor, HttpAgent } from '@dfinity/agent';
import { idlFactory } from './task_canister';

const agent = new HttpAgent();
const canisterId = "your-canister-id";
const taskCanister = Actor.createActor(idlFactory, { agent, canisterId });

export const getTasks = async () => {
  return await taskCanister.getTasks();
};

export const addTask = async (task: any) => {
  return await taskCanister.addTask(task);
};

export const getTask = async (id: string) => {
  return await taskCanister.getTask(BigInt(id));
};

export const updateTask = async (id: string, task: any) => {
  return await taskCanister.updateTask(BigInt(id), task);
};
