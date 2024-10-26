import React, { useEffect, useState } from "react";
import WizardStep from "./WizardStep.jsx";
import WizardContent from "./WizardContent.jsx";

const validateChildren = (children, steps) => {
    let isValid = true;

    React.Children.forEach(children, (child, index) => {
        if (child.type !== WizardContent) {
            isValid = false;
        } else {
            const step = { label: child.props.title, index: index };
            steps.push(step);
        }
    });

    return isValid;
};

export default function Wizard ({ children, onGuardar, showGuardar }) {
    const [ activeStep, setActiveStep ] = useState({ label: children[0].props.title, index: 0 });
    const steps = [];

    if (!validateChildren( children, steps )) {
        return <div>Error: Children must be of type WizardContent</div>;
    }

    const getStep = ( index ) => {
        return steps.find((x) => x.index === index);
    }

    return <div className="intro-y box py-10 sm:py-20 mt-5">
        <div className="wizard flex flex-col lg:flex-row justify-center px-5 sm:px-20">
            {steps.map((step, index) =>
                <WizardStep
                    index={ index }
                    label={ step.label }
                    active={ step.index === activeStep.index }
                    key={ index }
                    onClick={ () => setActiveStep( step ) }>
                </WizardStep>
            )}
            <div className="wizard__line hidden lg:block w-4/5 bg-gray-200 dark:bg-dark-1 absolute mt-5"></div>
        </div>

        <div className="px-5 sm:px-20 mt-10 pt-10 border-t border-gray-200 dark:border-dark-5">
            <div className="font-medium text-base"> {activeStep?.label} </div>

            <div className="grid grid-cols-12 gap-2 gap-y-5 mt-5">
                {React.Children.toArray(children).map((child, index) => {
                    if(index === activeStep.index)
                        return React.cloneElement(child, {key: index})
                })}

                <div className="intro-y col-span-12 flex items-center justify-center sm:justify-end mt-5">
                    { activeStep.index > 0 && <button onClick={() => setActiveStep( getStep( activeStep.index - 1 ) ) } className="btn btn-secondary w-24">Anterior</button> }
                    { activeStep.index < steps.length - 1  && <button onClick={() => setActiveStep( getStep( activeStep.index + 1 ) ) } className="btn btn-warning w-24 ml-2">Siguiente</button> }
                    { (showGuardar === true || activeStep.index === steps.length - 1) && <button onClick={ onGuardar } className="btn btn-primary w-24 ml-2">Guardar</button> }
                </div>
            </div>
        </div>
    </div>;
}
