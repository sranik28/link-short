const input = document.getElementById('input-aira');
const inputData = async (link) => {
    const url = `https://api.shrtco.de/v2/shorten?url=${link}`;
    let res = await fetch(url);
    let data = await res.json();
    // console.log(data)
}
const inputBtn = document.getElementById('input-button');
inputBtn.onclick = ()=>{
    inputData(input.value)
    // console.log(input)
}