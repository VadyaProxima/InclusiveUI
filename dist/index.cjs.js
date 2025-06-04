"use strict";var o=require("react/jsx-runtime"),e=require("@emotion/react"),a=require("@emotion/styled"),r=require("react");"function"==typeof SuppressedError&&SuppressedError;const i={fontSize:{small:"1.25rem",medium:"1.5rem",large:"1.75rem"},lineHeight:{small:"16px",medium:"24px",large:"28px"}},n={fontSize:{small:"0.75rem",medium:"0.875rem",large:"1.125rem"},lineHeight:{small:"14px",medium:"20px",large:"26px"}},t={fontSize:{small:"0.625rem",medium:"0.75rem",large:"1rem"},lineHeight:{small:"12px",medium:"16px",large:"24px"}},l={large:"160px",medium:"120px",small:"100px"},d={large:"140px",medium:"100px",small:"95px"},s={large:"120px",medium:"85px",small:"90px"},c={desktop:{large:"48px",medium:"40px",small:"32px"},tablet:{large:"44px",medium:"36px",small:"28px"},mobile:{large:"40px",medium:"32px",small:"24px"}},p={large:"16px",medium:"8px",small:"4px"},x={large:"12px",medium:"6px",small:"2px"},h={large:"8px",medium:"4px",small:"1px"},m={large:"48px",medium:"40px",small:"32px"},u={large:"44px",medium:"36px",small:"28px"},b={large:"40px",medium:"32px",small:"24px"},g={large:"32px",medium:"24px",small:"16px"},$={large:"28px",medium:"20px",small:"14px"},w={large:"24px",medium:"16px",small:"12px"},v={large:{vertical:"16px",horizontal:"20px"},medium:{vertical:"14px",horizontal:"12px"},small:{vertical:"10px",horizontal:"8px"},iconOnly:{vertical:"8px",horizontal:"8px"}},k={large:{vertical:"14px",horizontal:"16px"},medium:{vertical:"12px",horizontal:"10px"},small:{vertical:"8px",horizontal:"6px"},iconOnly:{vertical:"8px",horizontal:"8px"}},f={large:{vertical:"12px",horizontal:"12px"},medium:{vertical:"10px",horizontal:"8px"},small:{vertical:"6px",horizontal:"4px"},iconOnly:{vertical:"8px",horizontal:"8px"}},z="3px",y="2px",S="2px",B={large:"12px",medium:"8px",small:"4px"},O={large:"10px",medium:"6px",small:"3px"},T={large:"8px",medium:"4px",small:"2px"},j=a.button`
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
		min-width: ${a&&!r?c.mobile[o]:s[o]};
		min-height: ${b[o]};
		padding-top: ${a&&!r?f.iconOnly.vertical:f[o].vertical};
		padding-bottom: ${a&&!r?f.iconOnly.vertical:f[o].vertical};
		padding-left: ${a&&!r?f.iconOnly.horizontal:f[o].horizontal};
		padding-right: ${a&&!r?f.iconOnly.horizontal:f[o].horizontal};
		gap: ${a&&r?h[o]:"0"};
		& > svg {
			width: ${w[o]};
			height: ${w[o]};
		}
		font-size: ${a&&!r?"0":t.fontSize[o]};
		line-height: ${t.lineHeight[o]};
		border-radius: ${T[o]};
		border-width: ${S};
	`}

	/* Tablet */
	@media (min-width: ${o=>o.theme.breakpoints.tablet}) {
		${({size:o="medium",hasIcon:a,hasChildren:r})=>e.css`
			min-width: ${a&&!r?c.tablet[o]:d[o]};
			min-height: ${u[o]};
			padding-top: ${a&&!r?k.iconOnly.vertical:k[o].vertical};
			padding-bottom: ${a&&!r?k.iconOnly.vertical:k[o].vertical};
			padding-left: ${a&&!r?k.iconOnly.horizontal:k[o].horizontal};
			padding-right: ${a&&!r?k.iconOnly.horizontal:k[o].horizontal};
			gap: ${a&&r?x[o]:"0"};
			& > svg {
				width: ${$[o]};
				height: ${$[o]};
			}
			font-size: ${a&&!r?"0":n.fontSize[o]};
			line-height: ${n.lineHeight[o]};
			border-radius: ${O[o]};
			border-width: ${y};
		`}
	}

	/* Desktop */
	/* Desktop */
	@media (min-width: ${o=>o.theme.breakpoints.desktop}) {
		${({size:o="medium",hasIcon:a,hasChildren:r})=>e.css`
			min-width: ${a&&!r?c.desktop[o]:l[o]};
			min-height: ${m[o]};
			padding-top: ${a&&!r?v.iconOnly.vertical:v[o].vertical};
			padding-bottom: ${a&&!r?v.iconOnly.vertical:v[o].vertical};
			padding-left: ${a&&!r?v.iconOnly.horizontal:v[o].horizontal};
			padding-right: ${a&&!r?v.iconOnly.horizontal:v[o].horizontal};
			gap: ${a&&r?p[o]:"0"};
			& > svg {
				width: ${g[o]};
				height: ${g[o]};
			}
			font-size: ${a&&!r?"0":i.fontSize[o]};
			line-height: ${i.lineHeight[o]};
			border-radius: ${B[o]};
			border-width: ${z};
		`}
	}

	${({theme:o,variant:a="primary"})=>{const r=o.colors.button[a];let i=e.css``,n=e.css``,t=e.css``,l=e.css``,d=e.css``;return d=e.css`
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
				`,t=e.css`
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
				`,t=e.css`
					border-color: ${r.activeBorder};
					background-color: ${r.activeBackground};
				`,l=e.css`
					border-color: ${r.focusBorder};
					/* Применяем тень как вторую рамку */
					/* Mobile */
					box-shadow: 0 0 0 ${S}
						${r.focusShadow};
					/* Tablet */
					@media (min-width: ${o.breakpoints.tablet}) {
						box-shadow: 0 0 0 ${y}
							${r.focusShadow};
					}
					/* Desktop */
					@media (min-width: ${o.breakpoints.desktop}) {
						box-shadow: 0 0 0 ${z}
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
				`,t=e.css`
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
				`,t=e.css`
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
				${t}
			}

			&:focus-visible:not(:disabled) {
				${l}
			}

			&:disabled {
				${d}
			}
		`}}
`;exports.Button=a=>{var{children:i,onClick:n,variant:t="primary",size:l="medium",disabled:d=!1,icon:s,iconPosition:c="left","aria-label":p,"aria-describedby":x,"aria-haspopup":h,"aria-expanded":m,"aria-controls":u}=a,b=function(o,e){var a={};for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&e.indexOf(r)<0&&(a[r]=o[r]);if(null!=o&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(o);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(o,r[i])&&(a[r[i]]=o[r[i]])}return a}(a,["children","onClick","variant","size","disabled","icon","iconPosition","aria-label","aria-describedby","aria-haspopup","aria-expanded","aria-controls"]);const g=e.useTheme(),$=!!s,w=r.Children.count(i)>0;return o.jsxs(j,Object.assign({theme:g,variant:t,size:l,disabled:d,onClick:n,hasIcon:$,hasChildren:w,"aria-label":p,"aria-describedby":x,"aria-haspopup":h,"aria-expanded":m,"aria-controls":u},b,{children:[$&&"left"===c&&s,w&&o.jsx("span",{children:i}),$&&"right"===c&&s]}))};
//# sourceMappingURL=index.cjs.js.map
