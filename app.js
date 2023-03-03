const contentWrapper = document.querySelector('.content .container')

async function getPosts () {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    data.forEach(post => {
        const card = document.createElement('div')
        card.classList.add('card')

        const img = document.createElement('img')
        img.setAttribute('alt', 'news')
        img.setAttribute('src', 'images/news.jpeg')
        card.append(img)

        const title = document.createElement('h2')
        title.innerText = post.title
        card.append(title)

        const body = document.createElement('p')
        body.innerText = post.body
        card.append(body)

        contentWrapper.append(card)
    })
}
getPosts()