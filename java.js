const container = document.querySelector('.container')
//let sizeOf = prompt('pick a size')

//reset button
const btn =document.querySelector('button')

btn.addEventListener('click', () => {
    let newGrid = Number(prompt('enter a grid size'))
    
    while(newGrid > 100) 
    
    newGrid = Number(prompt('enter a num < 100'))
    

    const wrapper = document.querySelector('.wrapper')
    if(!wrapper){
        createGrid(newGrid)
    }else {
        wrapper.remove()
        createGrid(newGrid)
    }
    
    
})

// create grid function
const createGrid = (amtGrids) =>{
    const wrapper = document.createElement('div')
    wrapper.classList.add('wrapper')
    for (let i = 0; i < amtGrids; i++ ){
        const row = document.createElement('div')
        row.classList.add('grid-row')

     for (let j=0; j < amtGrids; j++){ 
        let WandH = 1080 / amtGrids
        const gridBox = document.createElement('div')
        gridBox.classList.add('grid-box')
        gridBox.style.width= `${WandH}px`
        gridBox.style.height= `${WandH}px`

        gridBox.addEventListener('mouseenter', () => {
            gridBox.style.backgroundColor= 'blueviolet';
        })

        row.appendChild(gridBox)
    }
    wrapper.appendChild(row)
}
container.appendChild(wrapper)
}
createGrid(sizeOf)





