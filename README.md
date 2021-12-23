# Chingu_Tier2_Virtual_Pet

![This is an image](https://github.com/BromeRST/Chingu-Tier2-Virtual-Pet/blob/main/Images/Virtual-Pet__screenshot.jpg)

## Overview

This app is a solo-project for [chingu](https://chingu.io/) voyage.

Chingu_Virtual_Pet is a web based tamagotchi inspired virtual pet.

## Getting started

1. Clone the repository or download it directly from this page
2. Change the folder's name in Virtual_Pet
3. Open the index.html file and play

## Features

* ### Every pet day:
  * Age update showing the pet day
  * Health decrease
  * Hunger increase
  * Happiness decrease by a random number between a set range

* When Health gets to zero the game display game over interface

![This is an image](https://github.com/BromeRST/Chingu-Tier2-Virtual-Pet/blob/main/Images/Virtual-Pet-end-game__screenshot.jpg)

* ### Interactive actions:
  * Clean button increase Health
  * Feed button decrease Hunger
  * Play button increase Happiness
  
  #### Events
  * After 5 'pet days' the app request it's first event from [Virtual Pet Events API](http://www.virtual-pet.uk/)
  * Each event comes with a nextEvent value. So the next event happen adding this value to the apps current pet day.
  
  ![This is an image](https://github.com/BromeRST/Chingu-Tier2-Virtual-Pet/blob/main/Images/Virtual-Pet-event__screenshot.jpg)

### Advanced logic:
  * As the pet gets hungry:
    * The interaction to increase happiness become less effective
    * Happiness decrease faster each day
  * As the pet becomes less happy:
    * The interaction to decrease hunger become less effective
    * Hunger increase faster each day
  * Hunger and Happiness make:
    * The interaction to increase health become less effective
    * Health decrease faster each day
    
 ### Other:
  * By using settings button:
    * Is possible to change pet's name
    * Is possible to change game's speed
    
    ![This is an image](https://github.com/BromeRST/Chingu-Tier2-Virtual-Pet/blob/main/Images/Virtual-Pet-settings-menu__screenshot.jpg)
    
  * Different Spike's version (i.e. happy/sad/dead)
