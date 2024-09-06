/** */
/**
 * Starts the survey contained in the element with the specified ID.
 * @param {string} divID The ID of the element that contains the survey. 
 */
function startSurvey(divID) {
    if (divID === "impacts") {
        document.getElementById("impacts").innerHTML = `
        <br>
        On a scale of 1 to 10, how important is recycling to you? (1 = Not important, 10 = Very important) 
        <input type="number" min="1" max="10" step="0.5"><br>
        <br>
        How often do you use public transportation? (1 = Rarely or never, 10 = Frequently)
        <input type="number" min="1" max="10" step="0.5"><br>
        <br>
        Rate your engagement in the following eco-friendly practices: (1 = Never, 10 = Always)<br>
        <br>
        Recycling:  
        <input type="number" min="1" max="10" step="0.5"><br>
        <br>
        Composting: 
        <input type="number" min="1" max="10" step="0.5"><br>
        <br>
        Using reusable bags:  
        <input type="number" min="1" max="10" step="0.5"><br>
        <br>
        Conserving water:  
        <input type="number" min="1" max="10" step="0.5"><br>
        <br>
        Using energy-efficient appliances: 
        <input type="number" min="1" max="10" step="0.5"><br>
        <br>
        How concerned are you about climate change? (1 = Not concerned, 10 = Very concerned)
        <input type="number" min="1" max="10" step="0.5"><br>
        <br>
        Which environmental issue do you think needs the most attention? (Select one or more): <br>
        <br>
        <input type="checkbox" name="environmental-issue">Deforestation<br>
        <br>
        <input type="checkbox" name="environmental-issue">Air pollution<br>
        <br>
        <input type="checkbox" name="environmental-issue">Ocean pollution<br>
        <br>
        <input type="checkbox" name="environmental-issue">Global warming<br>
        <br>
        <input type="checkbox" name="environmental-issue">Wildlife conservation<br>
        <br>
        Do you support the use of renewable energy sources? (1 = No, 10 = Yes)<br>
        <br>
        <input type="radio" name="renewables">Yes<br>
        <br>
        <input type="radio" name="renewables">No<br>
        <br>
        How often do you participate in community clean-up events? (1 = Never, 10 = Frequently)
        <input type="number" min="1" max="10" step="0.5"><br>
        <br>
        <br>
        <button onclick="console.log("Survey submitted!")">Submit!</button> 
        <button onclick="resetSurvey('impacts')">Exit the survey</button> 
        <br>
        <br>        
        `
    } else if (divID === "goal-setting") {
        document.getElementById("goal-setting").innerHTML = `
        <br>
        On a scale of 1 to 10, how important is recycling to you? (1 = Not important, 10 = Very important) 
        <input type="number" min="1" max="10" step="0.5"><br>
        <br>
        How often do you use public transportation? (1 = Rarely or never, 10 = Frequently)
        <input type="number" min="1" max="10" step="0.5"><br>
        <br>
        Rate your engagement in the following eco-friendly practices: (1 = Never, 10 = Always)<br>
        <br>
        Recycling:  
        <input type="number" min="1" max="10" step="0.5"><br>
        <br>
        Composting: 
        <input type="number" min="1" max="10" step="0.5"><br>
        <br>
        Using reusable bags:  
        <input type="number" min="1" max="10" step="0.5"><br>
        <br>
        Conserving water:  
        <input type="number" min="1" max="10" step="0.5"><br>
        <br>
        Using energy-efficient appliances: 
        <input type="number" min="1" max="10" step="0.5"><br>
        <br>
        How concerned are you about climate change? (1 = Not concerned, 10 = Very concerned)
        <input type="number" min="1" max="10" step="0.5"><br>
        <br>
        Which environmental issue do you think needs the most attention? (Select one or more): <br>
        <br>
        <input type="checkbox" name="environmental-issue">Deforestation<br>
        <br>
        <input type="checkbox" name="environmental-issue">Air pollution<br>
        <br>
        <input type="checkbox" name="environmental-issue">Ocean pollution<br>
        <br>
        <input type="checkbox" name="environmental-issue">Global warming<br>
        <br>
        <input type="checkbox" name="environmental-issue">Wildlife conservation<br>
        <br>
        Do you support the use of renewable energy sources? (1 = No, 10 = Yes)<br>
        <br>
        <input type="radio" name="renewables">Yes<br>
        <br>
        <input type="radio" name="renewables">No<br>
        <br>
        How often do you participate in community clean-up events? (1 = Never, 10 = Frequently)
        <input type="number" min="1" max="10" step="0.5"><br>
        <br>
        <br>
        <button onclick="console.log("Survey submitted!")">Submit!</button> 
        <button onclick="resetSurvey('goal-setting')">Exit the survey</button> 
        <br>
        <br>        
        `
    }
};
/**
 * Resets the survey which is contained in the element with the specified ID.
 * @param {string} divID The ID of the element that contains the survey. 
 */
function resetSurvey(divID) {
    if (divID === "impacts") {
        document.getElementById("impacts").innerHTML = `
        <br>
        Please read the information below carefully and only undertake the survey if it is in accord with yourself.<br>                    
        <h4>Survey Information</h4>
        In this survey, you will be responding to questions which assess your impact on the environment.<br>
        None of these questions will ask for any personal details, such as your name, address, date of birth, etc.<br>
        To maintain the integrity of such a system, please answer all the questions honestly and truthfully. <br>
        <h4>Data Collection Methods</h4> 
        All data collected from this survey is stored in a .json file which is not accessible to any third-party applications.<br>
        Hence, if required, users can modify, change, and/or delete their data from this .json file if they wish to.<br>
        We value privacy at Eco-Solve, so your data is yours and not visible to anyone (even us, for that matter).<br>
        <br>
        <button onclick="startSurvey('impacts')">Begin!</button> <br>
        <br>        
        `
    } else if (divID === "goal-setting") {
        document.getElementById("goal-setting").innerHTML = `
        <br>
        Please read the information below carefully and only undertake the survey if it is in accord with yourself.<br>                    
        <h4>Survey Information</h4>
        In this survey, you will be setting personal goals about how you wish to reduce your impact on the environment.<br>
        This process will not require any personal details, such as your name, address, date of birth, etc.<br>
        To maintain the integrity of such a system, please set your goals honestly and truthfully. <br>
        <h4>Data Collection Methods</h4> 
        All data collected from this survey is stored in a .json file which is not accessible to any third-party applications.<br>
        Hence, if required, users can modify, change, and/or delete their data from this .json file if they wish to.<br>
        We value privacy at Eco-Solve, so your data is yours and not visible to anyone (even us, for that matter).<br>
        <br>
        <button onclick="startSurvey('goal-setting')">Begin!</button> <br>
        <br>
        `
    }
};