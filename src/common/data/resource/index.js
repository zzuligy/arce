import Http from './http'
import resourceStore from '../resource-store'

class Resource {
  constructor (activeAdapter) {
    this.activeAdapter = Http
  }
}

Resource.create = function (resourceID) {
  let resource = resourceStore.get(resourceID)
  let resourceExecutorInstance

  resourceExecutorInstance = Http.createInstance(resource.url)
  return resourceExecutorInstance
}


export default Resource