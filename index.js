const input = document.getElementById('input-aira');
const modalInput = document.getElementById('input-copy');
const copyBtn = document.getElementById('copy-btn')
const inputData = async (link) => {
    const url = `https://api.shrtco.de/v2/shorten?url=${link}`;
    console.log(url)
    let res = await fetch(url);
    let data = await res.json();
    console.log(data.result.short_link)
    const modal = document.getElementById("my-modal-3").checked  = true;  
    modalInput.value = data.result.short_link
}
const inputBtn = document.getElementById('input-button');
inputBtn.onclick = ()=>{
    inputData(input.value)
    // console.log(input)
}
// copy btn
copyBtn.onclick = () => {
    navigator.clipboard.writeText(modalInput.value)
}
