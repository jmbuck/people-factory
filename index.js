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

    details.appendChild(createList(name, favoriteColor, age));

    // details.innerHTML = `
    //     <ul>
    //         <li>Name: ${name}</li>
    //         <li>Favorite Color: ${colorDiv}</li>
    //         <li>Age: ${age}</li>
    //     </ul>
    // `;

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

function renderColor(color) {
    const div = document.createElement('div');
    div.style.backgroundColor = color;
    div.style.height = '50px';
    div.style.width = '100px';

    return div;
}

function createList(name, color, age) {
   const list = document.createElement('ul');
   const nameItem = document.createElement('li');
   const colorItem = document.createElement('li');
   const ageItem = document.createElement('li');

   nameItem.textContent = `Name: ${name}`;
   colorItem.innerHTML = `Favorite Color: ${renderColor(color).outerHTML}`;
   ageItem.textContent = `Age: ${age}`;

   list.appendChild(nameItem);
   list.appendChild(colorItem);
   list.appendChild(ageItem);
   return list;
}

personForm.addEventListener('submit', handleSubmit);