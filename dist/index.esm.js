import{jsxs as o,jsx as e}from"react/jsx-runtime";import{css as a,useTheme as r}from"@emotion/react";import i from"@emotion/styled";import t from"react";"function"==typeof SuppressedError&&SuppressedError;const n={fontSize:{small:"1.25rem",medium:"1.5rem",large:"1.75rem"},lineHeight:{small:"16px",medium:"24px",large:"28px"}},l={fontSize:{small:"0.75rem",medium:"0.875rem",large:"1.125rem"},lineHeight:{small:"14px",medium:"20px",large:"26px"}},d={fontSize:{small:"0.625rem",medium:"0.75rem",large:"1rem"},lineHeight:{small:"12px",medium:"16px",large:"24px"}},c={large:"160px",medium:"120px",small:"100px"},p={large:"140px",medium:"100px",small:"95px"},s={large:"120px",medium:"85px",small:"90px"},x={desktop:{large:"48px",medium:"40px",small:"32px"},tablet:{large:"44px",medium:"36px",small:"28px"},mobile:{large:"40px",medium:"32px",small:"24px"}},h={large:"16px",medium:"8px",small:"4px"},m={large:"12px",medium:"6px",small:"2px"},u={large:"8px",medium:"4px",small:"1px"},b={large:"48px",medium:"40px",small:"32px"},g={large:"44px",medium:"36px",small:"28px"},$={large:"40px",medium:"32px",small:"24px"},w={large:"32px",medium:"24px",small:"16px"},v={large:"28px",medium:"20px",small:"14px"},f={large:"24px",medium:"16px",small:"12px"},k={large:{vertical:"16px",horizontal:"20px"},medium:{vertical:"14px",horizontal:"12px"},small:{vertical:"10px",horizontal:"8px"},iconOnly:{vertical:"8px",horizontal:"8px"}},z={large:{vertical:"14px",horizontal:"16px"},medium:{vertical:"12px",horizontal:"10px"},small:{vertical:"8px",horizontal:"6px"},iconOnly:{vertical:"8px",horizontal:"8px"}},y={large:{vertical:"12px",horizontal:"12px"},medium:{vertical:"10px",horizontal:"8px"},small:{vertical:"6px",horizontal:"4px"},iconOnly:{vertical:"8px",horizontal:"8px"}},S="3px",B="2px",O="2px",T={large:"12px",medium:"8px",small:"4px"},C={large:"10px",medium:"6px",small:"3px"},j={large:"8px",medium:"4px",small:"2px"},D=i.button`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: 0.3s ease;
	white-space: nowrap;
	border-style: solid;
	box-shadow: none;
	outline: none;

	${({size:o="medium",hasIcon:e,hasChildren:r})=>a`
		min-width: ${e&&!r?x.mobile[o]:s[o]};
		min-height: ${$[o]};
		padding-top: ${e&&!r?y.iconOnly.vertical:y[o].vertical};
		padding-bottom: ${e&&!r?y.iconOnly.vertical:y[o].vertical};
		padding-left: ${e&&!r?y.iconOnly.horizontal:y[o].horizontal};
		padding-right: ${e&&!r?y.iconOnly.horizontal:y[o].horizontal};
		gap: ${e&&r?u[o]:"0"};
		& > svg {
			width: ${f[o]};
			height: ${f[o]};
		}
		font-size: ${e&&!r?"0":d.fontSize[o]};
		line-height: ${d.lineHeight[o]};
		border-radius: ${j[o]};
		border-width: ${O};
	`}

	/* Tablet */
	@media (min-width: ${o=>o.theme.breakpoints.tablet}) {
		${({size:o="medium",hasIcon:e,hasChildren:r})=>a`
			min-width: ${e&&!r?x.tablet[o]:p[o]};
			min-height: ${g[o]};
			padding-top: ${e&&!r?z.iconOnly.vertical:z[o].vertical};
			padding-bottom: ${e&&!r?z.iconOnly.vertical:z[o].vertical};
			padding-left: ${e&&!r?z.iconOnly.horizontal:z[o].horizontal};
			padding-right: ${e&&!r?z.iconOnly.horizontal:z[o].horizontal};
			gap: ${e&&r?m[o]:"0"};
			& > svg {
				width: ${v[o]};
				height: ${v[o]};
			}
			font-size: ${e&&!r?"0":l.fontSize[o]};
			line-height: ${l.lineHeight[o]};
			border-radius: ${C[o]};
			border-width: ${B};
		`}
	}

	/* Desktop */
	/* Desktop */
	@media (min-width: ${o=>o.theme.breakpoints.desktop}) {
		${({size:o="medium",hasIcon:e,hasChildren:r})=>a`
			min-width: ${e&&!r?x.desktop[o]:c[o]};
			min-height: ${b[o]};
			padding-top: ${e&&!r?k.iconOnly.vertical:k[o].vertical};
			padding-bottom: ${e&&!r?k.iconOnly.vertical:k[o].vertical};
			padding-left: ${e&&!r?k.iconOnly.horizontal:k[o].horizontal};
			padding-right: ${e&&!r?k.iconOnly.horizontal:k[o].horizontal};
			gap: ${e&&r?h[o]:"0"};
			& > svg {
				width: ${w[o]};
				height: ${w[o]};
			}
			font-size: ${e&&!r?"0":n.fontSize[o]};
			line-height: ${n.lineHeight[o]};
			border-radius: ${T[o]};
			border-width: ${S};
		`}
	}

	${({theme:o,variant:e="primary"})=>{const r=o.colors.button[e];let i=a``,t=a``,n=a``,l=a``,d=a``;return d=a`
			background-color: ${r.disabledBackground};
			color: ${r.disabledText};
			border-color: transparent;
			box-shadow: none;
			cursor: not-allowed;
		`,"primary"===e?"defaultShadow"in r&&"hoverText"in r&&"activeText"in r&&"focusBackground"in r&&"focusText"in r&&"focusShadow"in r&&(i=a`
					background-color: ${r.background};
					color: ${r.text};
					border-color: transparent; // У primary нет видимой рамки по умолчанию
					box-shadow: 0px 1px 0px 2px ${r.defaultShadow}; // Тень по умолчанию
				`,t=a`
					background-color: ${r.hoverBackground};
					color: ${r.hoverText};
					box-shadow: none; // Убираем тень при ховере
				`,n=a`
					background-color: ${r.activeBackground};
					color: ${r.activeText};
					box-shadow: none; // Убираем тень при активации
				`,l=a`
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
				`):"default"===e?"hoverBorder"in r&&"activeBorder"in r&&"focusBorder"in r&&"focusShadow"in r&&(i=a`
					background-color: ${r.background};
					color: ${r.text};
					border-color: transparent;
					box-shadow: none;
				`,t=a`
					border-color: ${r.hoverBorder};
					background-color: ${r.hoverBackground};
				`,n=a`
					border-color: ${r.activeBorder};
					background-color: ${r.activeBackground};
				`,l=a`
					border-color: ${r.focusBorder};
					/* Применяем тень как вторую рамку */
					/* Mobile */
					box-shadow: 0 0 0 ${O}
						${r.focusShadow};
					/* Tablet */
					@media (min-width: ${o.breakpoints.tablet}) {
						box-shadow: 0 0 0 ${B}
							${r.focusShadow};
					}
					/* Desktop */
					@media (min-width: ${o.breakpoints.desktop}) {
						box-shadow: 0 0 0 ${S}
							${r.focusShadow};
					}
				`):"danger"===e?"defaultShadow"in r&&"hoverBackground"in r&&"hoverText"in r&&"activeBackground"in r&&"activeText"in r&&"focusBackground"in r&&"focusText"in r&&"focusShadow"in r&&(i=a`
					background-color: ${r.background};
					color: ${r.text};
					border-color: transparent;
					box-shadow: 0px 1px 0px 2px ${r.defaultShadow};
				`,t=a`
					background-color: ${r.hoverBackground};
					color: ${r.hoverText};
					box-shadow: none;
				`,n=a`
					background-color: ${r.activeBackground};
					color: ${r.activeText};
					box-shadow: none;
				`,l=a`
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
				`):"text"===e&&"hoverBackground"in r&&"hoverText"in r&&"hoverShadow"in r&&"activeBackground"in r&&"activeText"in r&&"focusBackground"in r&&"focusText"in r&&"focusShadow"in r&&(i=a`
					background-color: ${r.background}; // transparent
					color: ${r.text};
					border-color: transparent;
					box-shadow: none;
				`,t=a`
					background-color: ${r.hoverBackground};
					color: ${r.hoverText};
					box-shadow: 0px 1px 0px 2px ${r.hoverShadow}; // Тень снизу
				`,n=a`
					background-color: ${r.activeBackground};
					color: ${r.activeText};
					box-shadow: none;
				`,l=a`
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
				`),a`
			${i}

			&:hover:not(:disabled) {
				${t}
			}

			&:active:not(:disabled) {
				${n}
			}

			&:focus-visible:not(:disabled) {
				${l}
			}

			&:disabled {
				${d}
			}
		`}}
`,H=a=>{var{children:i,onClick:n,variant:l="primary",size:d="medium",disabled:c=!1,icon:p,iconPosition:s="left","aria-label":x,"aria-describedby":h,"aria-haspopup":m,"aria-expanded":u,"aria-controls":b}=a,g=function(o,e){var a={};for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&e.indexOf(r)<0&&(a[r]=o[r]);if(null!=o&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(o);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(o,r[i])&&(a[r[i]]=o[r[i]])}return a}(a,["children","onClick","variant","size","disabled","icon","iconPosition","aria-label","aria-describedby","aria-haspopup","aria-expanded","aria-controls"]);const $=r(),w=!!p,v=t.Children.count(i)>0;return o(D,Object.assign({theme:$,variant:l,size:d,disabled:c,onClick:n,hasIcon:w,hasChildren:v,"aria-label":x,"aria-describedby":h,"aria-haspopup":m,"aria-expanded":u,"aria-controls":b},g,{children:[w&&"left"===s&&p,v&&e("span",{children:i}),w&&"right"===s&&p]}))};export{H as Button};
//# sourceMappingURL=index.esm.js.map
