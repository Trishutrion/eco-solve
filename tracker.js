/**Eco-Solve: Personal Tracker (Backend)
 * by Arnav Bagal
 */
/** Displays the survey for environmental impacts on the HTML page. */
function impactsSurvey() {
    console.log("Survey started!")
    const display = document.getElementById('impacts')
    display.innerHTML = `
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
    <button onclick="console.log(Survey submitted!)">Submit!</button> <br>
    <br>
    `
};
/** 
 * Displays the survey for environmental goal-setting on the HTML page. 
 * 
 * Details:
*/
function goalSettingSurvey() {
    console.log("Survey started!")
    const display = document.getElementById('goal-setting')
    display.innerHTML = `
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
    <button onclick="console.log(Survey submitted!)">Submit!</button> <br>
    <br>
    `
};

