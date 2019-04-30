import React from 'react';

const bulmaClasses = {
    isActive: 'is-active',
    isBlack: 'is-black',
    isCentered: 'is-centered',
    isDanger: 'is-danger',
    isDark: 'is-dark',
    isFocused: 'is-focused',
    isGrouped: 'is-grouped',
    isHovered: 'is-hovered',
    isInfo: 'is-info',
    isInverted: 'is-inverted',
    isLarge: 'is-large',
    isLight: 'is-light',
    isLink: 'is-link',
    isLoading: 'is-loading',
    isMedium: 'is-medium',
    isOutlined: 'is-outlined',
    isPrimary: 'is-primary',
    isRight: 'is-right',
    isRounded: 'is-rounded',
    isSelected: 'is-selected',
    isSmall: 'is-small',
    isStatic: 'is-static',
    isSuccess: 'is-success',
    isText: 'is-text',
    isWarning: 'is-warning',
    isWhite: 'is-white',
  }


  const CoolButton = (props) => {
        const { className, children } = props;
                
        // <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
        // <button class="button is-rounded my-class is-danger is-small">Button 1</button>

        // Object.keys(props)
        // ['className', 'children', 'isSmall', 'isDanger', 'isRounded']

        let classes = `button ${className} ` + Object.keys(props).filter(el => el !== 'className' && el !== 'children').map(el => bulmaClasses[el]).join(' ')

        return (
            <button className={classes}>{children}</button>
        )
}


// const CoolButton = (props) => {
//     const { children, className, isSmall, isDanger, isSuccess } = props;
//     // props:       className="is-rounded my-class"    isDanger isSmall

//     // expected class: "button is-rounded my-class is-danger is-small"
//     let classes = `button ${className}`

//     if (isSmall) classes = `${classes} is-small`
//     if (isDanger) classes += ' is-danger'
//     if (isSuccess) classes += ' is-success';

//     return (
//         <button className={classes}>{children}</button>
//     )
// }

export default CoolButton;