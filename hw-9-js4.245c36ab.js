let e=document.querySelector("#first-name"),t=document.querySelector("#last-name"),u=document.querySelector("#phone"),a=document.querySelector("#email"),n=document.querySelector("#contact-form"),l=document.querySelector("#contact-list"),o=JSON.parse(localStorage.getItem("contacts"))||[],c=null;function i(){l.innerHTML=o.map((e,t)=>`
        <li>
          <h2>${e.name} ${e.surname}</h2>
          <p>Email: ${e.email}</p>
          <p>\u{422}\u{435}\u{43B}\u{435}\u{444}\u{43E}\u{43D}: ${e.phone}</p>
          <button class="edit-btn" data-index="${t}">
            \u{420}\u{435}\u{434}\u{430}\u{433}\u{443}\u{432}\u{430}\u{442}\u{438}
          </button>
          <button class="delete-btn" data-index="${t}">
            \u{412}\u{438}\u{434}\u{430}\u{43B}\u{438}\u{442}\u{438}
          </button>
        </li>
      `).join("")}n.addEventListener("submit",l=>{l.preventDefault();let r={name:e.value.trim(),surname:t.value.trim(),phone:u.value.trim(),email:a.value.trim()};null===c?o.push(r):(o[c]=r,c=null),localStorage.setItem("contacts",JSON.stringify(o)),i(),n.reset()}),l.addEventListener("click",n=>{let l=n.target.dataset.index;if(n.target.classList.contains("delete-btn")&&(o.splice(l,1),localStorage.setItem("contacts",JSON.stringify(o)),i()),n.target.classList.contains("edit-btn")){let n=o[l];e.value=n.name,t.value=n.surname,u.value=n.phone,a.value=n.email,c=l}}),i();
//# sourceMappingURL=hw-9-js4.245c36ab.js.map
