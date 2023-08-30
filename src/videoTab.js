function playVideo(parameter) {
    let iframe = document.querySelector('#mainVideo');
    iframe.insertAdjacentHTML('afterbegin', `
    <iframe class="rounded-2xl" width="100%" height="615" src="https://www.youtube.com/embed/${parameter}?si=czx-JXcyfxDxe0lv&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    `)
}

let storageItem = localStorage.getItem('ID')
console.log(storageItem);
playVideo(storageItem)

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '31306662femsh8324d84aa6c9d9cp15e075jsn6d617af1959f',
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
};

const asyncFunction = async (p1) => {
    options.method = 'GET'
    const url = "https://youtube138.p.rapidapi.com/channel/videos/?id=UC8fkwsjcI_MhralEX1g4OBw&hl=en&gl=US";
    // const url = '../data/dataVideos.json';
    const response = await fetch(url,options);
    const result = await response.json();
    console.log(result);

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
    // const urlDetails = '../data/dataVideoDetails.json';
    const urlDetails = `https://youtube138.p.rapidapi.com/video/details/?id=${p1}&hl=en&gl=US`
    const responseDetails = await fetch(urlDetails, options);
    const resultDetails = await responseDetails.json();

    mainVideo.insertAdjacentHTML("beforeend", /*HTML*/`
    <div class="mt-3">
    <h1 class="text-xl font-semibold">${resultDetails.title}</h1>
    <div class="mt-3 flex justify-between">
        <div class="flex">
            <img class="rounded-full w-[40px] mr-3" src="https://yt3.ggpht.com/ytc/AOPolaRQMdTorx40VODGGitv_bCo4G_Dr6eFvmBuma3G=s48-c-k-c0x00ffffff-no-rj" alt="">
            <div>
                <a class="font-medium" href="./channelTab.html">${resultDetails.author.title}</a>
                <p class="text-[#606060] text-xs">${resultDetails.author.stats.subscribersText}</p>
            </div>
            <button class="ml-6 rounded-full bg-black text-white px-4 text-center">Suscribirse</button>
        </div>
        <div class="flex space-x-3">
            <div class="flex items-center bg-[#f0f0f0] rounded-full">
                <div class="px-4 h-full items-center flex gap-2 rounded-l-full hover:bg-[#e6e6e6] hover:cursor-pointer">
                    <img width="24px" src="../assets/like-svgrepo-com.svg" alt="">
                    <p class="text-sm">${resultDetails.stats.likes}</p>
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
    <div class="flex">
        <p></p>
    </div>
    <h1 class="mt-12 text-2xl text-center">No comments available</h1>
</div>
    `)

}

asyncFunction(storageItem)

const toggleSidebarBtn = document.querySelector('#toggleSidebar');
const sidebar = document.querySelector('aside');
const mainContainer = document.querySelector('main')
const iconTexts = document.querySelectorAll('.icon-text');

toggleSidebarBtn.addEventListener('click', () => {
    sidebar.classList.toggle('hidden');
    sidebar.classList.toggle('w-[250px]');
    mainContainer.classList.toggle('mx-[75px]');
});     