const svgs = {
  grid:
    '<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M3.2 11V3.2H11V11Zm0 9.8V13H11v7.8ZM13 11V3.2h7.8V11Zm0 9.8V13h7.8v7.8Z"/></svg>',
  row:
    '<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M20.8 20.8H3.2v-4.7h17.6Zm0-6.35H3.2v-4.9h17.6Zm0-6.55H3.2V3.2h17.6Z"/></svg>',
  add:
    '<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M11.175 18.85V12.8h-6.05v-1.65h6.05V5.1h1.65v6.05h6.05v1.65h-6.05v6.05Z"/></svg>',
  times:
    '<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="m6.3 18.9-1.15-1.2 5.675-5.7L5.15 6.25l1.15-1.2 5.725 5.75L17.7 5.05l1.15 1.2L13.175 12l5.675 5.7-1.15 1.2-5.675-5.75Z"/></svg>',
  settings: '<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M10.225 20.85 9.85 18q-.3-.075-.875-.387-.575-.313-1.15-.738l-2.625 1.1-1.775-3.125L5.7 13.125q-.05-.25-.075-.525-.025-.275-.025-.575 0-.25.025-.538.025-.287.075-.662l-2.275-1.7L5.2 6.05l2.625 1.1q.425-.35.95-.662Q9.3 6.175 9.85 6l.375-2.85h3.55L14.15 6q.575.2 1.025.475.45.275.925.675l2.7-1.1 1.775 3.075-2.375 1.8q.05.3.075.55.025.25.025.525 0 .25-.025.512-.025.263-.1.613l2.35 1.725-1.775 3.125-2.65-1.15q-.45.4-.912.675-.463.275-1.038.475l-.375 2.875Zm1.725-6.425q1 0 1.713-.7.712-.7.712-1.725 0-1.025-.712-1.725-.713-.7-1.713-.7-1.025 0-1.725.7-.7.7-.7 1.725 0 1.025.7 1.725.7.7 1.725.7Z"/></svg>',
  home: '<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M4 21V9l8-6 8 6v12h-6v-7h-4v7Z"/></svg>',
  app: '<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M11.1 19h1.75v-1.25q1.25-.225 2.15-.975.9-.75.9-2.225 0-1.05-.6-1.925T12.9 11.1q-1.5-.5-2.075-.875-.575-.375-.575-1.025 0-.65.463-1.025.462-.375 1.337-.375.8 0 1.25.388.45.387.65.962l1.6-.65q-.275-.875-1.012-1.525-.738-.65-1.638-.725V5h-1.75v1.25q-1.25.275-1.95 1.1-.7.825-.7 1.85 0 1.175.688 1.9.687.725 2.162 1.25 1.575.575 2.188 1.025.612.45.612 1.175 0 .825-.588 1.212-.587.388-1.412.388t-1.462-.513q-.638-.512-.938-1.537l-1.65.65q.35 1.2 1.088 1.938.737.737 1.912 1.012Zm.9 3q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"/></svg>'

}

function getSvg(iconname) {
  return svgs[iconname]
}
export default getSvg
