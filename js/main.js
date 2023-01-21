const jpgGraphic = document.querySelector("#bitmap");

function logID()
{
    console.log('Hii, This is Javascript Log!',this.id);

}
if (jpgGraphic){
    jpgGraphic.addEventListener('click', logID);
}

const vectorGraphic=document.querySelector('#vector')