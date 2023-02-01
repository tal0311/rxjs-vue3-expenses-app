const svgs = {
  grid:
    '<svg xmlns="http://www.w3.org/2000/svg" height="40" width="40"><path d="M6.792 18.458V6.792H18.5v11.666Zm0 14.75V21.5H18.5v11.708Zm14.75-14.75V6.792h11.666v11.666Zm0 14.75V21.5h11.666v11.708Z"/></svg>',
  row:
    '<svg xmlns="http://www.w3.org/2000/svg" height="40" width="40"><path d="M33.208 33.208H6.792v-7.791h26.416Zm0-9.166H6.792v-8.125h26.416Zm0-9.459H6.792V6.792h26.416Z"/></svg>',
  add:
    '<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M11.175 18.85V12.8h-6.05v-1.65h6.05V5.1h1.65v6.05h6.05v1.65h-6.05v6.05Z"/></svg>',
  times:
    '<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="m6.3 18.9-1.15-1.2 5.675-5.7L5.15 6.25l1.15-1.2 5.725 5.75L17.7 5.05l1.15 1.2L13.175 12l5.675 5.7-1.15 1.2-5.675-5.75Z"/></svg>',
  settings: '<svg xmlns="http://www.w3.org/2000/svg" height="40" width="40"><path d="m17.125 35-.667-4.792q-.875-.25-1.916-.833-1.042-.583-1.75-1.25l-4.417 1.958-2.917-5.125 3.917-2.875q-.083-.5-.146-1.041-.062-.542-.062-1 0-.459.062-.98.063-.52.146-1.145L5.458 15l2.917-5 4.375 1.917q.833-.709 1.812-1.271.98-.563 1.855-.813L17.125 5h5.75l.667 4.833q1 .375 1.875.855.875.479 1.708 1.229L31.667 10l2.875 5-4.042 3q.167.542.188 1.042.02.5.02.958 0 .417-.041.917-.042.5-.167 1.125l4 2.916-2.917 5.125-4.458-2q-.833.709-1.729 1.271-.896.563-1.854.813L22.875 35Zm2.792-10.958q1.708 0 2.875-1.167 1.166-1.167 1.166-2.875t-1.166-2.875q-1.167-1.167-2.875-1.167-1.667 0-2.855 1.167-1.187 1.167-1.187 2.875t1.187 2.875q1.188 1.167 2.855 1.167Z"/></svg>',
  home: '<svg xmlns="http://www.w3.org/2000/svg" height="40" width="40"><path d="M8.333 33.333v-17.5L20 7l11.667 8.833v17.5H23V22.708h-6v10.625Z"/></svg>',
  app: '<svg xmlns="http://www.w3.org/2000/svg" height="40" width="40"><path d="M19.208 31.125h1.459v-2q1.958-.083 3.562-1.25 1.604-1.167 1.604-3.458 0-1.875-1.125-3.063-1.125-1.187-4.083-2.312-2.75-1-3.542-1.75-.791-.75-.791-2.084 0-1.333 1.041-2.229 1.042-.896 2.75-.896 1.25 0 2.146.563.896.562 1.521 1.521l1.208-.542q-.666-1.208-1.77-1.937-1.105-.73-2.438-.813v-2h-1.458v2q-2.167.292-3.313 1.521-1.146 1.229-1.146 2.812 0 1.834 1.167 2.917 1.167 1.083 3.875 2.083 2.75 1.084 3.667 1.917.916.833.916 2.292 0 1.75-1.312 2.583-1.313.833-2.896.833-1.5 0-2.729-.854t-1.896-2.396l-1.292.542q.792 1.667 2 2.583 1.209.917 2.875 1.334ZM20 35q-3.083 0-5.813-1.188-2.729-1.187-4.77-3.229-2.042-2.041-3.229-4.771Q5 23.083 5 20q0-3.125 1.188-5.854 1.187-2.729 3.229-4.75 2.041-2.021 4.77-3.208Q16.917 5 20 5q3.125 0 5.854 1.188 2.729 1.187 4.75 3.208t3.208 4.75Q35 16.875 35 20q0 3.083-1.188 5.812-1.187 2.73-3.208 4.771-2.021 2.042-4.75 3.229Q23.125 35 20 35Z"/></svg>',
  sort: '<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="m12 20.275-3.85-3.85.725-.725L12 18.825l3.125-3.125.725.725ZM8.875 8.325 8.15 7.6 12 3.75l3.85 3.85-.725.725L12 5.2Z"/></svg>',
  help: '<svg xmlns="http://www.w3.org/2000/svg" height="40" width="40"><path d="M20 35q-3.125 0-5.854-1.188-2.729-1.187-4.75-3.208t-3.208-4.75Q5 23.125 5 20t1.188-5.854q1.187-2.729 3.208-4.75t4.75-3.208Q16.875 5 20 5t5.854 1.188q2.729 1.187 4.75 3.208t3.208 4.75Q35 16.875 35 20t-1.188 5.854q-1.187 2.729-3.208 4.75t-4.75 3.208Q23.125 35 20 35Zm-4.875-2.292 3.083-7.083q-1.333-.458-2.312-1.417-.979-.958-1.438-2.333l-7.25 2.917q1.125 2.791 3.167 4.833 2.042 2.042 4.75 3.083Zm-.708-14.583q.416-1.375 1.416-2.292 1-.916 2.292-1.375l-2.917-7.25q-2.875 1.125-4.916 3.188-2.042 2.062-3.084 4.812ZM20 24.5q1.875 0 3.188-1.312Q24.5 21.875 24.5 20q0-1.875-1.312-3.188Q21.875 15.5 20 15.5q-1.875 0-3.188 1.312Q15.5 18.125 15.5 20q0 1.875 1.312 3.188Q18.125 24.5 20 24.5Zm4.917 8.208q2.666-1.083 4.687-3.104 2.021-2.021 3.104-4.729l-7.083-3.042q-.417 1.334-1.417 2.292-1 .958-2.291 1.417Zm.625-14.666 7.166-2.959q-1.083-2.666-3.104-4.687-2.021-2.021-4.687-3.104l-2.959 7.166q1.209.5 2.146 1.396.938.896 1.438 2.188Z"/></svg>',
  archive: '<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M5.175 20.775q-.8 0-1.375-.563-.575-.562-.575-1.362V6.7q0-.375.113-.663.112-.287.312-.537l1.375-1.65q.2-.25.488-.375.287-.125.612-.125h11.75q.325 0 .613.125.287.125.487.375L20.35 5.5q.2.25.313.537.112.288.112.663v12.15q0 .8-.562 1.362-.563.563-1.388.563ZM5.5 6.2h13l-.825-.975H6.325Zm-.4 1.875V18.9h13.8V8.075Zm6.9 9.55 3.875-3.875-1.3-1.325-1.625 1.625V9.875h-1.875v4.175L9.45 12.425 8.125 13.75ZM5.1 18.9h13.8H5.1Z"/></svg>',
  edit: '<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M12.075 20.925V18.9l5.225-5.225 2.025 2.025-5.225 5.225ZM3.2 15.9v-1.875h7V15.9Zm16.925-1L18.1 12.875l.675-.675q.275-.275.65-.275t.65.275l.725.725q.275.275.275.65t-.275.65ZM3.2 11.95v-1.875h10.925v1.875Zm0-3.925V6.15h10.925v1.875Z"/></svg>',
  trash: '<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M7.075 20.75q-.775 0-1.325-.55-.55-.55-.55-1.325v-12.8h-.975V4.2H9.05v-.95h5.925v.95H19.8v1.875h-.975v12.8q0 .775-.55 1.325-.55.55-1.325.55ZM16.95 6.075H7.075v12.8h9.875ZM9.125 16.9H11V8.025H9.125Zm3.9 0H14.9V8.025h-1.875ZM7.075 6.075v12.8Z"/></svg>',


}

// Fill: 1, Weight: 200, Grade: 0, Optical size: 40
function getSvg(iconname) {
  return svgs[iconname]
}
export default getSvg
