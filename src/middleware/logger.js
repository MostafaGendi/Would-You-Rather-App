const logger = (store) => (next) => (action) => {
  console.group(action.type)
    console.log("the Action is: ", action)
    const retrunedValue = next(action)
    console.log("The new state is: ", store.getState())
  console.groupEnd()
  return retrunedValue
}

export default logger
