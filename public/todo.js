const todos = document.querySelector('.todos')
const taskCount = document.querySelector('.taskCount')
const tasks = document.querySelectorAll('.todo')
const form = document.querySelector('#delete')

    fetch('/todos')
    .then(response => response.json())
    .then(data => renderTasks(data))

    const renderTasks = (tasks) => {
        if(tasks.length == 0) {
            todos.innerHTML = 'Ingen oppgaver lagt til enda.'
        }

        taskCount.innerHTML = `Du har ${tasks.length} oppgaver i dag!`

        tasks.forEach(element => {
            const task = document.createElement('div')
            task.className = 'py-2 todo'
            task.id = "todo"
            task.innerHTML =
            `
                <h4 class="title is-4 mb-0">${element.title}</h4
            `

            task.addEventListener('click', (e) => {
                form.title.value = element.title
                form.submit()           
            })

            todos.appendChild(task)

            // Task count
            if(tasks.length == 1) {
            taskCount.innerHTML = `Du har ${tasks.length} oppgave i dag!`
    }
        });
    }

    const modal = document.querySelector('.modal')

    const deleteButton = document.querySelector('.delete')
    deleteButton.addEventListener('click', (e) => {
        modal.classList.toggle('is-active')
    })

    const abortButton = document.querySelector('.cancel')
    abortButton.addEventListener('click', (e) => {
        modal.classList.toggle('is-active')
    })

    function showModal() {
        modal.classList.toggle('is-active')
    }

    function taskHover() {
        const todoDivs = todos.querySelectorAll('.todo')
        console.log(todoDivs)
    }
    taskHover() 


