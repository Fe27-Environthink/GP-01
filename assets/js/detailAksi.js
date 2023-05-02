const detailAksi = document.getElementById("aksi")

const urlParams = new URLSearchParams(window.location.search);
const aksiId = urlParams.get('id');
console.log(aksiId);
const fetchDetailAksi = fetch(`https://64506cd6e1f6f1bb22977ba9.mockapi.io/aksi/${aksiId}`)

fetchDetailAksi.then(response => response.json())
.then(data=>{
    document.getElementById("title").textContent=data.nama;
    document.getElementById("paragraf1").textContent=data.paragraf1;
    document.getElementById("paragraf2").textContent=data.paragraf2
    document.getElementById("paragraf-konklusi").textContent=data.paragrafKonklusi
    document.getElementById("heading-form").textContent=data.jumlahDukungan +" orang yang sudah mendukung"
    document.getElementById("caption-bar").textContent=data.jumlahDukungan 
    document.getElementById("target").textContent=data.Target
    let Persentase = (data.jumlahDukungan  / data.Target) * 100
    document.getElementById("bar-petisi").style.width=Persentase+"%"
})