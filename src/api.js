import {seedPets, hydratePet} from './data.js';
const config=window.PAWFECT_CONFIG||{};
const key='pawfect-pets';
const tokenKey='pawfect-token';
const local=()=>{const saved=localStorage.getItem(key);if(saved)return JSON.parse(saved);const pets=seedPets.map(hydratePet);localStorage.setItem(key,JSON.stringify(pets));return pets};
const save=pets=>localStorage.setItem(key,JSON.stringify(pets));
async function request(path,options={}){const headers={'Content-Type':'application/json',...(config.apiKey?{'X-Noroff-API-Key':config.apiKey}:{}),...(sessionStorage.getItem(tokenKey)?{Authorization:`Bearer ${sessionStorage.getItem(tokenKey)}`}:{})};const response=await fetch(`${config.apiBaseUrl}${path}`,{...options,headers:{...headers,...options.headers}});const body=await response.json().catch(()=>({}));if(!response.ok)throw new Error(body.errors?.[0]?.message||body.message||`Request failed (${response.status})`);return body}
export async function getPets(){if(config.apiBaseUrl)return (await request('/pets')).data;return local()}
export async function getPet(id){if(config.apiBaseUrl)return (await request(`/pets/${encodeURIComponent(id)}`)).data;const pet=local().find(p=>p.id===id);if(!pet)throw new Error('Pet not found');return pet}
export async function createPet(input){if(config.apiBaseUrl)return (await request('/pets',{method:'POST',body:JSON.stringify(input)})).data;const pets=local();const pet=hydratePet({...input,id:`${input.name.toLowerCase().replace(/[^a-z0-9]+/g,'-')}-${Date.now().toString(36)}`});pets.unshift(pet);save(pets);return pet}
export async function updatePet(id,input){if(config.apiBaseUrl)return (await request(`/pets/${encodeURIComponent(id)}`,{method:'PUT',body:JSON.stringify(input)})).data;const pets=local(),i=pets.findIndex(p=>p.id===id);if(i<0)throw new Error('Pet not found');pets[i]={...pets[i],...input,updated:new Date().toISOString()};save(pets);return pets[i]}
export async function deletePet(id){if(config.apiBaseUrl){await request(`/pets/${encodeURIComponent(id)}`,{method:'DELETE'});return}save(local().filter(p=>p.id!==id))}
export async function authenticate(mode,input){if(config.apiBaseUrl){const result=await request(`/auth/${mode}`,{method:'POST',body:JSON.stringify(input)});sessionStorage.setItem(tokenKey,result.data.accessToken);sessionStorage.setItem('pawfect-user',JSON.stringify(result.data));return result.data}const demo={name:input.name||input.email.split('@')[0],email:input.email,accessToken:'demo-session'};sessionStorage.setItem(tokenKey,demo.accessToken);sessionStorage.setItem('pawfect-user',JSON.stringify(demo));return demo}
export const isLoggedIn=()=>Boolean(sessionStorage.getItem(tokenKey));
export const logout=()=>{sessionStorage.removeItem(tokenKey);sessionStorage.removeItem('pawfect-user')};
