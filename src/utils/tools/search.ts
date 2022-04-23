/**
 * Shift filtering
 * @param search - value that is filtered by
 * @returns 
 */
export function createSearchFilterPredicate(search: string) {
  search = search.toLowerCase()

  return (value: string) => {
    value = value.toLowerCase()

    let index = -1
    for (const char of search) {
      index = value.indexOf(char, index)

      if (index === -1) return false
    }

    return true
  }
}