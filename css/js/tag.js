document.querySelectorAll('.tag').forEach(elemento => {
    const tagName = elemento.tagName.toLowerCase();

    elemento.style.bordercolor = '#616161';


    if (!elemento.classList.contains('nolabel')) {
        const label = document.createElement('label')
        label.style.backgroundColor = '#616161'
        label.innerHTML = tagName
        elemento.insertbefore(label, elemento.childNodes[0])
    }
});