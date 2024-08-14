"""

"""
def run():
    """
    Runs the game Eco-Quest.
    
    Details: 
        - This is not the real code for the game. 
    """
    import pygame
    import random
    import math

    # Initialize the pygame module
    pygame.init()

    # Define the width and height of the game window
    WIDTH, HEIGHT = 1200, 1200

    # Create the game window
    screen = pygame.display.set_mode((WIDTH, HEIGHT))
    pygame.display.set_caption("Quite damp")
    pygame.mouse.set_visible(False)

    # Define the rate at which raindrops spawn
    spawnrate = 5

    # Define the Raindrop class
    class Raindrop():
        def __init__(self):
            # Initialize the properties of the raindrop
            self.size = 10
            self.x = WIDTH / 2
            while self.x == WIDTH / 2:
                self.x = random.randint(0, WIDTH)
            self.y = 0
            self.vx = 0
            self.vy = 0
            self.colour = (0, 0, 255)
            self.maxv = 20
            self.image = pygame.Surface((self.size, self.size))
            self.image.fill(self.colour)
            self.rect = self.image.get_rect(topleft=(self.x, self.y))

        def move(self):
            # Update the position of the raindrop
            if self.vy < self.maxv:
                self.vy += 0.1
            self.x += self.vx
            self.y += self.vy

        def draw(self, screen):
            # Draw the raindrop on the screen
            screen.blit(self.image, (self.x, self.y))

    # Define the Umbrella class
    class Umbrella(pygame.sprite.Sprite):
        def __init__(self, x, y, width, height):
            # Initialize the properties of the umbrella
            self.x = x
            self.y = y
            self.oldx = x
            self.oldy = y
            self.xv = 0
            self.yv = 0
            self.width = width
            self.height = height
            self.colour = (255, 0, 0)

        def draw(self, screen):
            # Draw the umbrella on the screen
            pygame.draw.rect(screen, self.colour, pygame.Rect(self.x, self.y, self.width, self.height))

    # Create a list to store the raindrops
    rainlist = []

    # Define the size of the umbrella
    umbrella_width = 400
    umbrella_height = 40

    # Create the umbrella
    umbrella = Umbrella(WIDTH // 2 - umbrella_width/2, HEIGHT-50, umbrella_width, umbrella_height)

    # Start the game loop
    running = True
    while running:
        # Update the position of the umbrella to follow the mouse
        umbrella.x, umbrella.y = pygame.mouse.get_pos()
        umbrella.x -= umbrella.width / 2
        umbrella.y -= umbrella.height / 2

        # Limit the frame rate
        pygame.time.Clock().tick(240)

        # Spawn new raindrops
        for _ in range(spawnrate):
            rainlist.append(Raindrop())

        # Remove raindrops that have fallen off the screen
        for i in reversed(range(len(rainlist))):
            if rainlist[i].y > HEIGHT:
                rainlist.pop(i)

        # Calculate the velocity of the umbrella
        umbrella.xv = (umbrella.x - umbrella.oldx)
        umbrella.yv = (umbrella.y - umbrella.oldy)
        umbrella.oldx, umbrella.oldy = umbrella.x, umbrella.y

        # Check for collisions between the raindrops and the umbrella
        for drop in rainlist:
            # Code for when the raindrop hits the top or bottom of the umbrella
            if umbrella.x < drop.x + drop.size < umbrella.x + umbrella.width / 2 and umbrella.y + umbrella.height - drop.size > drop.y + drop.size > umbrella.y + drop.size:
                if drop.vx > umbrella.xv:
                    drop.vx = umbrella.xv

            elif umbrella.x + umbrella.width / 2 < drop.x < umbrella.x + umbrella.width and umbrella.y + umbrella.height - drop.size > drop.y + drop.size > umbrella.y + drop.size:
                if drop.vx < umbrella.xv:
                    drop.vx = umbrella.xv

            # Code for when the raindrop hits the sides of the umbrella
            elif umbrella.x < drop.x + drop.size < umbrella.x + umbrella.width + drop.size and umbrella.y + umbrella.height / 2 > drop.y + drop.size > umbrella.y:
                if drop.vy > -(drop.vy / 4) - 1 + random.randint(-800, -100) / 1000 + umbrella.yv * 1.05 and drop.vy > 0:
                    drop.vy = -(drop.vy / 4) - 1 + random.randint(-800, -100) / 1000 + umbrella.yv * 1.05

                if drop.x > umbrella.x + umbrella.width / 2:
                    drop.vx = 1
                else:
                    drop.vx = -1

            elif umbrella.x < drop.x + drop.size < umbrella.x + umbrella.width + drop.size and umbrella.y + umbrella.height > drop.y + drop.size > umbrella.y + umbrella.height / 2:
                drop.vy = (drop.vy / 4) - 1 + random.randint(-800, -100) / 1000 + umbrella.yv

        # Clear the screen
        screen.fill((255, 255, 255))

        # Update and draw the raindrops
        for drop in rainlist:
            drop.move()
            drop.draw(screen)

            if drop.y > HEIGHT:
                rainlist.remove(drop)

        # Draw the umbrella
        umbrella.draw(screen)

        # Handle events
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False

        # Update the display
        pygame.display.flip()

    # Quit pygame
    pygame.quit()