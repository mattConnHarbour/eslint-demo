const getImage = () => {
    return new Promise ((resolve, reject) => {
        fetch('https://picsum.photos/400')
        .then(resp => resolve(resp.url))
    })
}

export default getImage