class Book {
    constructor(title, author, hasRead, src) {
        this.id = crypto.randomUUID()
        this.title = title
        this.author = author
        this.src = src
        this.hasRead = hasRead
    }

    changeReadStatus() {
        this.hasRead = !this.hasRead
    }
}

class Library {
    constructor() {
        this.shelfElement = document.querySelector('.shelf')
        this.items = []
    }

    addBookToLibrary(title, author, hasRead, src) {
        const newBook = new Book(title, author, hasRead, src)

        this.items.push(newBook)
    }

    deleteBook(book) {
        this.items.splice(this.items.findIndex(ref => ref.id === book.id), 1)

        this.updateUI()
    }

    updateUI() {
        this.shelfElement.innerHTML = ''

        this.items.forEach(book => {
            this.createBookCard(book)
        })
    }

    createBookCard(book) {
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
            readBtn.className = book.hasRead ? 'read' : 'unread'
            readBtn.textContent = 'Read'
            readBtn.addEventListener('click', () => {
                book.changeReadStatus()
                this.updateUI()
            })
            buttonHolder.appendChild(readBtn)

            const deleteBtn = document.createElement('button')
            deleteBtn.type = 'button'
            deleteBtn.className = 'delete'
            deleteBtn.textContent = 'Delete'
            deleteBtn.addEventListener('click', () => {
                this.deleteBook(book)
            })
            buttonHolder.appendChild(deleteBtn)
        card.appendChild(buttonHolder)

        this.shelfElement.appendChild(card)
    }

}

const shelf = new Library()
const modal = document.querySelector('dialog')
const addBtn = document.querySelector('#add')
const closeBtn = document.querySelector('#close')
const submitBtn = document.querySelector('#submit')

shelf.addBookToLibrary('Enchiridion', 'Ancient Lorekeepers', false, 'https://i.pinimg.com/1200x/3b/d0/61/3bd0619c1baac118e90d19ad54f3422f.jpg')
shelf.addBookToLibrary('Mind Games', 'Jay T. Doggzone', false, 'https://static.wikia.nocookie.net/adventuretimewithfinnandjake/images/b/b8/Mind_Games.png/revision/latest?cb=20121030160005')
shelf.addBookToLibrary('I wrote a Book', 'L . S . P', false, )
shelf.addBookToLibrary('Mystic Rituals And Their Space Time Applications', 'Simon Petrikov; Betty Grof', false, )
shelf.addBookToLibrary('Fiona And Cake', 'Ice King')

shelf.updateUI()

addBtn.addEventListener('click', () => {
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
    let src = document.querySelector('#url').value

    shelf.addBookToLibrary(title, author, hasRead, src)
    shelf.updateUI()

    document.querySelector('form').reset()
    modal.close()
})


