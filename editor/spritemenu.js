const newEntityContainer = document.getElementById('newentitybg');

newEntityContainer.onclick = () => {
    // for peace of mind
    if(newEntityContainer.classList.contains("hidden")) return;

    while(newEntityContainer.firstChild){
        newEntityContainer.firstChild.remove();
    }
    newEntityContainer.classList.add('hidden');
}

const newEntityBtn = document.getElementById('newentity');
newEntityBtn.onclick = () => {
  // const newName = prompt('enter workspace');
  // if(newName === null) return;
  // changeWorkspace(newName);

  const minimumDimension = Math.min(window.innerWidth, window.innerHeight);

  newEntityContainer.classList.remove("hidden");

  const wsNames = Object.keys(window.workspaceToId);
  for(let i = 0; i < wsNames.length; i++){
    const wsName = wsNames[i];
    const id = window.workspaceToId[wsName];
    const entity = window.entities[id];

    const angle = Math.PI * 2 * (i+1) / (wsNames.length+1);

    const newBtn = document.createElement('button');
    newBtn.type = 'button';
    newBtn.classList.add('spriteworkspacebutton');

    // emoji or image
    if(entity.drawImg === true){
      const img = document.createElement('img');
      img.src = entity.img.src;
      img.classList.add('spriteworkspaceimg');
      newBtn.appendChild(img); 
    } else {
      const p = document.createElement('p');
      p.innerText = window.entities[id].emoji;
      p.style.margin = '0';
      newBtn.appendChild(p);
    }

    // label
    const l = document.createElement('p');
    l.innerText = wsName;
    l.classList.add('spriteworkspacelabel');
    newBtn.appendChild(l);

    newBtn.style.left = window.innerWidth / 2 + Math.cos(angle) * minimumDimension * 0.3 + 'px';
    newBtn.style.top = window.innerHeight / 2 + Math.sin(angle) * minimumDimension * 0.3 + 'px';

    newBtn.onclick = () => {
      window.changeWorkspace(wsName);
      while(newEntityContainer.firstChild){
        newEntityContainer.firstChild.remove();
      }
      newEntityContainer.classList.add('hidden');
    }

    newEntityContainer.appendChild(newBtn);
    // for now we will just take the sprite's emoji as the image. Eventually for custom images we should generate a canvas and stuff

    // TODO: resizing makes buttons in the wrong pos
  }

  // new workspace btn
//   {
    const newBtn = document.createElement('button');
    newBtn.type = 'button';
    newBtn.classList.add('spriteworkspacebutton');

    // new image
    const img = document.createElement('img');
    img.src = `data:image/svg+xml,<svg width="800px" height="800px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"><g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-362.000000, -1037.000000)" fill="%23000000"><path d="M390,1049 L382,1049 L382,1041 C382,1038.79 380.209,1037 378,1037 C375.791,1037 374,1038.79 374,1041 L374,1049 L366,1049 C363.791,1049 362,1050.79 362,1053 C362,1055.21 363.791,1057 366,1057 L374,1057 L374,1065 C374,1067.21 375.791,1069 378,1069 C380.209,1069 382,1067.21 382,1065 L382,1057 L390,1057 C392.209,1057 394,1055.21 394,1053 C394,1050.79 392.209,1049 390,1049" id="plus" sketch:type="MSShapeGroup"></path></g></g></svg>`;
    img.classList.add('spriteworkspaceimg');
    // black bg
    img.style.background = 'rgba(0,0,0,0.2)';
    img.style.borderRadius = '12px'; 
    newBtn.appendChild(img);

    // label
    const l = document.createElement('p');
    l.innerText = 'New';
    l.classList.add('spriteworkspacelabel');
    newBtn.appendChild(l);

    const angle = Math.PI * 2;
    newBtn.style.left = window.innerWidth / 2 + Math.cos(angle) * minimumDimension * 0.3 + 'px';
    newBtn.style.top = window.innerHeight / 2 + Math.sin(angle) * minimumDimension * 0.3 + 'px';

    newBtn.onclick = () => {
      const newName = prompt('enter workspace name');
      if(newName === null) return;
      window.changeWorkspace(newName);
      while(newEntityContainer.firstChild){
        newEntityContainer.firstChild.remove();
      }
      newEntityContainer.classList.add('hidden');
    }

    newEntityContainer.appendChild(newBtn);
//   }

  // back button
//   {
//     const newBtn = document.createElement('button');
//     newBtn.type = 'button';
//     newBtn.classList.add('spriteworkspacebutton');

//     // new image
//     const img = document.createElement('img');
//     img.src = `data:image/svg+xml,<%3Fxml version="1.0" encoding="utf-8"%3F><svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.7071 1.29289C14.0976 1.68342 14.0976 2.31658 13.7071 2.70711L12.4053 4.00896C17.1877 4.22089 21 8.16524 21 13C21 17.9706 16.9706 22 12 22C7.02944 22 3 17.9706 3 13C3 12.4477 3.44772 12 4 12C4.55228 12 5 12.4477 5 13C5 16.866 8.13401 20 12 20C15.866 20 19 16.866 19 13C19 9.2774 16.0942 6.23349 12.427 6.01281L13.7071 7.29289C14.0976 7.68342 14.0976 8.31658 13.7071 8.70711C13.3166 9.09763 12.6834 9.09763 12.2929 8.70711L9.29289 5.70711C9.10536 5.51957 9 5.26522 9 5C9 4.73478 9.10536 4.48043 9.29289 4.29289L12.2929 1.29289C12.6834 0.902369 13.3166 0.902369 13.7071 1.29289Z" fill="%230F1729"/></svg>`;
//     img.classList.add('spriteworkspaceimg');
//     // black bg
//     // img.style.background = 'rgba(0,0,0,0.2)';
//     // img.style.borderRadius = '12px';
//     newBtn.appendChild(img);

//     // label
//     const l = document.createElement('p');
//     l.innerText = 'Back';
//     l.classList.add('spriteworkspacelabel');
//     newBtn.appendChild(l);

//     newBtn.style.left = window.innerWidth / 2 + 'px';
//     newBtn.style.top = window.innerHeight / 2 + 'px';

//     newBtn.onclick = () => {
//       while(newEntityContainer.firstChild){
//         newEntityContainer.firstChild.remove();
//       }
//       newEntityContainer.classList.add('hidden');
//     }

//     newEntityContainer.appendChild(newBtn);
//   }

  // Choose Sprite text
  const cs = document.createElement('p');
  cs.innerText = 'Choose Sprite';
  cs.classList.add('bigspriteworkspacelabel');
  newEntityContainer.appendChild(cs);
};

// if this gets any bigger then delegate a resize.js and use window.editorResizeFunctions = []
window.addEventListener("resize", () => {
    if(newEntityContainer.classList.contains("hidden")) return;

    const minimumDimension = Math.min(window.innerWidth, window.innerHeight);

    for(let i = 0; i < newEntityContainer.children.length-/*2*/1/*dont count last element, it's not a button*/; i++){
        const newBtn = newEntityContainer.children[i];
        
        const angle = Math.PI * 2 * (i+1) / (window.entities.length+1);

        newBtn.style.left = window.innerWidth / 2 + Math.cos(angle) * minimumDimension * 0.3 + 'px';
        newBtn.style.top = window.innerHeight / 2 + Math.sin(angle) * minimumDimension * 0.3 + 'px';
    }

    // // back button
    // const newBtn = newEntityContainer.children[newEntityContainer.children.length-2];

    // newBtn.style.left = window.innerWidth / 2 + 'px';
    // newBtn.style.top = window.innerHeight / 2 + 'px';
})