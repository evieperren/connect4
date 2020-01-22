let hoverElement = document.querySelectorAll('.hover')
let hoverTarget = document.querySelectorAll('div[data-target^=".square--"]')
let dataVal = document.querySelectorAll('div[data-value]')

hasCounter = false
hoverElement.forEach(hover => hover.addEventListener('mouseover', function(e){
    e.preventDefault()
    e.target.className = 'game__hover-section--square--counter hover'

}))
hoverElement.forEach(hover => hover.addEventListener('mouseleave', function(e){
    e.stopPropagation()
    hover.className = 'game__hover-section--square hover'
}))
hoverElement.forEach(hover => hover.addEventListener('click', function(e){
    e.target.className = 'game__hover-section--square--counter'
}))

let dataNum = document.querySelectorAll('div[data-num]')

hoverTarget.forEach(targ => {
    targ.addEventListener('click', function(e) {
        let target = e.target.dataset.target
        let targetedSquare = document.querySelectorAll(target)
        targetedSquare.forEach(square => {
            if(square.parentElement.id === 'row-1'){
                square.className = 'game__hover-section--square--counter' 

                dataNum.forEach(num => {
                    row1[num.dataset.num] // same as row[i]

                })
            }
            square.setAttribute('data-value', '1')
        })
    })
})


let row2 = [0, 0, 0, 0, 0, 0, 0]
let row1 = [0, 0, 0, 0, 0, 0, 0]