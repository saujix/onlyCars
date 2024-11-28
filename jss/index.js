document.querySelectorAll('.videoBlock').forEach(function(event){
        document.querySelector(`#${event.id}`).addEventListener('mouseenter',function(){
            document.querySelector(`#${event.id}`).play();
        })
})
document.querySelectorAll('.videoBlock').forEach(function(event){
        document.querySelector(`#${event.id}`).addEventListener('mouseleave',function(){
            document.querySelector(`#${event.id}`).pause();
        })
})

let x = 0;
console.log(x);