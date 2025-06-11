"use strict";var o=require("react/jsx-runtime"),e=require("@emotion/react"),a=require("@emotion/styled"),r=require("react");"function"==typeof SuppressedError&&SuppressedError;const i={heading1:"4rem",heading2:"3.5rem",heading3:"3rem",heading4:"2.5rem",heading5:"2rem",heading6:"1.5rem",bodyL:"1.375rem",bodyM:"1.25rem",bodyS:"1.125rem",paragraph:"1rem",label:"0.875rem"},n={heading1:"3.5rem",heading2:"3rem",heading3:"2.5rem",heading4:"2.25rem",heading5:"1.75rem",heading6:"1.375rem",bodyL:"1.25rem",bodyM:"1.125rem",bodyS:"1rem",paragraph:"0.9375rem",label:"0.875rem"},d={heading1:"3rem",heading2:"2.5rem",heading3:"2rem",heading4:"1.75rem",heading5:"1.5rem",heading6:"1.25rem",bodyL:"1.125rem",bodyM:"1rem",bodyS:"0.875rem",paragraph:"0.875rem",label:"0.875rem"},l={heading1:"1.25",heading2:"1.29",heading3:"1.33",heading4:"1.4",heading5:"1.38",heading6:"1.5",bodyL:"1.45",bodyM:"1.5",bodyS:"1.56",paragraph:"1.5",label:"1.43"},t={heading1:"1.29",heading2:"1.33",heading3:"1.4",heading4:"1.33",heading5:"1.43",heading6:"1.45",bodyL:"1.5",bodyM:"1.56",bodyS:"1.5",paragraph:"1.47",label:"1.43"},s={heading1:"1.33",heading2:"1.4",heading3:"1.38",heading4:"1.43",heading5:"1.5",heading6:"1.5",bodyL:"1.56",bodyM:"1.5",bodyS:"1.43",paragraph:"1.43",label:"1.43"},c={fontSize:{small:i.label,medium:i.paragraph,large:i.bodyM},lineHeight:{small:l.label,medium:l.paragraph,large:l.bodyM}},p={fontSize:{small:n.label,medium:n.paragraph,large:n.bodyM},lineHeight:{small:t.label,medium:t.paragraph,large:t.bodyM}},h={fontSize:{small:d.label,medium:d.paragraph,large:d.bodyM},lineHeight:{small:s.label,medium:s.paragraph,large:s.bodyM}},m={large:"160px",medium:"120px",small:"100px"},x={large:"140px",medium:"100px",small:"95px"},b={large:"120px",medium:"85px",small:"90px"},g={desktop:{large:"48px",medium:"40px",small:"32px"},tablet:{large:"44px",medium:"36px",small:"28px"},mobile:{large:"40px",medium:"32px",small:"24px"}},u={large:"16px",medium:"8px",small:"4px"},$={large:"12px",medium:"6px",small:"2px"},w={large:"8px",medium:"4px",small:"1px"},v={large:"48px",medium:"40px",small:"32px"},k={large:"44px",medium:"36px",small:"28px"},f={large:"40px",medium:"32px",small:"24px"},y={large:"32px",medium:"24px",small:"16px"},z={large:"28px",medium:"20px",small:"14px"},S={large:"24px",medium:"16px",small:"12px"},B={large:{vertical:"16px",horizontal:"20px"},medium:{vertical:"14px",horizontal:"12px"},small:{vertical:"10px",horizontal:"8px"},iconOnly:{vertical:"8px",horizontal:"8px"}},O={large:{vertical:"14px",horizontal:"16px"},medium:{vertical:"12px",horizontal:"10px"},small:{vertical:"8px",horizontal:"6px"},iconOnly:{vertical:"8px",horizontal:"8px"}},T={large:{vertical:"12px",horizontal:"12px"},medium:{vertical:"10px",horizontal:"8px"},small:{vertical:"6px",horizontal:"4px"},iconOnly:{vertical:"8px",horizontal:"8px"}},M="3px",j="2px",C="2px",D={large:"12px",medium:"8px",small:"4px"},H={large:"10px",medium:"6px",small:"3px"},L={large:"8px",medium:"4px",small:"2px"},I=a.button`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: 0.3s ease;
	white-space: nowrap;
	border-style: solid;
	box-shadow: none;
	outline: none;

	${({size:o="medium",hasIcon:a,hasChildren:r})=>e.css`
		min-width: ${a&&!r?g.mobile[o]:b[o]};
		min-height: ${f[o]};
		padding-top: ${a&&!r?T.iconOnly.vertical:T[o].vertical};
		padding-bottom: ${a&&!r?T.iconOnly.vertical:T[o].vertical};
		padding-left: ${a&&!r?T.iconOnly.horizontal:T[o].horizontal};
		padding-right: ${a&&!r?T.iconOnly.horizontal:T[o].horizontal};
		gap: ${a&&r?w[o]:"0"};
		& > svg {
			width: ${S[o]};
			height: ${S[o]};
		}
		font-size: ${a&&!r?"0":h.fontSize[o]};
		line-height: ${h.lineHeight[o]};
		border-radius: ${L[o]};
		border-width: ${C};
	`}

	/* Tablet */
	@media (min-width: ${o=>o.theme.breakpoints.tablet}) {
		${({size:o="medium",hasIcon:a,hasChildren:r})=>e.css`
			min-width: ${a&&!r?g.tablet[o]:x[o]};
			min-height: ${k[o]};
			padding-top: ${a&&!r?O.iconOnly.vertical:O[o].vertical};
			padding-bottom: ${a&&!r?O.iconOnly.vertical:O[o].vertical};
			padding-left: ${a&&!r?O.iconOnly.horizontal:O[o].horizontal};
			padding-right: ${a&&!r?O.iconOnly.horizontal:O[o].horizontal};
			gap: ${a&&r?$[o]:"0"};
			& > svg {
				width: ${z[o]};
				height: ${z[o]};
			}
			font-size: ${a&&!r?"0":p.fontSize[o]};
			line-height: ${p.lineHeight[o]};
			border-radius: ${H[o]};
			border-width: ${j};
		`}
	}

	/* Desktop */
	/* Desktop */
	@media (min-width: ${o=>o.theme.breakpoints.desktop}) {
		${({size:o="medium",hasIcon:a,hasChildren:r})=>e.css`
			min-width: ${a&&!r?g.desktop[o]:m[o]};
			min-height: ${v[o]};
			padding-top: ${a&&!r?B.iconOnly.vertical:B[o].vertical};
			padding-bottom: ${a&&!r?B.iconOnly.vertical:B[o].vertical};
			padding-left: ${a&&!r?B.iconOnly.horizontal:B[o].horizontal};
			padding-right: ${a&&!r?B.iconOnly.horizontal:B[o].horizontal};
			gap: ${a&&r?u[o]:"0"};
			& > svg {
				width: ${y[o]};
				height: ${y[o]};
			}
			font-size: ${a&&!r?"0":c.fontSize[o]};
			line-height: ${c.lineHeight[o]};
			border-radius: ${D[o]};
			border-width: ${M};
		`}
	}

	${({theme:o,variant:a="primary"})=>{const r=o.colors.button[a];let i=e.css``,n=e.css``,d=e.css``,l=e.css``,t=e.css``;return t=e.css`
			background-color: ${r.disabledBackground};
			color: ${r.disabledText};
			border-color: transparent;
			box-shadow: none;
			cursor: not-allowed;
		`,"primary"===a?"defaultShadow"in r&&"hoverText"in r&&"activeText"in r&&"focusBackground"in r&&"focusText"in r&&"focusShadow"in r&&(i=e.css`
					background-color: ${r.background};
					color: ${r.text};
					border-color: transparent; // У primary нет видимой рамки по умолчанию
					box-shadow: 0px 1px 0px 2px ${r.defaultShadow}; // Тень по умолчанию
				`,n=e.css`
					background-color: ${r.hoverBackground};
					color: ${r.hoverText};
					box-shadow: none; // Убираем тень при ховере
				`,d=e.css`
					background-color: ${r.activeBackground};
					color: ${r.activeText};
					box-shadow: none; // Убираем тень при активации
				`,l=e.css`
					background-color: ${r.focusBackground};
					color: ${r.focusText};
					border-color: transparent;
					/* Применяем тень для фокуса */
					/* Mobile */
					box-shadow: 0 0 0 4px ${r.focusShadow};
					/* Tablet */
					@media (min-width: ${o.breakpoints.tablet}) {
						box-shadow: 0 0 0 4px ${r.focusShadow};
					}
					/* Desktop */
					@media (min-width: ${o.breakpoints.desktop}) {
						box-shadow: 0 0 0 4px ${r.focusShadow};
					}
				`):"default"===a?"hoverBorder"in r&&"activeBorder"in r&&"focusBorder"in r&&"focusShadow"in r&&(i=e.css`
					background-color: ${r.background};
					color: ${r.text};
					border-color: transparent;
					box-shadow: none;
				`,n=e.css`
					border-color: ${r.hoverBorder};
					background-color: ${r.hoverBackground};
				`,d=e.css`
					border-color: ${r.activeBorder};
					background-color: ${r.activeBackground};
				`,l=e.css`
					border-color: ${r.focusBorder};
					/* Применяем тень как вторую рамку */
					/* Mobile */
					box-shadow: 0 0 0 ${C}
						${r.focusShadow};
					/* Tablet */
					@media (min-width: ${o.breakpoints.tablet}) {
						box-shadow: 0 0 0 ${j}
							${r.focusShadow};
					}
					/* Desktop */
					@media (min-width: ${o.breakpoints.desktop}) {
						box-shadow: 0 0 0 ${M}
							${r.focusShadow};
					}
				`):"danger"===a?"defaultShadow"in r&&"hoverBackground"in r&&"hoverText"in r&&"activeBackground"in r&&"activeText"in r&&"focusBackground"in r&&"focusText"in r&&"focusShadow"in r&&(i=e.css`
					background-color: ${r.background};
					color: ${r.text};
					border-color: transparent;
					box-shadow: 0px 1px 0px 2px ${r.defaultShadow};
				`,n=e.css`
					background-color: ${r.hoverBackground};
					color: ${r.hoverText};
					box-shadow: none;
				`,d=e.css`
					background-color: ${r.activeBackground};
					color: ${r.activeText};
					box-shadow: none;
				`,l=e.css`
					background-color: ${r.focusBackground};
					color: ${r.focusText};
					border-color: transparent;
					/* Применяем тень для фокуса */
					/* Mobile */
					box-shadow: 0 0 0 4px ${r.focusShadow};
					/* Tablet */
					@media (min-width: ${o.breakpoints.tablet}) {
						box-shadow: 0 0 0 4px ${r.focusShadow};
					}
					/* Desktop */
					@media (min-width: ${o.breakpoints.desktop}) {
						box-shadow: 0 0 0 4px ${r.focusShadow};
					}
				`):"text"===a&&"hoverBackground"in r&&"hoverText"in r&&"hoverShadow"in r&&"activeBackground"in r&&"activeText"in r&&"focusBackground"in r&&"focusText"in r&&"focusShadow"in r&&(i=e.css`
					background-color: ${r.background}; // transparent
					color: ${r.text};
					border-color: transparent;
					box-shadow: none;
				`,n=e.css`
					background-color: ${r.hoverBackground};
					color: ${r.hoverText};
					box-shadow: 0px 1px 0px 2px ${r.hoverShadow}; // Тень снизу
				`,d=e.css`
					background-color: ${r.activeBackground};
					color: ${r.activeText};
					box-shadow: none;
				`,l=e.css`
					background-color: ${r.focusBackground};
					color: ${r.focusText};
					border-color: transparent;
					/* Тень для фокуса */
					/* Mobile */
					box-shadow: 0 0 0 4px ${r.focusShadow};
					/* Tablet */
					@media (min-width: ${o.breakpoints.tablet}) {
						box-shadow: 0 0 0 4px ${r.focusShadow};
					}
					/* Desktop */
					@media (min-width: ${o.breakpoints.desktop}) {
						box-shadow: 0 0 0 4px ${r.focusShadow};
					}
				`),e.css`
			${i}

			&:hover:not(:disabled) {
				${n}
			}

			&:active:not(:disabled) {
				${d}
			}

			&:focus-visible:not(:disabled) {
				${l}
			}

			&:disabled {
				${t}
			}
		`}}
`;exports.Button=a=>{var{children:i,onClick:n,variant:d="primary",size:l="medium",disabled:t=!1,icon:s,iconPosition:c="left","aria-label":p,"aria-describedby":h,"aria-haspopup":m,"aria-expanded":x,"aria-controls":b}=a,g=function(o,e){var a={};for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&e.indexOf(r)<0&&(a[r]=o[r]);if(null!=o&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(o);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(o,r[i])&&(a[r[i]]=o[r[i]])}return a}(a,["children","onClick","variant","size","disabled","icon","iconPosition","aria-label","aria-describedby","aria-haspopup","aria-expanded","aria-controls"]);const u=e.useTheme(),$=!!s,w=r.Children.count(i)>0;return o.jsxs(I,Object.assign({theme:u,variant:d,size:l,disabled:t,onClick:n,hasIcon:$,hasChildren:w,"aria-label":p,"aria-describedby":h,"aria-haspopup":m,"aria-expanded":x,"aria-controls":b},g,{children:[$&&"left"===c&&s,w&&o.jsx("span",{children:i}),$&&"right"===c&&s]}))};
//# sourceMappingURL=index.cjs.js.map
