import{jsxs as o,jsx as e}from"react/jsx-runtime";import{css as a,useTheme as r}from"@emotion/react";import i from"@emotion/styled";import n from"react";"function"==typeof SuppressedError&&SuppressedError;const d={heading1:"4rem",heading2:"3.5rem",heading3:"3rem",heading4:"2.5rem",heading5:"2rem",heading6:"1.5rem",bodyL:"1.375rem",bodyM:"1.25rem",bodyS:"1.125rem",paragraph:"1rem",label:"0.875rem"},l={heading1:"3.5rem",heading2:"3rem",heading3:"2.5rem",heading4:"2.25rem",heading5:"1.75rem",heading6:"1.375rem",bodyL:"1.25rem",bodyM:"1.125rem",bodyS:"1rem",paragraph:"0.9375rem",label:"0.875rem"},t={heading1:"3rem",heading2:"2.5rem",heading3:"2rem",heading4:"1.75rem",heading5:"1.5rem",heading6:"1.25rem",bodyL:"1.125rem",bodyM:"1rem",bodyS:"0.875rem",paragraph:"0.875rem",label:"0.875rem"},p={heading1:"1.25",heading2:"1.29",heading3:"1.33",heading4:"1.4",heading5:"1.38",heading6:"1.5",bodyL:"1.45",bodyM:"1.5",bodyS:"1.56",paragraph:"1.5",label:"1.43"},c={heading1:"1.29",heading2:"1.33",heading3:"1.4",heading4:"1.33",heading5:"1.43",heading6:"1.45",bodyL:"1.5",bodyM:"1.56",bodyS:"1.5",paragraph:"1.47",label:"1.43"},h={heading1:"1.33",heading2:"1.4",heading3:"1.38",heading4:"1.43",heading5:"1.5",heading6:"1.5",bodyL:"1.56",bodyM:"1.5",bodyS:"1.43",paragraph:"1.43",label:"1.43"},s={fontSize:{small:d.label,medium:d.paragraph,large:d.bodyM},lineHeight:{small:p.label,medium:p.paragraph,large:p.bodyM}},m={fontSize:{small:l.label,medium:l.paragraph,large:l.bodyM},lineHeight:{small:c.label,medium:c.paragraph,large:c.bodyM}},b={fontSize:{small:t.label,medium:t.paragraph,large:t.bodyM},lineHeight:{small:h.label,medium:h.paragraph,large:h.bodyM}},x={large:"160px",medium:"120px",small:"100px"},g={large:"140px",medium:"100px",small:"95px"},u={large:"120px",medium:"85px",small:"90px"},$={desktop:{large:"48px",medium:"40px",small:"32px"},tablet:{large:"44px",medium:"36px",small:"28px"},mobile:{large:"40px",medium:"32px",small:"24px"}},w={large:"16px",medium:"8px",small:"4px"},v={large:"12px",medium:"6px",small:"2px"},f={large:"8px",medium:"4px",small:"1px"},k={large:"48px",medium:"40px",small:"32px"},y={large:"44px",medium:"36px",small:"28px"},z={large:"40px",medium:"32px",small:"24px"},S={large:"32px",medium:"24px",small:"16px"},B={large:"28px",medium:"20px",small:"14px"},O={large:"24px",medium:"16px",small:"12px"},T={large:{vertical:"16px",horizontal:"20px"},medium:{vertical:"14px",horizontal:"12px"},small:{vertical:"10px",horizontal:"8px"},iconOnly:{vertical:"8px",horizontal:"8px"}},M={large:{vertical:"14px",horizontal:"16px"},medium:{vertical:"12px",horizontal:"10px"},small:{vertical:"8px",horizontal:"6px"},iconOnly:{vertical:"8px",horizontal:"8px"}},C={large:{vertical:"12px",horizontal:"12px"},medium:{vertical:"10px",horizontal:"8px"},small:{vertical:"6px",horizontal:"4px"},iconOnly:{vertical:"8px",horizontal:"8px"}},j="3px",D="2px",H="2px",L={large:"12px",medium:"8px",small:"4px"},I={large:"10px",medium:"6px",small:"3px"},P={large:"8px",medium:"4px",small:"2px"},E=i.button`
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
		min-width: ${e&&!r?$.mobile[o]:u[o]};
		min-height: ${z[o]};
		padding-top: ${e&&!r?C.iconOnly.vertical:C[o].vertical};
		padding-bottom: ${e&&!r?C.iconOnly.vertical:C[o].vertical};
		padding-left: ${e&&!r?C.iconOnly.horizontal:C[o].horizontal};
		padding-right: ${e&&!r?C.iconOnly.horizontal:C[o].horizontal};
		gap: ${e&&r?f[o]:"0"};
		& > svg {
			width: ${O[o]};
			height: ${O[o]};
		}
		font-size: ${e&&!r?"0":b.fontSize[o]};
		line-height: ${b.lineHeight[o]};
		border-radius: ${P[o]};
		border-width: ${H};
	`}

	/* Tablet */
	@media (min-width: ${o=>o.theme.breakpoints.tablet}) {
		${({size:o="medium",hasIcon:e,hasChildren:r})=>a`
			min-width: ${e&&!r?$.tablet[o]:g[o]};
			min-height: ${y[o]};
			padding-top: ${e&&!r?M.iconOnly.vertical:M[o].vertical};
			padding-bottom: ${e&&!r?M.iconOnly.vertical:M[o].vertical};
			padding-left: ${e&&!r?M.iconOnly.horizontal:M[o].horizontal};
			padding-right: ${e&&!r?M.iconOnly.horizontal:M[o].horizontal};
			gap: ${e&&r?v[o]:"0"};
			& > svg {
				width: ${B[o]};
				height: ${B[o]};
			}
			font-size: ${e&&!r?"0":m.fontSize[o]};
			line-height: ${m.lineHeight[o]};
			border-radius: ${I[o]};
			border-width: ${D};
		`}
	}

	/* Desktop */
	/* Desktop */
	@media (min-width: ${o=>o.theme.breakpoints.desktop}) {
		${({size:o="medium",hasIcon:e,hasChildren:r})=>a`
			min-width: ${e&&!r?$.desktop[o]:x[o]};
			min-height: ${k[o]};
			padding-top: ${e&&!r?T.iconOnly.vertical:T[o].vertical};
			padding-bottom: ${e&&!r?T.iconOnly.vertical:T[o].vertical};
			padding-left: ${e&&!r?T.iconOnly.horizontal:T[o].horizontal};
			padding-right: ${e&&!r?T.iconOnly.horizontal:T[o].horizontal};
			gap: ${e&&r?w[o]:"0"};
			& > svg {
				width: ${S[o]};
				height: ${S[o]};
			}
			font-size: ${e&&!r?"0":s.fontSize[o]};
			line-height: ${s.lineHeight[o]};
			border-radius: ${L[o]};
			border-width: ${j};
		`}
	}

	${({theme:o,variant:e="primary"})=>{const r=o.colors.button[e];let i=a``,n=a``,d=a``,l=a``,t=a``;return t=a`
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
				`,n=a`
					background-color: ${r.hoverBackground};
					color: ${r.hoverText};
					box-shadow: none; // Убираем тень при ховере
				`,d=a`
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
				`,n=a`
					border-color: ${r.hoverBorder};
					background-color: ${r.hoverBackground};
				`,d=a`
					border-color: ${r.activeBorder};
					background-color: ${r.activeBackground};
				`,l=a`
					border-color: ${r.focusBorder};
					/* Применяем тень как вторую рамку */
					/* Mobile */
					box-shadow: 0 0 0 ${H}
						${r.focusShadow};
					/* Tablet */
					@media (min-width: ${o.breakpoints.tablet}) {
						box-shadow: 0 0 0 ${D}
							${r.focusShadow};
					}
					/* Desktop */
					@media (min-width: ${o.breakpoints.desktop}) {
						box-shadow: 0 0 0 ${j}
							${r.focusShadow};
					}
				`):"danger"===e?"defaultShadow"in r&&"hoverBackground"in r&&"hoverText"in r&&"activeBackground"in r&&"activeText"in r&&"focusBackground"in r&&"focusText"in r&&"focusShadow"in r&&(i=a`
					background-color: ${r.background};
					color: ${r.text};
					border-color: transparent;
					box-shadow: 0px 1px 0px 2px ${r.defaultShadow};
				`,n=a`
					background-color: ${r.hoverBackground};
					color: ${r.hoverText};
					box-shadow: none;
				`,d=a`
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
				`,n=a`
					background-color: ${r.hoverBackground};
					color: ${r.hoverText};
					box-shadow: 0px 1px 0px 2px ${r.hoverShadow}; // Тень снизу
				`,d=a`
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
`,q=a=>{var{children:i,onClick:d,variant:l="primary",size:t="medium",disabled:p=!1,icon:c,iconPosition:h="left","aria-label":s,"aria-describedby":m,"aria-haspopup":b,"aria-expanded":x,"aria-controls":g}=a,u=function(o,e){var a={};for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&e.indexOf(r)<0&&(a[r]=o[r]);if(null!=o&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(o);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(o,r[i])&&(a[r[i]]=o[r[i]])}return a}(a,["children","onClick","variant","size","disabled","icon","iconPosition","aria-label","aria-describedby","aria-haspopup","aria-expanded","aria-controls"]);const $=r(),w=!!c,v=n.Children.count(i)>0;return o(E,Object.assign({theme:$,variant:l,size:t,disabled:p,onClick:d,hasIcon:w,hasChildren:v,"aria-label":s,"aria-describedby":m,"aria-haspopup":b,"aria-expanded":x,"aria-controls":g},u,{children:[w&&"left"===h&&c,v&&e("span",{children:i}),w&&"right"===h&&c]}))};export{q as Button};
//# sourceMappingURL=index.esm.js.map
