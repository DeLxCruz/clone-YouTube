const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '31306662femsh8324d84aa6c9d9cp15e075jsn6d617af1959f',
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
};


const asyncFunctionChannel = async () => {
    options.method = 'GET'
    const url = "https://youtube138.p.rapidapi.com/channel/details/?id=UC8fkwsjcI_MhralEX1g4OBw&hl=en&gl=US";
    // const url = '../data/dataChannel.json';
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result.banner.desktop[2].url);

    let banner = document.querySelector("#banner")
    banner.insertAdjacentHTML("afterbegin", /*HTML*/`
        <img class="w-full" src="${result.banner.desktop[0].url}" />
        <div class="flex items-center justify-between my-6 mx-[150px]">
            <div class="flex items-center space-x-8">
                <img class="rounded-full" width="128px" src="${result.avatar[2].url}">
                <div>
                    <h1 href="./videoTab.html" class="font-medium text-2xl">${result.title}</h1>
                    <div class="flex space-x-3 text-sm mt-2">
                        <p class="font-medium">${result.username}</p>
                        <p>${result.stats.subscribersText}</p>
                        <p>${result.stats.videosText}</p>
                    </div>
                </div>
            </div>
            <button class="ml-6 rounded-full bg-black text-white px-4 text-center h-[36px]">Suscribirse</button>
        </div>
    `)
}

asyncFunctionChannel()

const asyncFunction = async () => {
    options.method = 'GET'
    const url = "https://youtube138.p.rapidapi.com/channel/videos/?id=UC8fkwsjcI_MhralEX1g4OBw&hl=en&gl=US";
    // const url = '../data/dataVideos.json';
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);

    let videos = document.querySelector("#container")
    videos.insertAdjacentHTML("beforeend", /*HTML*/`
            ${result.contents.map((value) => /*HTML*/`
                <div class="vid-list grid gap-y-3" videoID="${value.video.videoId}">
                    <a href="./videoTab.html">
                        <img src="${value.video.thumbnails[3].url}" class="rounded-lg" /> 
                    </a>
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

}

asyncFunction()

const toggleSidebarBtn = document.getElementById('toggleSidebar');
const sidebar = document.querySelector('aside');
const iconTexts = document.querySelectorAll('.icon-text');

toggleSidebarBtn.addEventListener('click', () => {
    sidebar.classList.toggle('w-[250px]');
    sidebar.classList.toggle('w-16');

    iconTexts.forEach(iconText => {
        iconText.classList.toggle('hidden');
    });
});