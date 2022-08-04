const container = document.querySelector('.container')


//reset button
const btn =document.querySelector('button')

//Click to create grid of desired size

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

        // shading event listener

        gridBox.addEventListener('mouseenter', () => {
             gridBox.style.backgroundColor = 'black'
             gridBox.style.opacity -= '-0.1'
            //gridBox.style.backgroundColor= getRandomColor();
           
        })

        row.appendChild(gridBox)
    }
    wrapper.appendChild(row)
}
container.appendChild(wrapper)
}
/*function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
*/





