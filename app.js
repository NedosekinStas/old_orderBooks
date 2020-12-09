function book(name,owner,year,phone,image) {
  return {
    name,owner,year,phone,image
  }
}

const books = [
  book('Bukvar', 'Larisa', 1996, '+7 924 222 93 23', 'images/bukvar.jpg'),
  book('We', 'Oleg', 1920, '+7 999 212 12 33', 'images/we.jpg'),
  book('Bukvar', 'Larisa', 1996, '+7 924 222 93 23', 'images/bukvar.png'),
  book('Bukvar', 'Larisa', 1996, '+7 924 222 93 23', 'images/bukvar.png'),
  book('Bukvar', 'Larisa', 1996, '+7 924 222 93 23', 'images/bukvar.png'),

]

const app = new Vue({
  el: '.app',
  data: {
    books
  }    
})