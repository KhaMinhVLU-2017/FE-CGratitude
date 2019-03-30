

const CorvertDateMeo = (today) => {
    let date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear()
    return date
}

export {CorvertDateMeo}