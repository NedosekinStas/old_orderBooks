function book(name,owner,year,phone,image,author) {
  return {
    name,owner,year,phone,image,author
  };
};

function log(text, type, date = new Date()) {
  return{
    text, type, date
  }
};

const books = [
  book('Bukvar', 'Larisa', 1996, '+7 924 222 93 23', 'images/bukvar.jpg', 'V.G. Gorezkiy'),
  book('We', 'Oleg', 1920, '+7 999 212 12 33', 'images/we.jpg', 'E.I. Zamytin'),
  book('Gift', 'Vladimir', 2005, '+7 944 232 33 11', 'images/gift.jpg', 'V.V. Nabokov'),
  book('Faust', 'Vitaliy', 1790, '+7 789 457 93 66', 'images/faust.jpg', 'Gete'),
  book('Fathers and Sons', 'Olesia', 1860, '+7 789 475 78 88', 'images/fathers_and_sons.jpg', 'I.S. Turgenev')
]

const app = new Vue({
  el: '.app',
  data: {
    books: books,
    book: books[0],
    logs: [],
    selected_bookIndex: 0,
    phone_output: false,
    search: '',
    modal_visibility: false
  },
  methods: {
    select_book(index) {
      this.book = books[index];
      this.selected_bookIndex = index;
    },
    new_order(){
      this.modal_visibility = false;
      this.logs.push(
        log(`Success order: ${this.book.name}`, 'Complit')
      )
    },
    close_order(){
      this.modal_visibility = false;
      this.logs.push(
        log(`Cancceled order: ${this.book.name}`, 'Close')
      )
    } 
  },
  computed: {
    phone_btn_title() {
      return this.phone_output ? 'Hide phone' : 'Show Phone';
    },
    filtered_book(){
      return this.books.filter(book => {
        return book.name.indexOf(this.search) > -1;
      })
    },
    filters_date: {
      date(value) {
        return value.toLocaleString();
      }
    }
  }, 
});
