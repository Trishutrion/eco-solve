def run():
    """Runs the offline version of the video page of Eco-Solve. """
    import index, webbrowser
    print("Current page: Videos")
    running = True
    while running == True:
        decision = input(
"""
Which video would you like to watch?
                         
(1) Echoes of Humanity
                         
Veritasium videos:
 - (2) Climate change is boring

Kurzgesagt - In a Nutshell videos:
 - (3) Do we need nuclear energy to stop climate change?
                                                  
Enter choice: 
"""
)
        if decision == '1':
            webbrowser.open("film.mp4") 
            decision = input("Would you like to watch another video? (Y/N) ")
            if decision.lower() == 'y':
                continue
            elif decision.lower() == 'n':
                decision = input("Would you like to do other things? (Y/N) ")
                if decision.lower() == 'y':
                    index.run()
                elif decision.lower() == 'n':
                    running = False   
        elif decision == '2':
            webbrowser.open("https://www.youtube.com/watch?v=eNx9tvCrvv8&t=120s")
            decision = input("Would you like to watch another video? (Y/N) ")
            if decision.lower() == 'n':
                running = False
            elif decision.lower() == 'y':
                continue
        elif decision == '3':
            webbrowser.open("https://www.youtube.com/watch?v=EhAemz1v7dQ")
            decision = input("Would you like to watch another video? (Y/N) ")
            if decision.lower() == 'n':
                running = False
            elif decision.lower() == 'y':
                continue
        else:
            print("That's not an option! Please choose something to do.")   
if __name__ == '__main__':
    run()