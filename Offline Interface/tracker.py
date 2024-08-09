import index, video, quiz, game, tracker

def run():
    """Runs the offline version of the homepage of Eco-Solve. """
    running = True
    while running:
        decision = input("""What would you like to do?
(H) Home
(V) Videos
(Q) Quizzes
(G) Mini-Game
(T) Progress Tracker
(L) Quit/Leave
                                                  
Enter choice: """)
        if decision.lower == 'h' or 'home' in decision.lower():
            return index.run()
        elif decision.lower() == "v" or "video" in decision.lower():
            return video.run()
        elif decision.lower() == "q" or "quiz" in decision.lower(): 
            return quiz.run()
        elif decision.lower() == "g" or "game" in decision.lower(): 
            return game.run()
        elif decision.lower() == "t" or "track" in decision.lower() or "goal" in decision.lower(): 
            return tracker.run()
        elif decision.lower() == "l" or "quit" in decision.lower() or "leave" in decision.lower(): 
            return quit() 
        else:
            print("That's not an option! Please choose something to do.")       

if __name__ == '__main__':
    run()