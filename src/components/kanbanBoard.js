import createElement from '../utilities/createElement'


const loadKanban = () => {

    const kbContainer = createElement({ classList: ['kanban-container'] })
    const todoDiv = createElement({ classList: ['todo-div'], innerText: 'TODO' })
    const inprogDiv = createElement({ classList: ['ip-div'], innerText: 'IN PROGRESS' })
    const complateDiv = createElement({ classList: ['complate-div'], innerText: 'COMPLATE' })

    const todoaddBtn = createElement({ type: 'button', innerText: '+', classList: ['todo-btn'] })
    const ipaddBtn = createElement({ type: 'button', innerText: '+', classList: ['ip-btn'] })
    const complateaddBtn = createElement({ type: 'button', innerText: '+', classList: ['complate-btn'] })

    const itemCard = createElement({ classList: ['item-card'], innerText: 'Denemecardı' })


    const createItem = () => {
        const itemCard = createElement({ classList: ['item-card'] })
        const moveBtn = createElement({type:'button', classList:['move-btn'],innerText:'Move'})

        const itemValue = createElement ({classList:['item-val'],type:'input',placeholder:'give me something to-do'})

        const cancelBtn = createElement({ type: 'button', classList: ['cancel-btn'], innerText: 'X' })
        const cancelItem = () => {
            itemCard.style.display = 'none'
        }


        cancelBtn.addEventListener('click', cancelItem)
        itemCard.append(itemValue,moveBtn,cancelBtn)
        itemCard.addEventListener('mousedown',cardMove)
        todoDiv.append(itemCard)
    }

    const cardMove = () => {
        console.log('tasınıyor')
    } 


    todoaddBtn.addEventListener('click', createItem)
    todoDiv.append(todoaddBtn)
    inprogDiv.append(ipaddBtn)
    complateDiv.append(complateaddBtn)
    kbContainer.append(todoDiv, inprogDiv, complateDiv)
    return kbContainer;

}

export default loadKanban;