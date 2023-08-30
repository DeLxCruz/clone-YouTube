function playVideo(parameter) {
    let iframe = document.querySelector('#mainVideo');
    iframe.insertAdjacentHTML('afterbegin', `
    <iframe class="rounded-2xl" width="100%" height="615" src="https://www.youtube.com/embed/${parameter}?si=czx-JXcyfxDxe0lv&autoplay=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    `)
}

let storageItem = localStorage.getItem('ID')
console.log(storageItem);
playVideo(storageItem)

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '8daaabf2damshe677dfe21e759bfp1713a7jsnf88d97a4cb2d',
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
};

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
            ${result.contents.map((value) => /*HTML*/`
                <div class="vid-list flex gap-x-3" videoID="${value.video.videoId}">
                    <a href="./videoTab.html">
                        <img src="${value.video.thumbnails[0].url}" class="rounded-lg hover:cursor-pointer max-w-max" /> 
                    </a>
                    <div class="">
                        <div class="grid space-y-2">
                            <a href="./videoTab.html" class="font-medium">${value.video.title}</a>
                            <p class="text-[#606060] text-xs">${value.video.stats.views} views • ${value.video.publishedTimeText}</p>
                        </div>
                    </div>
                </div>
            `).join("")}
    `)


    const selectedVids = document.querySelectorAll(".vid-list")

    selectedVids.forEach(vid => {
        vid.addEventListener('click', () => {
            let vidId = vid.getAttribute('videoID')
            localStorage.setItem('ID', vidId)
        })
    })

    const mainVideo = document.querySelector('#mainVideo')
    const matchVideoID = result.contents.find(video => video.video.videoId === storageItem)

    if (matchVideoID) {
        const { title, stats, publishedTimeText } = matchVideoID.video
        const { views } = stats

        console.log(title);

        mainVideo.insertAdjacentHTML("beforeend", /*HTML*/`
                <div class="mt-3">
                <h1 class="text-xl font-semibold">${title}</h1>
                <div class="mt-3 flex justify-between">
                    <div class="flex">
                        <img class="rounded-full w-[40px] mr-3" src="https://yt3.ggpht.com/ytc/AOPolaRQMdTorx40VODGGitv_bCo4G_Dr6eFvmBuma3G=s48-c-k-c0x00ffffff-no-rj" alt="">
                        <div>
                            <a class="font-medium" href="./channelTab.html">CreativeCode</a>
                            <p class="text-[#606060] text-xs">495 suscriptores</p>
                        </div>
                        <button class="ml-6 rounded-full bg-black text-white px-4 text-center">Suscribirse</button>
                    </div>
                    <div class="flex space-x-3">
                        <div class="flex items-center bg-[#f0f0f0] rounded-full">
                            <div class="px-4 h-full items-center flex gap-2 rounded-l-full hover:bg-[#e6e6e6] hover:cursor-pointer">
                                <img width="24px" src="../assets/like-svgrepo-com.svg" alt="">
                                <p class="text-sm">3</p>
                            </div>
                            <hr class="h-[24px] w-[1px] bg-black/[.1]">
                            <div class="px-4 h-full items-center flex gap-2 rounded-r-full hover:bg-[#e6e6e6] hover:cursor-pointer">
                                <img width="24px" src="../assets/dislike-svgrepo-com.svg" alt="">
                            </div>
                        </div>
                        <div class="bg-[#f0f0f0] rounded-full font-medium text-sm flex items-center px-4 h-full space-x-3 hover:bg-[#e6e6e6] hover:cursor-pointer">
                            <img width="24px" src="../assets/share-arrow-svgrepo-com.svg" alt="">
                            <p>Compartir</p>
                        </div>
                        <div class="bg-[#f0f0f0] rounded-full font-medium text-sm flex items-center px-4 h-full space-x-3 hover:bg-[#e6e6e6] hover:cursor-pointer">
                            <img width="24px" src="../assets/download-svgrepo-com.svg" alt="">
                            <p>Descargar</p>
                        </div>
                        <div class="bg-[#f0f0f0] rounded-full font-medium text-sm flex items-center px-4 h-full space-x-3 hover:bg-[#e6e6e6] hover:cursor-pointer">
                            <img width="24px" src="../assets/scissors-svgrepo-com.svg" alt="">
                            <p>Recortar</p>
                        </div>
                        <div class="bg-[#f0f0f0] rounded-full font-normal flex items-center px-2 h-full hover:bg-[#e6e6e6] hover:cursor-pointer">
                            <img width="24px" src="../assets/ellipsis-h-svgrepo-com.svg" alt="">
                        </div>
                    </div>
                </div>
            </div>
    `)
    }

}

asyncFunction()

const toggleSidebarBtn = document.querySelector('#toggleSidebar');
const sidebar = document.querySelector('aside');
const mainContainer = document.querySelector('main')
const iconTexts = document.querySelectorAll('.icon-text');

toggleSidebarBtn.addEventListener('click', () => {
    sidebar.classList.toggle('hidden');
    sidebar.classList.toggle('w-[250px]');
    mainContainer.classList.toggle('mx-[75px]');
});     