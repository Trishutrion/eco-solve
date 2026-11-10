// This is the navigation bar that will be embedded at the top of each Eco-Solve webpage. 
function loadNavigationBar() {
    document.getElementById("navbar").innerHTML = `
    <a href="index.html"><button style="width: 8vw; font-size: (16 / 1065 * 100)vw">Home</button></a>
    <a href="video.html"><button style="width: 8vw; font-size: (16 / 1065 * 100)vw;">Videos</button></a>
    <a href="quiz.html"><button style="width: 8vw; font-size: (16 / 1065 * 100)vw;">Quizzes</button></a>
    <a href="game.html"><button style="width: 8vw; font-size: (16 / 1065 * 100)vw;">Games</button></a>
    <a href="tracker.html"><button style="width: 8vw; font-size: (16 / 1065 * 100)vw;">Personal Tracker</button></a> 
    `
};
loadNavigationBar();