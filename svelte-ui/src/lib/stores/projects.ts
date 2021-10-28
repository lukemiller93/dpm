/* eslint-disable no-var */
import { sanityClient } from './../sanityClient';
import { writable } from 'svelte/store'

export const projects = writable([])

export async function getData() {
  // set cache lifetime in seconds
  const cacheLife = 30000
  // get cached data from localStorage
  const cachedData = JSON.parse(localStorage.getItem('projects'))
  if(cachedData) {
    // cachedData = JSON.parse(cachedData)
    var expired = parseInt(Date.now() / 1000) - cachedData.cacheTime > cacheLife
  }
  // if cached data available and not expired, return them
  if(cachedData && !expired) {
    return cachedData.projects
  } else {
    // otherwise fetch data from api then save data in localStorage
    const query = `*[_type == 'project'][0...5]{_id, slug, title }| order(_createdAt asc)`;
    const res = await sanityClient.fetch(query)
    const freshProjects = await res

    const json = {data: freshProjects, cacheTime: parseInt( Date.now() / 1000)}
    localStorage.setItem('projects', JSON.stringify(json))

    return freshProjects
  }
}
