export const filterTests = status => {
  return {
    type: 'FILTER_TESTS',
    status
  }
}

export const findTests = value => {
  return {
    type: 'SEARCH_TESTS',
    value
  }
}

export const updateSettings = id => {
  return {
    type: 'UPDATE_SETTINGS',
    id
  }
}

export const toggleAllImages = value => {
  return {
    type: 'TOGGLE_ALL_IMAGES',
    value
  }
}
