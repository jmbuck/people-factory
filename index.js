const personForm = document.querySelector('#personForm');

function handleSubmit(ev) {
    ev.preventDefault()
    
    const f = ev.target;
    const details = document.querySelector('#details');
    const heading = document.querySelector('h1');
    const paragraph = document.querySelector('p#output');
    //const favoriteColor = f.favoriteColor.value.toLowerCase().replace(' ', ''); 
    const name = f.firstName.value;
    const favoriteColor = f.favoriteColor.value;
    const age = f.age.value;

    // const bold = document.createElement('strong');
    // bold.textContent = name
    // details.appendChild(bold);

    details.innerHTML = `
        <ul>
            <li>Name: ${name}</li>
            <li>Favorite Color: ${favoriteColor}</li>
            <li>Age: ${age}</li>
        </ul>
    `

    // //Modify heading and paragraph text/background color
    // heading.textContent = f.firstName.value + ' ' + f.lastName.value;                      
    // paragraph.textContent = 'Hey ' + f.firstName.value +
    //                                                 '!' + ' You like the color ' + 
    //                                                  f.favoriteColor.value.toLowerCase() + '. Good taste!';
    // paragraph.style.backgroundColor = favoriteColor;
    
    // //Modify text to be easier to read if favoriteColor is dark
    // if(favoriteColor == 'black' || favoriteColor == 'green' 
    // || favoriteColor.includes('dark') || favoriteColor == 'brown'
    // || favoriteColor == 'purple' || favoriteColor == 'indigo')
    //     paragraph.style.color = 'white';
    // else
    //     paragraph.style.color = 'black';

}

personForm.addEventListener('submit', handleSubmit);