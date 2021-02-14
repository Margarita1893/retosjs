const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText.split('') //split divide un objeto en cadena
        .map((letter, idx) => `<span style="transition-delay:${idx*50}ms">
        ${letter}</span>`)
        .join('')//lo vuelve a unir 
});