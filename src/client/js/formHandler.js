function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json())
        .then(function (data) {
            console.log(data);
            document.getElementById('results').innerHTML = data.title;
        })
}

export { handleSubmit }
