const input = document.querySelector("#input")
const result = document.querySelector("#result")
input.focus()

input.addEventListener('keyup', (event) => {
    if(event.key == "Enter"){
        Random()
    }else{
        CreateCelula(event.target.value)
    }
})

function CreateCelula(valor){  
    const tags = valor
    .split(',')
    .filter(tag => tag.trim() != '')
    .map(tag => tag.trim())
    
    result.innerHTML = ""
    tags.forEach(tag  => {
        const tagElement = document.createElement('p')
        tagElement.classList.add('bg-blue-400')
        tagElement.classList.add('px-4')
        tagElement.classList.add('rounded-3xl')
        tagElement.classList.add('py-2')
        tagElement.classList.add('text-gray-50')
        tagElement.classList.add('py-2')
        tagElement.classList.add('tags')
        tagElement.innerText = tag
        result.appendChild(tagElement)
    });
}

function Random(){
    

    const interval = setInterval(() => {
        const tags = document.querySelectorAll(".tags")
        const random = tags[Math.floor(Math.random() * tags.length)]
        
	    if (random !== undefined) {
        random.classList.add("bg-blue-950")

        setTimeout(() => {
            random.classList.remove('bg-blue-950')
        }, 500)
	}
    }) 

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const tags = document.querySelectorAll(".tags")
            const random = tags[Math.floor(Math.random() * tags.length)]

            random.classList.add("bg-blue-950")

        }, 500)

    }, 10 * 200)
}