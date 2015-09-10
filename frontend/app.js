import babel from 'babel/polyfill'

document.querySelector('#reload')
  .addEventListener('click', async event => {
    const response = await fetch('./friends')
    const friends = await response.json()
    for (const {id, name} of friends) {
      const listItem = document.createElement('li')
      listItem.innerText = name
      listItem.dataset.id = id
      document.querySelector('#friends')
        .appendChild(listItem)
    }
  })
