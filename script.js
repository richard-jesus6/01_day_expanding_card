// Selecciona todos los elementos que tienen la clase "panel"
const panels = document.querySelectorAll('.panel')

// Recorre cada panel
panels.forEach(panel => {
    // Añade un "escuchador" al evento click en cada panel
    panel.addEventListener('click', () => {
        // Quita la clase "active" de todos los paneles
        removeActiveClasses()
        // Agrega la clase "active" solo al panel en el que se hizo clic
        panel.classList.add('active')
    })
})

// Función que elimina la clase "active" de todos los paneles
const removeActiveClasses = () => {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}
