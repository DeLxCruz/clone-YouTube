# Clon de YouTube - Proyecto "CreativeCode"

Este proyecto es un clon de YouTube o un YouTube Pirata que utiliza la API de RapidAPI para mostrar y listar los videos del canal "CreativeCode". El clon de YouTube tiene tres vistas principales: la vista principal de inicio, la vista de reproducción de video y la vista del canal.

## Funcionalidades

1. **Vista Principal - Inicio:**
   - En esta vista, se muestran todos los videos del canal "CreativeCode".
   - Los videos se presentan en una lista con sus títulos y miniaturas.
   - Cuando se hace clic en un video, se redirige a la vista de reproducción de video correspondiente.

2. **Vista de Reproducción de Video:**
   - Esta vista permite la reproducción del video seleccionado.
   - Utiliza un iframe incrustado de YouTube con el ID del video específico seleccionado.
   - A la derecha de la pantalla, se listan otros videos del canal para facilitar la navegación.

3. **Vista del Canal:**
   - En esta vista se muestra la información del canal "CreativeCode".
   - Incluye la imagen de avatar del canal, el encabezado y la lista de todos los videos del canal.

4. **Solicitud de API y Visualización de Videos:**
   - La solicitud de la API de RapidAPI se realiza utilizando la biblioteca `fetch` de JavaScript.
   - Puedes alternar entre el uso de una URL remota o un archivo JSON local comentando/descomentando las líneas adecuadas en el archivo JavaScript.
   - La respuesta de la API se muestra en la vista principal como miniaturas de video y detalles.
   - Cuando se hace clic en un video, su ID se almacena en el almacenamiento local para su reproducción posterior.

## Tecnologías Utilizadas

- HTML, TailwindCSS y JavaScript para la interfaz de usuario.
- RapidAPI para obtener datos de videos del canal "CreativeCode".
- Incorporación de iframes de YouTube para la reproducción de videos.

## Configuración del Proyecto

1. Clona el repositorio a tu máquina local:

2. Abre el archivo `index.html` en tu navegador web para acceder a la vista principal.

3. Personaliza el proyecto según tus necesidades y preferencias.

## Créditos

Este proyecto fue creado por @DeLxCruz como parte del curso en @CampusLands.

¡Gracias por usar este clon de YouTube! Espero que te sea útil y satisfaga tus necesidades de visualización de videos del canal "CreativeCode".
