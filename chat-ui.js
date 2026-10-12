export function appendMessage(container,role,message){const p=document.createElement('p');p.textContent=role+': '+message;container.append(p);container.scrollTop=container.scrollHeight}
