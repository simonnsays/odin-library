const myLibrary = []

function Book(title, author, hasRead) {
    this.id = crypto.randomUUID()
    this.title = title
    this.author = author
    this.hasRead = hasRead
    this.changeReadStatus = function () {
        this.hasRead = !this.hasRead
    }
    
}

function addBookToLibrary(title, author, hasRead) {
    const newBook = new Book(title, author, hasRead)

    myLibrary.push(newBook)
}

addBookToLibrary('Enchiridion', 'Ancient Lorekeepers')
addBookToLibrary('Mind Games', 'Jay T. Doggzone')
addBookToLibrary('What To Do When Your Best Friend Leaves', 'Bob Leaf')

const modal = document.querySelector('dialog')
const addBtn = document.querySelector('#add')
const closeBtn = document.querySelector('#close')
const submitBtn = document.querySelector('#submit')

addBtn.addEventListener('click', () => {
    console.log(modal)
    modal.showModal()
})

closeBtn.addEventListener('click', () => {
    modal.close()
})

submitBtn.addEventListener('click', (e) => {
    e.preventDefault()

    const title = document.querySelector('#title').value
    const author = document.querySelector('#author').value
    const hasRead = document.querySelector('#hasRead').checked

    addBookToLibrary(title, author, hasRead)

    console.log(myLibrary)
})


