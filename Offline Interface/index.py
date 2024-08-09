"""Eco-Solve: Homepage (Offline)
by Arnav Bagal
Last modified: 02/08/2024

This program is the offline version of the homepage of Eco-Solve.

Details:
 - This file contains the run() function, which is accessed as index.run() in other files.
 - The run() function allows the user to choose to visit one of the following pages:
    - video 
    - quiz
    - game 
    - tracker
 - The user can also choose to exit the program.
"""
def run():
    """Runs the offline version of the video page of Eco-Solve. """
    import video, quiz, game, tracker # Other files
    import os # Python modules
    # Clearing the screen
    if os.name == 'nt': # Windows
        os.system('cls')
    elif os.name == 'posix': # Mac and Linux
        os.system('clear')
    else:
        print("The screen could not be cleared. ")
    print("Welcome to the offline version of Eco-Solve! ")
    while True:
        # Clearing the screen
        os.system('cls' if os.name == 'nt' else 'clear')
        if os.name == 'nt': # Windows
            os.system('cls')
        elif os.name == 'posix': # Mac and Linux
            os.system('clear')
        else:
            print("The screen could not be cleared. ")
        print("""Please select an option:
1. Video
2. Quiz
3. Game
4. Tracker
5. Exit""")
        choice = input("Enter your choice: ")
        if choice == "1" or "video" in choice.lower():
            video.run()
        elif choice == "2"or "quiz" in choice.lower():
            quiz.run()
        elif choice == "3"or "game" in choice.lower():
            game.run()
        elif choice == "4" or "tracker" in choice.lower():
            tracker.run()
        elif choice == "5" or "exit" in choice.lower() or "quit" in choice.lower():
            break
        else:
            print("Invalid choice. Please try again. ")
if __name__ == '__main__':
    run()