const container = document.getElementById('notfcontainer');
let notfContent
let closeButton = "";
function createNotf(params) {
    if(params.autoClose == true) {
        setTimeout(() => {
            closeNotf();
        }, params.autoCloseTime);
    }
    if (params.closable == true) {
        closeButton = `
        <button onclick="closeNotf()" id="closenotf">
        <span class="material-icons">
            close  
        </span>
    </button>
        `
    }
    notfContent = `
    <div id="notf">
    <img id="notficon" src="${params.icon}" alt="">
    <p id="notficontext">${params.iconText}</p>
    <p id="notftitle">${params.title}</p>
    <img id="notfimage" src="${params.image}" alt="">
    <p id="notfbody">${params.body}</p>
    ${closeButton}
</div>`
document.getElementById('notfcontainer').innerHTML = notfContent;

}

function closeNotf() {
    const notf = document.getElementById('notf');
    notf.style.animation = 'gotoright 1s cubic-bezier(1,0,.3,1)';
    setTimeout(() => {
    container.removeChild(notf);
    }, 900);
}