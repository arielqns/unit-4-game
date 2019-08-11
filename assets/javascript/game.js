//Global Variables
//===============================================

//Crystal Variables
    //generic cystal object with name and values for all Crystals
    var crystal = {
      amber:
      {
          name: "Amber",
          value: 0
      },
      emerald:
      {
          name: "Emerald",
          value: 0
      },
      obsidian:
      {
          name: "Obsidian",
          value: 0
      }, 
      turquoise:
      {
          name: "Turquoise",
          value: 0
      } 
    };
    //Track Scores (Current and Target)
    var currentScore    = 0;
    var targetScore     = 0;

    //Track Win & Losses
    var winCount        = 0;
    var lossCount       = 0; 



//Functions 
//===============================================
    //Helper function toset random number selection function
    var getRandom = function(min, max){
        return Math.floor(Math.random() *(max - min + 1)) + min;
    }

    //start the game and re-start the game
    var startGame = function(){
        //reset the current score
        currentScore = 0;
        //set a new target score (between 19 and 120)
        targetScore = getRandom(19, 120);
        //set diff values for each of the crystals (between 1-12)
        crystal.amber.value     = getRandom(1, 12);
        crystal.emerald.value   = getRandom(1, 12);
        crystal.obsidian.value  = getRandom(1, 12);
        crystal.turquoise.value = getRandom(1, 12);

        //change the HTML to reflect all these changes
        $("#yourScore").html(currentScore);
        $("#targetScore").html(targetScore);

            //testing console
            console.log("---------------------------")
            console.log("Target Score:" + targetScore);
            console.log("Ambar: " + crystal.amber.value + " | Emerald: " + crystal.emerald.value + " | Obsidian: " + crystal.obsidian.value + " | Turquoise: " + crystal.turquoise.value);
            console.log("------------------------")
    }
        //Respond to clicks on the crystals = add values
        var addValues = function(crystal) {

            //Change currentScore
            currentScore = currentScore + crystal.value;
            
            //Change the HTML to reflect changes in currentScore
            $("#yourScore").html(currentScore);

            //Call the checkWin Function
            checkWin();
            
            //testing console
            console.log("Your Score: " + currentScore);
        }

        //check if user Won or Lost and reset the game
        var checkWin = function(){
            
            //check if currenScore is larger than targetScore
            if(currentScore > targetScore) {
                alert("Sorry. You lost!");
                console.log("You lost");
                
                // Add to loss Counter
                lossCount++;

                //Change loss Count HTML
                $("#lossCount").html(lossCount);

                //Restart game
                startGame();
            }

            else if (currentScore == targetScore) {
                alert("Congratulations! You Won!");
                console.log("You Won");

                // Add to win Counter
                winCount++;

                //Change win Count HTML
                $("#winCount").html(winCount);

                //Restart game
                startGame();
            }



        }


//Main Process
//===============================================
    //starts the game the 1st time
    startGame();

    //click fuctions using $
    $("#amber").click(function(){
        addValues(crystal.amber);
    });
    $("#emerald").click(function(){
        addValues(crystal.emerald);("test");
    });
    $("#obsidian").click(function(){
        addValues(crystal.obsidian);
    });
    $("#turquoise").click(function(){
        addValues(crystal.turquoise);
    });
    

