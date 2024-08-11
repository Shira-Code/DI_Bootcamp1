# Instructions
# The game is played on a grid that’s 3 squares by 3 squares.
# Players take turns putting their marks (O or X) in empty squares.
# The first player to get 3 of their marks in a row (up, down, across, or diagonally) is the winner.
# When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie.
# Hint
# To do this project, you basically need to create four functions:

# display_board() – To display the Tic Tac Toe board (GUI).
# player_input(player) – To get the position from the player.
# check_win() – To check whether there is a winner or not.
# play() – The main function, which calls all the functions created above.
# Note: The 4 functions above are just an example. You can implement many more helper functions or choose a completely different appoach if you want.


# Tips : Consider the following:
# What functionality will need to accur every turn to make this program work?
# After contemplating the question above, think about splitting your code into smaller pieces (functions).
# Remember to follow the single responsibility principle! each function should do one thing and do it well!
def display_board(board):
    print(board[7] + '|' + board[8] + '|' + board[9])
    print('-+-+-')
    print(board[4] + '|' + board[5] + '|' + board[6])
    print('-+-+-')
    print(board[1] + '|' + board[2] + '|' + board[3])

def player_input():
    marker = ''

    while not (marker == 'X' or marker == 'O'):
        marker = input('Player 1: Do you want to be X or O? ').upper()

    if marker == 'X':
        return ('X', 'O')
    else:
        return ('O', 'X')
    
def place_marker(board, marker, position):
    board[position] = marker

def win_check(board,mark):
    return ((board[7] == mark and board[8] == mark and board[9] == mark) or # across the top
    (board[4] == mark and board[5] == mark and board[6] == mark) or # across the middle

    (board[1] == mark and board[2] == mark and board[3] == mark) or # across the bottom

    (board[7] == mark and board[4] == mark and board[1] == mark) or # down the middle

    (board[8] == mark and board[5] == mark and board[2] == mark) or # down the middle
    
    (board[9] == mark and board[6] == mark and board[3] == mark) or # down the right side

    (board[7] == mark and board[5] == mark and board[3] == mark) or # diagonal
    (board[9] == mark and board[5] == mark and board[1] == mark))

def choose_first():
    if random.randint(0, 1) == 0:
        return 'Player 2'
    else:
        return 'Player 1'
    
def space_check(board, position):
    return board[position] == ' '

def full_board_check(board):
    for i in range(1,10):
        if space_check(board, i):
            return False
    return True

def player_choice(board):
    position = 0
    
    while position not in [1,2,3,4,5,6,7,8,9] or not space_check(board, position):
        position = int(input('Choose your next position: (1-9) '))
        
    return position 


import random
def replay():
    return input('Do you want to play again? Enter Yes or No: ').lower().startswith('y')

def play():
    print('Welcome to Tic Tac Toe!')
    while True:
        # Reset the board
        theBoard = [' '] * 10
        player1_marker, player2_marker = player_input()
        turn = choose_first()
        print(turn + ' will go first.')
    
        play_game = input('Are you ready to play? Enter Yes or No.')
    
        if play_game.lower()[0] == 'y':
            game_on = True
        else:
            game_on = False
    
        while game_on:
            if turn == 'Player 1':
                # Player1's turn.
    
                display_board(theBoard)
                position = player_choice(theBoard)
                place_marker(theBoard, player1_marker, position)
    
                if win_check(theBoard, player1_marker):
                    display_board(theBoard)
                    print('Congratulations! You have won the game!')
                    game_on = False
                else:
                    if full_board_check(theBoard):
                        display_board(theBoard)
                        print('The game is a draw!')
                        break
                    else:
                        turn = 'Player 2'
    
            else:
                # Player2's turn.
    
                display_board(theBoard)
                position = player_choice(theBoard)
                place_marker(theBoard, player2_marker, position)
    
                if win_check(theBoard, player2_marker):
                    display_board(theBoard)
                    print('Player 2 has won!')
                    game_on = False
                else:
                    if full_board_check(theBoard):
                        display_board(theBoard)
                        print('The game is a draw!')
                        break
                    else:
                        turn = 'Player 1'
    
        if not replay():
            break

    print('Thank you for playing!')



play()





