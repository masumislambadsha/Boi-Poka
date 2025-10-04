const getStoredBooks = () =>{
  const storedBooksStr = localStorage.getItem('readList')
  if(storedBooksStr){
    const storedBooksData = JSON.parse(storedBooksStr)
    return storedBooksData
  }
  else{
    return []
  }
}

const addToStoredDB =(id) =>{
    const storedBooksData = getStoredBooks()

    if(storedBooksData.includes(id)){
      alert('ache')
      return
    }
    else{
      storedBooksData.push(id)
      console.log(storedBooksData);
      const data = JSON.stringify(storedBooksData)
      localStorage.setItem('readList', data)

    }
}
export {addToStoredDB}

