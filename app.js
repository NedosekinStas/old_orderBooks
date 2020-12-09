function book(name,owner,year,phone,image,author) {
  return {
    name,owner,year,phone,image,author
  }
}

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
    selected_bookIndex: 0,
    phone_output: false
  },
  methods: {
    select_book: function (index) {
      this.book = books[index]
      this.selected_bookIndex = index
    } 
  }    
})