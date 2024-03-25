let search = document.querySelector('#input')
let btn = document.querySelector('.search')
let URL = 'https://api.unsplash.com/search/photos?'
let URL_KEY = 'xvMSv18w5-zLaBIEmeCg6cB6_B0j28FCou_M9Y4z7q8'
let searchResult = document.querySelector('.result')
let more = document.querySelector('.more')
let page = 1



async function getImages(query){
    let response = await fetch(URL + `page=${page}` + `&query=${query}` +`&client_id=${URL_KEY}&per_page=12`)
    let data = await response.json()
    let results = data.results

    if(page===1){
        searchResult.innerHTML = ''
    }
   
    results.map((result)=>{
        let image = document.createElement('img')
        image.src = result.urls.small
        let link = document.createElement('a')
        link.href = result.links.html
        link.target = '._main'

        link.appendChild(image)
        searchResult.appendChild(link)
    })
    more.style.display = 'block'
    
    
}


btn.addEventListener('click',(evt)=>{
    evt.preventDefault()
    page = 1
    getImages(search.value)

})

more.addEventListener('click',()=>{
    page++
    getImages(search.value)
})
