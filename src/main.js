const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8daaabf2damshe677dfe21e759bfp1713a7jsnf88d97a4cb2d',
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	}
};

{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/6GLXWseOGmQ?si=wov4iC3MMPARIVtq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */ }

const asyncFunction = async (p1) => {
    options.method = 'GET'
    // const url = await fetch(`https://youtube138.p.rapidapi.com/channel/search/?id=UCJ5v_MCY6GNUBTO8-D3XoAg&q=${p1}&hl=en&gl=US`, options)
    const url = '../data/dataVideos.json';
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);

    let height = 0, cont = 0;

    let banner = document.querySelector(".container")
    banner.insertAdjacentHTML("beforeend", /*HTML*/`
        <div class="list-container">
            ${result.contents.map((value) => /*HTML*/`
                <div class="vid-list">
                    <div class="contenedor-video">
                        <img src="${value.video.thumbnails[3].url}" class="imagen-principal" data-video-titulo="${value.title}"
                    </div>
                    <div  class="flex-div">
                        <div>
                            <a href="">${value.title}</a>
                            <h1>${value.video.title}</h1>
                            <p>${value.video.stats.views} views ·${value.video.publishedTimeText}</p>
                        </div>
                    </div>
                </div>
            `).join("")}
        </div>
    `)


    const info = document.querySelectorAll(".vid-list")

    info.forEach(video_info => {
        const imagen_video = video_info.querySelector('.imagen-principal');
        const titulo = imagen_video.getAttribute('data-video-titulo');

        imagen_video.addEventListener('click', () => {
            const videoSeleccionado = obtenerVideoInfo(result, titulo);
            localStorage.setItem('videoSeleccionado', JSON.stringify(videoSeleccionado));
            window.location.href = '';
        })
    })
    console.log(localStorage);
    function obtenerVideoInfo(videos, title) {
        const videoVideo = videos.contents.find(v => v.title = title)
        return videoVideo
    }

}


asyncFunction()

const toggleSidebarBtn = document.getElementById('toggleSidebar');
const sidebar = document.querySelector('aside');
const iconTexts = document.querySelectorAll('.icon-text');

toggleSidebarBtn.addEventListener('click', () => {
    sidebar.classList.toggle('w-16');
    sidebar.classList.toggle('w-52');

    iconTexts.forEach(iconText => {
        iconText.classList.toggle('hidden');
    });
});