const peopleFactory = {
    init: function(formSelector) {
        const personForm = document.querySelector(formSelector);
        personForm.addEventListener('submit', this.handleSubmit.bind(this));
    },

    handleSubmit: function(ev) {
        ev.preventDefault();
        
        const f = ev.target;
        const details = document.querySelector('#details');
        const heading = document.querySelector('h1');
        const paragraph = document.querySelector('p#output');
        //const favoriteColor = f.favoriteColor.value.toLowerCase().replace(' ', ''); 
        const person = {'Name': f.firstName.value, 
                        'Favorite Color': this.renderColor(f.favoriteColor.value).outerHTML, 
                        'Age': f.age.value,};

        details.appendChild(this.createList(person));

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

    },

    renderColor: function (color) {
        const div = document.createElement('div');
        div.style.backgroundColor = color;
        div.style.height = '50px';
        div.style.width = '100px';

        return div;
    },

    createListItem: function(label, value) {
        const item = document.createElement('li');
        item.innerHTML = `${label}: ${value}`;
        return item;
    },

    createList: function(personData) {
    //    const list = document.createElement('ul');
    //    const nameItem = document.createElement('li');
    //    const colorItem = document.createElement('li');
    //    const ageItem = document.createElement('li');

    //    nameItem.textContent = `Name: ${name}`;
    //    colorItem.innerHTML = `Favorite Color: ${renderColor(color).outerHTML}`;
    //    ageItem.textContent = `Age: ${age}`;

    //    list.appendChild(nameItem);
    //    list.appendChild(colorItem);
    //    list.appendChild(ageItem);
    //    return list;
        const list = document.createElement('ul');
       
        Object.keys(personData).map((label) => {
            const item = this.createListItem(label, personData[label]);
            list.appendChild(item);
        });

        return list;
    },
};

peopleFactory.init('#personForm');