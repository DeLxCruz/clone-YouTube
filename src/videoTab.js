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
                <div>
                <h1>${title}</h1>
                <div>
                    <div>
                        <img src="" alt="">
                        <div>
                            <a href=""></a>
                            <p></p>
                        </div>
                        <button></button>
                    </div>
                    <div>
                        <div>
                            <div>
                                <img src="" alt="">
                                <p></p>
                            </div>
                            <hr>
                            <div>
                                <img src="" alt="">
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src="" alt="">
                                <p></p>
                            </div>
                            <div>
                                <img src="" alt="">
                                <p></p>
                            </div>
                        </div>
                        <div>
                            <img src="" alt="">
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