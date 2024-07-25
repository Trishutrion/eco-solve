// This is the navigation bar that will be embedded at the top of each Eco-Solve webpage. 
function loadNavigationBar() {
    document.getElementById("navbar").innerHTML = `
    <a href="index.html"><button style="width: 120px;">Home</button></a>
    <a href="video.html"><button style="width: 120px;">Videos</button></a>
    <a href="quiz.html"><button style="width: 120px;">Quizzes</button></a>
    <a href="game.html"><button style="width: 120px;">Games</button></a>
    <a href="tracker.html"><button style="width: 120px;">Personal Tracker</button></a>`
    
};
loadNavigationBar();