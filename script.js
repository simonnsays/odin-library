const modal = document.querySelector('dialog')
const addBtn = document.querySelector('#add')
const closeBtn = document.querySelector('#close')
const submitBtn = document.querySelector('#submit')
const shelf = document.querySelector('.shelf')
const myLibrary = []

function Book(title, author, hasRead, src) {
    this.id = crypto.randomUUID()
    this.title = title
    this.author = author
    this.src = src
    this.hasRead = hasRead
    this.changeReadStatus = function () {
        this.hasRead = !this.hasRead
    }
    
}

function createBookCard(book) {
    const card = document.createElement('div')
    card.className = 'card'
    card.id = book.id

    const imageHolder = document.createElement('div')
    imageHolder.className = 'image-holder'
    const img = document.createElement('img')
    img.src = book.src ? book.src : 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Book_red%3B_question_marks.svg/250px-Book_red%3B_question_marks.svg.png?20220730225458'
    imageHolder.appendChild(img)
    card.appendChild(imageHolder)

    const titleEl = document.createElement('h4')
    titleEl.innerText = book.title
    card.appendChild(titleEl)
    
    const authorEl = document.createElement('h6')
    authorEl.innerText = book.author
    card.appendChild(authorEl)

    const buttonHolder = document.createElement('div')
    buttonHolder.className = 'action-holder'
        const readBtn = document.createElement('button')
        readBtn.type = 'button'
        readBtn.className = 'status'
        readBtn.textContent = 'Read'
        buttonHolder.appendChild(readBtn)

        const deleteBtn = document.createElement('button')
        deleteBtn.type = 'button'
        deleteBtn.className = 'delete'
        deleteBtn.textContent = 'Delete'
        buttonHolder.appendChild(deleteBtn)
    card.appendChild(buttonHolder)

    shelf.appendChild(card)
}

function addBookToLibrary(title, author, hasRead, src) {
    const newBook = new Book(title, author, hasRead, src)
    createBookCard(newBook)

    myLibrary.push(newBook)
}


function updateLibrary() {
    shelf.innerHTML = ''

    myLibrary.forEach(book => {
        createBookCard(book)
    })
}
addBookToLibrary('Enchiridion', 'Ancient Lorekeepers', false, 'https://i.pinimg.com/1200x/3b/d0/61/3bd0619c1baac118e90d19ad54f3422f.jpg')
addBookToLibrary('Mind Games', 'Jay T. Doggzone', false, 'https://static.wikia.nocookie.net/adventuretimewithfinnandjake/images/b/b8/Mind_Games.png/revision/latest?cb=20121030160005')
addBookToLibrary('What To Do When Your Best Friend Leaves', 'Bob Leaf', false, )
addBookToLibrary('What To Do When Your Best Friend Leaves', 'Bob Leaf', false, )
addBookToLibrary('What To Do When Your Best Friend Leaves', 'Bob Leaf')


updateLibrary()
console.log(myLibrary)

addBtn.addEventListener('click', () => {
    console.log(modal)
    modal.showModal()
})

closeBtn.addEventListener('click', () => {
    modal.close()
})

submitBtn.addEventListener('click', (e) => {
    e.preventDefault()

    let title = document.querySelector('#title').value
    let author = document.querySelector('#author').value
    let hasRead = document.querySelector('#hasRead').checked

    addBookToLibrary(title, author, hasRead)

    document.querySelector('form').reset()
    modal.close()
})


