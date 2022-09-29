import createElement from '../utilities/createElement'


const loadKanban = () => {

    const todoArray = []
    const ipArray = []
    const compArray = []

    const kbContainer = createElement({ classList: ['kanban-container'] })
    const todoDiv = createElement({ classList: ['todo-div'], innerText: 'TODO' })
    const inprogDiv = createElement({ classList: ['ip-div'], innerText: 'IN PROGRESS' })
    const complateDiv = createElement({ classList: ['complate-div'], innerText: 'COMPLATE' })

    const todoaddBtn = createElement({ type: 'button', innerText: '+', classList: ['todo-btn'] })
    const ipaddBtn = createElement({ type: 'button', innerText: '+', classList: ['ip-btn'] })
    const complateaddBtn = createElement({ type: 'button', innerText: '+', classList: ['complate-btn'] })

    const itemCard = createElement({ classList: ['item-card'], innerText: 'Denemecardı' })
    const mousemove = (e) =>{
        console.log('tasınıuo')
    }

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


        // Sağ - Sol
        moveRight.addEventListener('click', (e) => {
            const parent = e.target.parentElement;
            const nextParent = parent.parentElement;
            const nextDiv = nextParent.nextSibling
            if (kbContainer.childNodes[2] == nextDiv) {
                moveRight.classList.add('hide')
                nextDiv.appendChild(itemCard)
                moveLeft.classList.remove('hide')
            }
            if (kbContainer.childNodes[1] == nextDiv) {
                moveRight.classList.remove('hide')
                moveLeft.classList.remove('hide')
                nextDiv.appendChild(itemCard)
            }
            else {
                nextDiv.appendChild(itemCard)

            }

        })
        moveLeft.addEventListener('click', (e) => {
            const parentPrv = e.target.parentElement;
            const nextParentPrv = parentPrv.parentElement;
            const prvDiv = nextParentPrv.previousSibling
            if (kbContainer.childNodes[0] == prvDiv) {
                moveLeft.classList.add('hide')
                prvDiv.appendChild(itemCard)
                moveRight.classList.remove('hide')
            }

            if (kbContainer.childNodes[1] == prvDiv) {
                moveLeft.classList.remove('hide')
                moveRight.classList.remove('hide')
                prvDiv.appendChild(itemCard)

            }
            else {
                prvDiv.appendChild(itemCard)

            }
        })

        selectedDiv.append(itemCard)
        itemCard.addEventListener('mousemove', mousemove)
    }

    const cardMove = () => {
        //  console.log('tasınıyor')
    }

  


    
    todoaddBtn.addEventListener('click', createItem)
    ipaddBtn.addEventListener('click', createItem)
    complateaddBtn.addEventListener('click', createItem)



    todoDiv.append(todoaddBtn)
    inprogDiv.append(ipaddBtn)
    complateDiv.append(complateaddBtn)
    kbContainer.append(todoDiv, inprogDiv, complateDiv)

    const len = kbContainer.length
    console.log(kbContainer.childNodes[0])
    return kbContainer;

}

export default loadKanban;
