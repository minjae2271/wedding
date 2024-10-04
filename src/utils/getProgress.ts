export function getProgress(step: string) {
    const stepList = ["basicInfo", "timeInfo", "locationInfo", "pictureInfo", "extraInfo"]
    
    const stepIndex = stepList.indexOf(step);

    const totalSteps = stepList.length -1;
    const inPercent = (stepIndex / totalSteps) * 100;
    // const inFraction = `${stepIndex}/${totalSteps}`;

    return { inPercent };
}