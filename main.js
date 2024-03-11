async function handleSubmit(event){
    event.preventDefault();

    const book = document.getElementById('book').value;

    const DateFormat = new Date().toLocaleDateString();
    const parts = DateFormat.split('/');
    const issueDate = `${parts[1]}/${parts[0]}/${parts[2]}`;
    const issueTime = new Date().toLocaleTimeString();

    const returnDate = new Date().toLocaleDateString();
    const currenttime = new Date();
    const returnTime = new Date(currenttime.getTime() + 60 * 60 * 1000).toLocaleTimeString();


    console.log(book,issueDate,issueTime,returnDate,returnTime);

    const bookPost = await axios.post('http://localhost:3000/add-book',
    {
        book: book,
        issueDate: issueDate,
        issueTime: issueTime,
        returnDate: returnDate,
        returnTime: returnTime
    });

    console.log(bookPost);


   


}