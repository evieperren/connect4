let hoverElement = document.querySelectorAll('.hover')

hasCounter = false
hoverElement.forEach(hover => hover.addEventListener('mouseover', function(e){
    e.preventDefault()
    e.target.className = 'game__hover-section--square--counter hover'

}))
hoverElement.forEach(hover => hover.addEventListener('mouseleave', function(e){
    e.stopPropagation()
    hover.className = 'game__hover-section--square hover'
}))
hoverElement.forEach(hover => hover.addEventListener('click', function(){
    e.target.className = 'game__hover-section--square--counter'
}))