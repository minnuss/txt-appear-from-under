const msgArray = ['Wear Face Mask', 'Cover Face When Coughing', 'Wash Your Hand Frequently', 'Stay At Home', 'Avoid Close Contact'];
const messageBox = document.querySelector('.message');
const messageBoxChildren = document.querySelector('.message').children;

let idx = 0;

function slideIn() {

    // DELETE MESSAGES THAT ARE CREATED, SO THERE CAN BE ONLY ONE
    if (messageBox.children.length > 0) {
        Array.from(messageBoxChildren).forEach(line => {
            line.remove();
        })
    }

    // CREATING MESSAGE AND ADDING CLASSES/STYLES TO IT
    let msg = document.createElement('div');
    msg.textContent = msgArray[idx];
    msg.classList.add('msg');
    msg.classList.add('up');
    messageBox.appendChild(msg);

    // RESETING IDX
    if (idx === msgArray.length - 1) {
        idx = 0;
    } else {
        idx++
    };

    // SETTING SLIDE IN AWAY CLASS
    function removeClass() {
        msg.classList.remove('up');
        msg.classList.add('erase');
    }
    setTimeout(removeClass, 2500);
}
slideIn()
setInterval(slideIn, 3000)


