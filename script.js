const modal = document.querySelector('dialog')
const addBtn = document.querySelector('#add')
const closeBtn = document.querySelector('#close')
const submitBtn = document.querySelector('#submit')
const shelf = document.querySelector('.shelf')
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

function createBookCard(book) {
    const card = document.createElement('div')
    card.id = book.id

    const titleEl = document.createElement('h4')
    titleEl.innerText = book.title
    card.appendChild(titleEl)
    
    const authorEl = document.createElement('h6')
    authorEl.innerText = book.author
    card.appendChild(authorEl)

    shelf.appendChild(card)
}

function addBookToLibrary(title, author, hasRead) {
    const newBook = new Book(title, author, hasRead)
    createBookCard(newBook)

    myLibrary.push(newBook)
}

addBookToLibrary('Enchiridion', 'Ancient Lorekeepers')
addBookToLibrary('Mind Games', 'Jay T. Doggzone')
addBookToLibrary('What To Do When Your Best Friend Leaves', 'Bob Leaf')


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
    modal.close()
})


