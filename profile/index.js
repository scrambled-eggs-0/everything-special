const mainTitle = document.querySelector('.title');

const split = location.href.split('/');
const username = split[split.length-1];

const isOwnProfile = username === localStorage.getItem('username');

mainTitle.innerText = `${username}'s Profile`;

const gameDiv = document.querySelector('.gameDiv');

const uploadUrl = location.origin + '/getFns/' + username;

// 5 most recent levels
fetch(uploadUrl, {
    method: 'GET',
})  .then(async (data) => {
        gameDiv.innerText = '';
        const fileNames = (await data.text()).split('|');
        if(fileNames.length === 1 && fileNames[0] === "") {gameDiv.innerText = 'none found :('; return;} // empty response
        for(let i = 0; i < fileNames.length; i++){
            const fileNameWithoutTheDotJS = fileNames[i].split('.')[0];
            
            const frameDiv = document.createElement('div');
            frameDiv.classList.add('frameDiv');

            const IFrame = document.createElement('iframe');
            IFrame.frameborder = "0";
            IFrame.setAttribute("frameBorder", "0");
            IFrame.width = "180vh";
            IFrame.height = "300vh";
            IFrame.src = `${location.origin}/standalone/${fileNameWithoutTheDotJS}`;

            frameDiv.appendChild(IFrame);

            const frameText = document.createElement('div');
            frameText.classList.add('textStyle');
            frameText.style.fontSize = "80%";
            frameText.innerText = 'View in New Tab';
            frameText.style.top = "auto";
            frameText.style.paddingTop = "0.8vh";

            frameText.onclick = () => {
                shared.open(IFrame.src);
            }

            frameDiv.appendChild(frameText);

            if(isOwnProfile === true){
                const deleteText = document.createElement('div');
                deleteText.classList.add('textStyle');
                deleteText.innerText = 'Delete Level';
                deleteText.style.fontSize = "80%";
                deleteText.style.color = 'red';//'#c70000';
                deleteText.style.top = "auto";
                deleteText.style.paddingTop = "0.8vh";

                deleteText.onclick = () => {
                    const sure = confirm("Are you sure you want to delete this level?");
                    if(!sure) return;

                    const headers = new Headers();
                    headers.append('u', localStorage.getItem('username'));
                    headers.append('hp', localStorage.getItem('hashedPassword'));

                    fetch(location.origin + '/deleteLevel/' + fileNameWithoutTheDotJS, {
                        method: 'POST',
                        headers: headers
                    }).then(async (data) => {
                        const succeeded = await data.text();
                        if(succeeded === 'n') {alert('level deletion failed!'); return;}
                        frameDiv.remove();
                        alert('level successfully deleted!');
                    });
                }

                frameDiv.appendChild(deleteText);
            }

            gameDiv.appendChild(frameDiv);
        }
    })
    .catch(error => {
        console.error('error: ', error);
    });

// profile pic
const pfpUrl = location.origin + '/getPfp/' + username;

const profileImgContainer = document.querySelector('.profileImgContainer');

fetch(pfpUrl, {
    method: 'GET',
}).then(async (response) => {
    // console.log(await response.text());
    const blob = await response.blob();
    if(blob.size <= 1) return;
    // TODO: make this work!! I think there's headers that are getting in the way, or there could be something else idk
    const img = new Image();
    img.src = URL.createObjectURL(blob);
    img.classList.add('profileImg');

    img.onload = function() {
        URL.revokeObjectURL(this.src);
    };
    img.setAttribute('draggable', false);

    profileImgContainer.appendChild(img);
}).catch(error => {
    console.error('error: ', error);
});

const backButton = document.querySelector('.backButton');

backButton.onclick = () => {
    // history.back();
    location.replace(`${location.origin}`);
}