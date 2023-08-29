function playVideo(parameter) {
    let iframe = document.querySelector('#mainVideo');
    iframe.insertAdjacentHTML('afterbegin', `
    <iframe width="100%" height="615" src="https://www.youtube.com/embed/${parameter}?si=czx-JXcyfxDxe0lv&autoplay=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
                <div class="vid-list grid gap-y-3 w-fit" videoID="${value.video.videoId}">
                    <img src="${value.video.thumbnails[3].url}" class="rounded-lg hover:cursor-pointer img-vid" /> 
                    <div  class="flex-div">
                        <div>
                            <a href="./videoTab.html" class="font-medium">${value.video.title}</a>
                            <p class="text-[#aaa]">${value.video.stats.views} views • ${value.video.publishedTimeText}</p>
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

    const selectedImg = document.querySelectorAll(".img-vid")

    selectedImg.forEach(vid => {
        vid.addEventListener('click', () => {
            window.open('./videoTab.html')
        })
    })

}

asyncFunction()

const toggleSidebarBtn = document.getElementById('toggleSidebar');
const sidebar = document.querySelector('aside');
const iconTexts = document.querySelectorAll('.icon-text');

toggleSidebarBtn.addEventListener('click', () => {
    sidebar.classList.toggle('hidden');
    sidebar.classList.toggle('w-[250px]');
});     