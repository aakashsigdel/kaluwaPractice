export const saveToLocalStorage = (state) => {
  const data = window.localStorage.getItem('state') || []
  const newData = [state, ...data]
  window.localStorage.setItem('state', JSON.stringify(newData))
}

export const getStateFromLocalStorage = () => {
  const serializedState = window.localStorage.getItem('state')
  return JSON.parse(serializedState)
}
