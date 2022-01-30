export const filterList = (item, search) => {
   const keysToFilter = ['name', 'tags']
   return Object.entries(item).some(([key, value]) => {
      return (
         (keysToFilter.includes(key) &&
            value
               .toString()
               .toLowerCase()
               .includes(search)) ||
         filterByStatus(key, value, search)
      )
   })
}
const filterByStatus = (key, value, search) => {
   return key === 'status' ? value.startsWith(search) : false
}
export const mapList = item => {
   const tags_display = item.tags.join(', ')
   const cords_display = item.cords.join(', ')
   return { ...item, tags_display, cords_display }
}
