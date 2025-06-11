interface BaseButtonVariant {
    background: string
    text: string
    hoverBackground: string
    activeBackground: string
    disabledBackground: string
    disabledText: string
}

interface PrimaryButtonVariant extends BaseButtonVariant {
    defaultShadow: string
    hoverText: string
    activeText: string
    focusBackground: string
    focusText: string
    focusShadow: string
}

interface DefaultButtonVariant extends BaseButtonVariant {
    hoverBorder: string
    activeBorder: string
    focusBorder: string
    focusShadow: string
}

interface TextButtonVariant extends BaseButtonVariant {
    hoverShadow: string
    focusBackground: string
    focusShadow: string
}

export interface ButtonVariants {
    primary: PrimaryButtonVariant
    default: DefaultButtonVariant
    danger: PrimaryButtonVariant
    text: TextButtonVariant
} 