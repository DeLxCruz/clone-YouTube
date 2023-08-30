const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '31306662femsh8324d84aa6c9d9cp15e075jsn6d617af1959f',
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
};


const asyncFunction = async () => {
    options.method = 'GET'
    const url = "https://youtube138.p.rapidapi.com/channel/videos/?id=UC8fkwsjcI_MhralEX1g4OBw&hl=en&gl=US";
    // const url = '../data/dataVideos.json';
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);

    let banner = document.querySelector("#container")
    banner.insertAdjacentHTML("beforeend", /*HTML*/`
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