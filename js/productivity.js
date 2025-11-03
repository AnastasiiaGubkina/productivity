const headers = document.querySelectorAll("[data-name='click']")

headers.forEach(function(item){
    item.addEventListener('mouseover', function(){
        this.nextElementSibling.classList.toggle("content__click")
    })
})

headers.forEach(function(item){
    item.addEventListener('mouseout', function(){
        this.nextElementSibling.classList.toggle("content__click")
    })
})


