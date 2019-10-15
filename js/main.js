const automated = document.getElementById("automated");
const title = document.getElementById('title');
const author = document.getElementById('author');
const bookId = document.getElementById('id');

// Object Literal
const library = {
    open: true,
    name: 'My Library',
    inventory: [
        { title: '1984', author: 'Orwell', id: 1 },
        { title: 'Dune', author: 'Herbert', id: 2 },
        { title: '1Q84', author: 'Murakami', id: 3 },
    ],
    lent: [],
    borrow: function (id) {
        // is open
        
        // input number
        // click event
        // put into lent[]
        this.lent.push(this.inventory[id]) ;
    },
    returnItem: function (id) {

    },
    close: function () {
        const door = document.getElementById('door');
        door.addEventListener('click', function () {
            if (this.open == false) {
                door.setAttribute('value', 'open');
                console.log('t1');
                this.open = true;
            } else {
                door.setAttribute('value', 'closed');
                this.open = false;
                console.log('t2');
            }
        });
    },
};
// CODE BELOW IS IMPORTANT DONT DELETE
// const p = document.createElement("p");
// p.innerText = ('Sorry the library is closed');
// automated.appendChild(p);



console.log(library.inventory[0].author)
library.close();