const items = document.querySelectorAll('.item')
const placeholders = document.querySelectorAll('.placeholder')

items.forEach(item => {
    item.addEventListener('dragstart', dragStart)
    item.addEventListener('dragend', dragEnd)

})

placeholders.forEach(placehold => {
    placehold.addEventListener('dragover', dragover)
    placehold.addEventListener('dragenter', dragenter)
    placehold.addEventListener('dragleave', dragleave)
    placehold.addEventListener('drop', drop)
})

function dragStart(e){
    e.target.classList.add('hold')
    setTimeout(() => {
        e.target.classList.add('hide')
    }, 0)
    
}

function dragEnd(e){
    e.target.className = 'item'
}

function dragover(e){
    e.preventDefault()
}
function dragenter(e){
    e.target.classList.add('hovered');
}
function dragleave(e){
    e.target.classList.remove('hovered');
}
function drop(e){
    e.target.classList.remove('hovered');
    items.forEach(item => {
        e.target.append(item)  
    })
}