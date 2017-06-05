const personForm = document.querySelector('#personForm');

function handleSubmit(ev) {
    ev.preventDefault()
    const f = ev.target
    const heading = document.querySelector('h1')
    heading.textContent = 'Hello, ' + f.personName.value
                            + ', you like the color ' + f.favoriteColor.value.toLowerCase() 
                            + '!';
    const paragraph = document.querySelector('p#output');                         
    paragraph.textContent = 'Hey ' + f.personName.value +
                                                    '!' + ' You like the color ' + 
                                                    f.favoriteColor.value.toLowerCase() + '. Good taste!';
    paragraph.style.backgroundColor = f.favoriteColor.value.toLowerCase();

}

personForm.addEventListener('submit', handleSubmit);