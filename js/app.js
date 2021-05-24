const allItems = document.querySelectorAll('.item')
let maxWidth = 0

const getMaxWidht = () => {
  allItems.forEach(item => {
    maxWidth = item.clientWidth > maxWidth ? item.clientWidth : maxWidth
  })
}

const setMaxWidth = () => {
  allItems.forEach(item => item.style.minWidth = `${maxWidth}px`)
}

getMaxWidht()
setMaxWidth()