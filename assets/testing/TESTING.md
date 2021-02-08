# Testing

The game has two pages of which is composed; index.html and the game itself.

## index page

### Navigation

**TEST**|**action**|**expected result**|**Fail**|**Pass**
:-----:|:-----:|:-----:|:-----:|:-----:
Testing if the title leads to the main page|click|_Memory game_ leads to _index.html_ page| |x
Testing the light switch button|click|Changes the background of the body <br> [Light](light_switch.JPG) <br> [Dark](dark_switch.JPG)| |x


### Buttons

**TEST**|**action**|**expected result**|**Fail**|**Pass**
:-----:|:-----:|:-----:|:-----:|:-----:
Testing if the _Play button_ opens the modal frame with 3 additional buttons|click| The modal frame pops out | |x
Testing if the EASY button opens the easy.html|click| [Level _easy_ appears](easy_game.JPG)| |x
Testing if the MEDIUM button opens the medium.html|click| [Level medium appears](medium_game.JPG)| |x
Testing if the HARD button opens the hard.html|click| [Level hard appears](hard_game.JPG)| |x
Testing if _How to play button_ opens the modal with intructions how to play the game|click|How to play button works properly | |x




## Memory game (_easy.html_, _medium.html_, _hard.html_)

### Navigation

**test**|**action**|**expected result**|**Fail**|**Pass**
:-----:|:-----:|:-----:|:-----:|:-----:
Testing if the _Back to menu_ text leads to the index page|click|_Back to menu_ leads to _index.html_ page| |x


### Memory game table
**TEST**|**action**|**expected result**|**Fail**|**Pass**
:-----:|:-----:|:-----:|:-----:|:-----:
Manual testing the cards flip|click|[The cards flip](does_card_flip.JPG)| |x
Manual testing if the cards with the same data framework match|click|[The cards match](do_cards_match.JPG)| |x
Manual testing if the number of flips increments by 1 every time we open two cards|| [The number changes](flip_changes.JPG)| |x
Manual testing if the number of time remaining changes and decrements by 1|| [The times remaining changes](time_changes.JPG)| |x
Testing if the overlay _Click to start_ appears at the beginning of the game|| [_CLICK TO START_ appears](overlay_click_to_start.JPG)| |x
Testing if the overlay _YOU WON!_ appears when we finish the game in time|| [_YOU WON!_ appears](overlay_you_won.JPG)| |x
Testing if the overlay _Game over_ appears when we don't finish the game in time|| [_GAME OVER_ appears](overlay_game_over.JPG)| |x
Testing the background music|| The background music works when the game starts| |x
Testing the background music for for _YOU WON_ and _GAME OVER_ overlay|| The music starts when the overlay appears| |x
Testing if the cards are shuffled every time I start with the game|click|The cards are shuffled for all the levels  <br> [level _easy_](shuffled_1.JPG) <br> [level _medium_](shuffled_2.JPG) <br> [level _hard_](shuffled_3.JPG)| |x