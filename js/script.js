//SETTING MENU TOOGLE
function openMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle ('open');
}


//SETTING FORM INPUT JS
document.addEventListener('DOMContentLoaded', () => {
    const messageForm = document.getElementById('messageForm');
    const currentTime = document.getElementById('currentTime');
    const outputName = document.getElementById('outputName');
    const outputDob = document.getElementById('outputDob');
    const outputGender = document.getElementById('outputGender');
    const outputMessage = document.getElementById('outputMessage');
    const statusMessage = document.getElementById('statusMessage');

    
    // SETTING CURENT TIME JS
    function updateTime() {
        const now = new Date();
        currentTime.textContent = now.toLocaleString('en-GB', { weekday: 'long', hour: '2-digit', minute: '2-digit' });
    }

    updateTime();
    setInterval(updateTime, 1000);

    messageForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const formData = new FormData(messageForm);
        outputName.textContent = formData.get('name');
        outputDob.textContent = formData.get('dob');
        outputGender.textContent = formData.get('gender');
        outputMessage.textContent = formData.get('message');
        statusMessage.textContent = 'Pesan terkirim';
        statusMessage.style.color = 'green';
        
        messageForm.reset();
    });
});
