const container = document.querySelector('.container')
const sizeOf = 16

// create div function
const createGrid = (amtGrids) =>{
    for (let i = 0; i < amtGrids; i++ ){
        const row = document.createElement('div')
        row.classList.add('grid-row')

     for (let j=0; j < amtGrids; j++){ 
        const WandH = 960 / sizeOf
        const gridBox = document.createElement('div')
        gridBox.classList.add('grid-box')
        gridBox.style.width= `${WandH}px`
        gridBox.style.height= `${WandH}px`

        gridBox.addEventListener('mouseenter', () => {
            gridBox.style.backgroundColor= 'black'
        })

        row.appendChild(gridBox)
    }
    container.appendChild(row)
}
}
createGrid(sizeOf)





/*function createDiv(){
    for(let i = 1; i < 257 ; i++){       //257 = 16x16
        const div = document.createElement('div')   //create div element
        div.classList.add('divs')          //add to class 'divs'
        container.appendChild(div)         // append each to container
    }

const divs= document.querySelectorAll('.div')

divs.forEach((div) => {
div.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor='black'
} )

})

*/