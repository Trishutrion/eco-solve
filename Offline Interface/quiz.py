def run():
    """Runs the offline version of the homepage of Eco-Solve. """
    running = True
    while running:
        decision = input("""Which quiz would you like to take?
                         
(1) Unit 1: Natural Processes
(2) Unit 2: Impacts on Natural Processes
(3) Unit 3: Biodiversity
(4) Unit 4: Climate Change
                        
Enter choice: """)
        if decision.lower() == '1' or 'natural' in decision.lower():
            start_quiz(1)
        elif decision.lower() == "2" or "impact" in decision.lower():
            start_quiz(2)
        elif decision.lower() == "3" or "bio" in decision.lower(): 
            start_quiz(3)
        elif decision.lower() == "4" or "climate" in decision.lower(): 
            start_quiz(4)
        else:
            print("That's not an option! Please choose something to do.")
        def start_quiz(quiz_number : int):
            pass  
if __name__ == '__main__':
    run()