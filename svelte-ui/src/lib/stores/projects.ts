import { FILTERED_PROJECTS_QUERY } from './../utils/queries';
import { client } from '$lib/graphql-client';
import { browser } from "$app/env";
/* eslint-disable no-var */
import { readable } from "svelte/store";
import type { Project } from '$lib/generated-graphql';


const projects  = readable<{allProject:Project[]}>({allProject: []}, (set) => {
// check if we're on the client
  if(browser) {
    // set cache life in seconds
    const cacheLife = 5
    // get cached data from localStorage
    const cachedData = JSON.parse(localStorage.getItem("projects"))
    let expired
    if(cachedData) {
      //set expired
      expired = (Date.now() /1000)- cachedData.cacheTime > cacheLife
    }
    // if cached data available and not expired, return the cache from localStorage
    if(cachedData && !expired) {
      console.log(cachedData)
      set(cachedData)
    } else {
      // fetch data from api, then save to localStorage
      const data= client.request(FILTERED_PROJECTS_QUERY).then(res => {
        set(res)

        localStorage.setItem("projects", JSON.stringify({...res, cacheTime: Date.now() /1000}))
      })
    }

  }

});
export { projects };
