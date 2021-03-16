import React from 'react';
import PropTypes from 'prop-types';
import LinearGradient from './LinearGradient';
import RadialGradient from './RadialGradient';

const ChildrenView = ({ 
    buttonStyle,
    gradientType,
    gradientColors,
    gradientColoroffset,
    gradientColorAngle,
    gradientRadialRadius,
    gradientButtonHeight,
    radialRadiusx,
    radialRadiusy,
    radialRadiusRX,
    radialRadiusRY, 
    children 
}) => {
    const isLinearGradient = gradientType?.trim()?.toLowerCase() === 'linear'; 
    const isRadialGradient = gradientType?.trim()?.toLowerCase() === 'radial';

    if(isLinearGradient) {
        return (
            <LinearGradient
                angle={gradientColorAngle || 90}
                children={children}
                buttonStyle={buttonStyle}
                gradientColoroffset={gradientColoroffset}
                gradientColors={gradientColors}
                gradientRadialRadius={gradientRadialRadius}
                gradientButtonHeight={gradientButtonHeight}
            />
        );
    } else if(isRadialGradient) { 
        return (
            <RadialGradient
                radialRadiusx={radialRadiusx}
                radialRadiusy={radialRadiusy}
                radialRadiusRX={radialRadiusRX}
                radialRadiusRY={radialRadiusRY}
                children={children}
                buttonStyle={buttonStyle}
                gradientColoroffset={gradientColoroffset}
                gradientColors={gradientColors}
                gradientRadialRadius={gradientRadialRadius}
                gradientButtonHeight={gradientButtonHeight}
            />
        )
    } else {
        return children;
    }
}

ChildrenView.propTypes = {
    buttonStyle: PropTypes.object,
    gradientType: PropTypes.string,
    gradientColors: PropTypes.array,
    gradientColoroffset: PropTypes.array,
    gradientColorAngle: PropTypes.number,
    gradientRadialRadius: PropTypes.number,
    gradientButtonHeight: PropTypes.number,
    radialRadiusx: PropTypes.oneOfType(PropTypes.string, PropTypes.number),
    radialRadiusy: PropTypes.oneOfType(PropTypes.string, PropTypes.number),
    radialRadiusRX: PropTypes.oneOfType(PropTypes.string, PropTypes.number),
    radialRadiusRY: PropTypes.oneOfType(PropTypes.string, PropTypes.number),
    children: PropTypes.any.isRequired
}

export default ChildrenView;