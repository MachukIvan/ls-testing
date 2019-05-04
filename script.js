window.addEventListener("DOMContentLoaded", function() {
    
    let checkbox = document.getElementById('rememberMe'),
        change = document.getElementById('change'),
        form = document.getElementsByTagName('form')[0];

    if (localStorage.getItem('isChecked') === 'true') {
        checkbox.checked = true;
    };

    if (localStorage.getItem('bg') === 'changed') {
        form.style.backgroundColor = '#FF4766';
    }

    checkbox.addEventListener('click', () => {
        localStorage.setItem('isChecked', true);
    })

    change.addEventListener('click', () => {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = '#FF4766';
    });

    let person = {
        name: 'Ivan',
        age: 24,
        tech: ['mobile', 'notebook']
    }

    let serializedPerson = JSON.stringify(person);
    localStorage.setItem('Ivan', serializedPerson);

    console.log(JSON.parse(localStorage.getItem('Ivan')));
});
