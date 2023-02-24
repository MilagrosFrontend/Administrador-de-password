let contrasenas = [ 
    {
        plataforma: 'Coursera',
        usuario: 'milagros@frontend.com',
        password: 'Esta es la password de Coursera',
        categoria: 'educacion'
    },
    {
        plataforma: 'Udemy',
        usuario: 'milagros@frontend.com',
        password: 'Esta es la password de Udemy',
        categoria: 'educacion'
    },
    {
        plataforma: 'Khan Academy',
        usuario: 'milagros@frontend.com',
        password: 'Esta es la password de Khan Academy',
        categoria: 'educacion'
    },
    {
        plataforma: 'Platzi',
        usuario: 'milagros@frontend.com',
        password: 'Esta es la password de Platzi',
        categoria: 'educacion'
    },
    {
        plataforma: 'Alura',
        usuario: 'milagros@frontend.com',
        password: 'Esta es la password de Alura',
        categoria: 'educacion'
    },
    {
        plataforma: 'Steam',
        usuario: 'milagros@frontend.com',
        password: 'Esta es la password de Steam',
        categoria: 'juegos'
    },
    {
        plataforma: 'PlayStation Network',
        usuario: 'milagros@frontend.com',
        password: 'Esta es la password de PlayStation Network',
        categoria: 'juegos'
    },
    {
        plataforma: 'Xbox Live',
        usuario: 'milagros@frontend.com',
        password: 'Esta es la password de Xbox Live',
        categoria: 'juegos'
    },
    {
        plataforma: 'Minijuegos',
        usuario: 'milagros@frontend.com',
        password: 'Esta es la password de Minijuegos',
        categoria: 'juegos'
    },
    {
        plataforma: 'Yandex Games',
        usuario: 'milagros@frontend.com',
        password: 'Esta es la password de Yandex Games',
        categoria: 'juegos'
    },
    {
        plataforma: 'Facebook',
        usuario: 'milagros@frontend.com',
        password: 'Esta es la password de Facebook',
        categoria: 'redes-sociales'
    },
    {
        plataforma: 'Instagram',
        usuario: 'milagros@frontend.com',
        password: 'Esta es la password de Instagram',
        categoria: 'redes-sociales'
    },
    {
        plataforma: 'Twitter',
        usuario: 'milagros@frontend.com',
        password: 'Esta es la password de Twitter',
        categoria: 'redes-sociales'
    },
    {
        plataforma: 'Linkedin',
        usuario: 'milagros@frontend.com',
        password: 'Esta es la password de Linkedin',
        categoria: 'redes-sociales'
    },
    {
        plataforma: 'Tik-Tok',
        usuario: 'milagros@frontend.com',
        password: 'Esta es la password de Tik-Tok',
        categoria: 'redes-sociales'
    },
    {
        plataforma: 'PayPal',
        usuario: 'milagros@frontend.com',
        password: 'Esta es la password de PayPal',
        categoria: 'administracion'
    },
    {
        plataforma: 'Google Drive',
        usuario: 'milagros@frontend.com',
        password: 'Esta es la password de Google Drive',
        categoria: 'administracion'
    },
    {
        plataforma: 'Microsoft Office',
        usuario: 'milagros@frontend.com',
        password: 'Esta es la password de Microsoft Office',
        categoria: 'administracion'
    },
    {
        plataforma: 'Mi banco',
        usuario: 'milagros@frontend.com',
        password: 'Esta es la password de Mi banco',
        categoria: 'administracion'
    },
    {
        plataforma: 'Gmail',
        usuario: 'milagros@frontend.com',
        password: 'Esta es la password de Gmail',
        categoria: 'administracion'
    },
    {
        plataforma: 'Amazon',
        usuario: 'milagros@frontend.com',
        password: 'Esta es la password de Amazon',
        categoria: 'otros'
    },
    {
        plataforma: 'Airbnb',
        usuario: 'milagros@frontend.com',
        password: 'Esta es la password de Airbnb',
        categoria: 'otros'
    },
    {
        plataforma: 'Uber',
        usuario: 'milagros@frontend.com',
        password: 'Esta es la password de Uber',
        categoria: 'otros'
    },
    {
        plataforma: 'Netflix',
        usuario: 'milagros@frontend.com',
        password: 'Esta es la password de Netflix',
        categoria: 'otros'
    },
    {
        plataforma: 'Pedidos Ya',
        usuario: 'milagros@frontend.com',
        password: 'Esta es la password de Pedidos Ya',
        categoria: 'otros'
    }
]

//variables globales// 
const seleccionarSelect=q('#seleccionar')
const seleccionarCategorias=q('#categorias')
const passMaestra= "4231"

seleccionarCategorias.addEventListener("change",()  => { // crea la nueva lista de las contraseñas con la categoria seleccionada//

    let categoriaSeleccionada = seleccionarCategorias.value
    const nuevaLista = contrasenas.filter(x => x.categoria===categoriaSeleccionada).map(x => x.plataforma)
    cargarOpciones(nuevaLista)
})

function cargarOpciones(nuevaLista){
    seleccionarSelect.innerHTML = "<option value='algo'>Seleccionar contraseña</option>"
    for (let i = 0; i < nuevaLista.length; i++) {
        let option = c('option')
        option.setAttribute( "value", nuevaLista[i])
        option.textContent = nuevaLista[i]
        seleccionarSelect.appendChild(option)
    }
}


// Esta funcion se activa apenas se carga la pagina//

window.onload = function() {
    for (let i = 0; i < contrasenas.length; i++) {
        let option = c('option')
        option.textContent = contrasenas[i].plataforma 
        option.setAttribute( "value",  contrasenas[i].plataforma)
        seleccionarSelect.appendChild(option)
    }
}

function buscarPass() { //Esta parte de la funcion no deja avanzar si no seleccionas una plataforma//
    const select=q('#seleccionar')
    let posicion = ''
    
    if (select.value === '') 
        {
            alert ("Usted no ha seleccionado ninguna plataforma")
            return
        }
    const password = prompt ("Ingrese contraseña maestra") // En esta parte de la funcion vemos si conincide la pass maestra con la pass completada en el promp. Si no coincide no se ejecuta el programa //
    if (password === passMaestra)
        {
            for (let i = 0; i < contrasenas.length; i++) {

                if (contrasenas[i].plataforma===select.value) {
                    posicion = i 
                }
            }
        }
    else {
        alert ("Usted no ha ingresado la contraseña maestra. No se puede acceder")
            return
    }

    let miUsuario = contrasenas[posicion].usuario
    let miPass = contrasenas[posicion].password
    console.log(miUsuario)
    const input = document.createElement('input');
document.body.appendChild(input);
input.value = miPass;
input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    console.log('Texto copiado al portapapeles')

// Con lo sig los mensajes aparecen en pantalla//

    let parrafoUsuario = q("#usuario")
    let parrafoMensaje = q("#mensaje")
    parrafoUsuario.textContent = ' Tu usuario es ' + miUsuario 
    parrafoMensaje.textContent = ' Tu contraseña ha sido pegada al portapapeles '
}