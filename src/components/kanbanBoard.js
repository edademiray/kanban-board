import createElement from '../utilities/createElement'


const loadKanban = () => {

    const todoArray = [ ]
    const ipArray = [ ]
    const compArray = [ ]

    const kbContainer = createElement({ classList: ['kanban-container'] })
    const todoDiv = createElement({ classList: ['todo-div'], innerText: 'TODO' })
    const inprogDiv = createElement({ classList: ['ip-div'], innerText: 'IN PROGRESS' })
    const complateDiv = createElement({ classList: ['complate-div'], innerText: 'COMPLATE' })

    const todoaddBtn = createElement({ type: 'button', innerText: '+', classList: ['todo-btn'] })
    const ipaddBtn = createElement({ type: 'button', innerText: '+', classList: ['ip-btn'] })
    const complateaddBtn = createElement({ type: 'button', innerText: '+', classList: ['complate-btn'] })

    const itemCard = createElement({ classList: ['item-card'], innerText: 'Denemecardı' })


    const createItem = (e) => {
        const itemCard = createElement({ classList: ['item-card'] })
        const moveRight = createElement({ type: 'button', classList: ['move-r'], innerText: '>' })
        const moveLeft = createElement({ type: 'button', classList: ['move-l'], innerText: '<' })

        const itemValue = createElement({ classList: ['item-val'], type: 'input', placeholder: 'give me something to-do' })

        const cancelBtn = createElement({ type: 'button', classList: ['cancel-btn'], innerText: 'X' })
        const cancelItem = () => {
            itemCard.style.display = 'none'
        }

        cancelBtn.addEventListener('click', cancelItem)
        itemCard.append(moveLeft, itemValue, moveRight, cancelBtn)
        itemCard.addEventListener('mousedown', cardMove)
        const selectedDiv = e.target.parentElement


        if (selectedDiv.classList.contains('todo-div')) {
            todoArray.push(itemCard)
            moveLeft.classList.add('hide')
        }
        if (selectedDiv.classList.contains('complate-div')) {
            moveRight.classList.add('hide')
            ipArray.push(itemCard)
        }



        moveRight.addEventListener('click', (e) => {
          inprogDiv.appendChild(itemCard)
        })
        moveLeft.addEventListener('click', () => {
            todoDiv.appendChild(itemCard)
        })


        console.log(selectedDiv)
        selectedDiv.append(itemCard)

      

        console.log(todoArray)
    }

    const cardMove = () => {
        console.log('tasınıyor')
    }


    todoaddBtn.addEventListener('click', createItem)
    ipaddBtn.addEventListener('click', createItem)
    complateaddBtn.addEventListener('click', createItem)




    todoDiv.append(todoaddBtn)
    inprogDiv.append(ipaddBtn)
    complateDiv.append(complateaddBtn)
    kbContainer.append(todoDiv, inprogDiv, complateDiv)
    return kbContainer;

}

export default loadKanban;
