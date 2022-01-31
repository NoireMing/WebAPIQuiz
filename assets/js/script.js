

    //global variables 
    var startBtn = document.getElementById("startBtn");
    var time = 75;
    var timeremaining = true;
    var time_start= false;
    var countdownTimer = document.getElementById("countdownTimer");
    var homeContainer =  document.getElementById("homeContainer");
    var quizContainer = document.getElementById("quizContainer");
    var questionHeading = document.getElementById("questionHeading");
    var answerChoiceA = document.getElementById("answerChoiceA");
    var answerChoiceB = document.getElementById("answerChoiceB");
    var answerChoiceC = document.getElementById("answerChoiceC");
    var answerChoiceD = document.getElementById("answerChoiceD");
    var correctAnswer = document.getElementById("correctAnswer");    
    var high_scores= [];
    var output="";
    var score = 0;

    let i = 0;

//question storage array

var questionsArray = [
{
    question: "What house does Harry beling to?",
    imageSrc: "",
    answerChoice: ["Slytherin", "Hufflepuff", "Gryffindor", "Ravenclaw"],
    correctAnswer: 2
}, 
{
    question: "What position does Harry play on Hogwart's Quidditch team?",
    imageSrc: "",
    answerChoice: ["Bludger", "Seeker", "Chaser", "Keeper"],
    correctAnswer: 1
},
{
    question: "Who gave Harry the scar on his forehead?",
    imageSrc: "",
    answerChoice: ["Ginny Weasley", "Severus Snape", "Voledmort", "A Basilisk"],
    correctAnswer: 2
}, 
{
    question: "What does the Sorcerer's Stone do?",
    imageSrc: "",
    answerChoice: ["Makes one invisible", "Transforms one into an animal", "Turns metal into gold & produces the Elixir of Life", "Beholds one's future"],
    correctAnswer: 2
},
{
    question: "Who is Fluffy",
    answerChoice: ["Harry's owl", "Hermione's cat", "Ron's mouse", "The three-headed dog that guards the Sorcerer's Stone"],
    correctAnswer: 3
}];


var countdownTimerInterval = setInterval(setCountdownTimer, 1000);


function setCountdownTimer() {
        if (time_start)
        time--;
        if(time<= 0) {
        end_quiz();
        time = 0;    
        }
        document.getElementById("timer").innerHTML = time;
    }

startBtn.addEventListener("click", function() {
    quizContainer.style.display = "block";
    homeContainer.style.display ="none";
    countdownTimer.style.display= "block";
    document.getElementById("score_keeper").style.display= "block";
    document.getElementById("score").innerHTML = score;
    setCountdownTimer();
    setQuizQuestions();
    time_start= true;
});


function setQuizQuestions() {
        questionHeading.textContent = questionsArray[i].question;
        answerChoiceA.textContent = questionsArray[i].answerChoice[0]; 
        answerChoiceB.textContent = questionsArray[i].answerChoice[1]; 
        answerChoiceC.textContent = questionsArray[i].answerChoice[2]; 
        answerChoiceD.textContent = questionsArray[i].answerChoice[3]; 
        };


answerChoiceA.addEventListener('click', function(event) {
        event.stopPropagation();
        correctAnswer= questionsArray[i].correctAnswer;
        console.log("correctAnswer " + correctAnswer);

        if (0 === correctAnswer) { 

            document.getElementById("AnswerResponse").innerHTML = "Woohoo! Nailed it!";
            setTimeout(function() {
            document.getElementById("AnswerResponse").innerHTML = "";
                },
                1000
            );
            score++;    

            document.getElementById("score").innerHTML = score;
        } else {
            timeremaining  -= 5;

            document.getElementById("AnswerResponse").innerHTML = "Awww man! Try again!";
            setTimeout(function() {
                document.getElementById("AnswerResponse").innerHTML = "";
                    },
                    1000
                );
        }
        if (i >= questionsArray.length -1) {
        end_quiz();
        } else {
            i++ 
            setQuizQuestions();
        };
    });

answerChoiceB.addEventListener('click', function(event) {
    event.stopPropagation();
    correctAnswer = questionsArray[i].correctAnswer;
    console.log(correctAnswer);
        if (1 === correctAnswer) { 
            document.getElementById("AnswerResponse").innerHTML = "Correct! Nailed it!";
            setTimeout(function() {
                document.getElementById("AnswerResponse").innerHTML = "";
                    },
                    1000
                );
            score++;
            document.getElementById("score").innerHTML = score;
        } else {
            timeremaining-= 5;
            document.getElementById("AnswerResponse").innerHTML = "Incorrect! Better luck in the next one!";
            setTimeout(function() {
                document.getElementById("AnswerResponse").innerHTML = "";
                    },
                    1000
                );
        }
        if (i >= questionsArray.length -1) {
        end_quiz();
        } else {
         i++ 
        setQuizQuestions();
        };
    });

answerChoiceC.addEventListener('click', function(event) {
    event.stopPropagation();
    correctAnswer = questionsArray[i].correctAnswer;
    console.log(correctAnswer);
    if (2 === correctAnswer) { 
        document.getElementById("AnswerResponse").innerHTML = "Correct! Nailed it!";
        setTimeout(function() {
            document.getElementById("AnswerResponse").innerHTML = "";
                },
                1000
            );
        score++;
        document.getElementById("score").innerHTML = score;
    } else {
        timeremaining -= 5;
        document.getElementById("AnswerResponse").innerHTML = "Incorrect! Better luck in the next one!";
        setTimeout(function() {
            document.getElementById("AnswerResponse").innerHTML = "";
                },
                1000
            );
    }
    if (i >= questionsArray.length -1) {
    end_quiz();
    } else {
        i++ 
        setQuizQuestions();
    };
    });

answerChoiceD.addEventListener('click', function(event) {
    event.stopPropagation();
    correctAnswer= questionsArray[i].correctAnswer.value;
    console.log(correctAnswer);
    if (3 === correctAnswer) { 
        document.getElementById("AnswerResponse").innerHTML = "Correct! Nailed it!";
        setTimeout(function() {
            document.getElementById("AnswerResponse").innerHTML = "";
                },
                1000
            );
        score++;
        document.getElementById("score").innerHTML = score;
    } else {
        timeremaining -= 5;
        document.getElementById("AnswerResponse").innerHTML = "Incorrect! Better luck in the next one!";
        setTimeout(function() {
            document.getElementById("AnswerResponse").innerHTML = "";
                },
                1000
            );
    }
    if (i >= questionsArray.length -1) {
       end_quiz();
    } else {
        i++ 
        setQuizQuestions();
    };
});


        function end_quiz(){
            document.getElementById("quizContainer").style.display="none";
            document.getElementById("countdownTimer").style.display= "none";
            document.getElementById("score_keeper").style.display= "none";
            document.getElementById("AnswerResponse").innerHTML="";
            document.getElementById("end_score").innerHTML= score;
            }

       
        
        
      
        function clear_up(){
        
        time=75;
        timeremaining=true;
        time_start=false;
        i=0;
        score=0;
        }

        var endOfQuiz = function(){
            console.log("end of quiz");
            // clean up some stuff
            clearMain();
            currentQuestionIdx = 0;
            
            // console log time
            console.log ("time: " + myDate);
            console.log ("penalty: " + timePenalty);
            console.log ("scored time: " + (timePenalty * 10 + myDate.getSeconds()+(myDate.getMinutes()/60)));
          
            //tally score
            // score is time based.
            var finalTime = (timePenalty * 10 + myDate.getSeconds()+(myDate.getMinutes()*60));
            // max score is 5 for each question (you get 5 seconds to answer the question)
            var perfectScore = activeQuestionsAry.length * 5;
            // the only way to the end is to answer all questions correct, so score is always based on a perfect score minus overtime and penalties
            // this also gives bonus score for finishing fast
            var finalScore = perfectScore - (finalTime-perfectScore); 
            console.log ("finalTime: " + finalTime);
            console.log ("perfectScore: " + perfectScore);
            console.log ("finalScore: " + finalScore);
            
          
            // all done
             var titleEl = document.createElement("H1");
             titleEl.textContent = "You've completed the " + activeQuizTitle + " Challenge!";
             instructionEl.appendChild(titleEl);  
           
             // Display result and get name for high score
             var finalScoreEl = document.createElement("p");
             finalScoreEl.textContent = "Your final score is " + finalScore;
             contentEl.appendChild(finalScoreEl);  
            // enter initials
            var initialsPromptEl = document.createElement("p");
            initialsPromptEl.textContent = "Enter your initials: ";
            contentEl.appendChild(initialsPromptEl); 
          
            var initialsInputEl = document.createElement("input");
            initialsPromptEl.appendChild(initialsInputEl); 
            initialsInputEl.setAttribute("id", "initials");
          
            // add a submit button  
            var initialsButtonEl = document.createElement("button");
            initialsButtonEl.textContent = "Submit";
            resultEl.appendChild(initialsButtonEl); 
            initialsButtonEl.addEventListener("click", function () {
              var myInitials = initialsInputEl.value;
              //add to high scores
              var highScoresAry= [];
              if(localStorage.getItem("HighScores") !== null){
                highScoresAry = highScoresAry.concat(JSON.parse(localStorage.getItem("HighScores")));
              };
                      
              highScoresAry.push(
                {
                  "user": myInitials,
                  "quiz": activeQuizTitle,
                  "score": finalScore
              });
          
              // put updated scores in local storage
              localStorage.setItem("HighScores", JSON.stringify(highScoresAry));
                
                  console.log("local storage set");
                // go to high scores
                highScores();
            });
          
          };
          
          //display high scores
          var highScores = function(){
            clearMain();
            var highScoresAry= [];
            if(localStorage.getItem("HighScores") !== null){
              highScoresAry = highScoresAry.concat(JSON.parse(localStorage.getItem("HighScores")));
            };
             // populate the title
             var titleEl = document.createElement("H1");
             titleEl.textContent = "High Scores!";
             instructionEl.appendChild(titleEl);  
           
             // populate the quiz instructions
             var scoreListEl = document.createElement("ol");
             contentEl.appendChild(scoreListEl);  
          
             console.log("highScores length: " + Object.keys(highScoresAry).length);
             var myAryLength = Object.keys(highScoresAry).length;
          
            for (i=0; i<myAryLength; i++){
              var scoreItemEl = document.createElement("li");
              scoreListEl.appendChild(scoreItemEl);
              scoreItemEl.textContent = highScoresAry[i].user + " " + highScoresAry[i].quiz  + " " + highScoresAry[i].score; 
            };
          
            // Exit
            var myExitBtn = document.createElement("button");
            resultEl.appendChild(myExitBtn);
            myExitBtn.textContent = "Exit High Scores";
            myExitBtn.addEventListener("click", function () {
              clearMain();
            });
          
            // clear scores
            var myClearBtn = document.createElement("button");
            resultEl.appendChild(myClearBtn);
            myClearBtn.textContent = "Remove High Scores";
          
            myClearBtn.addEventListener("click", function () {
              localStorage.removeItem("HighScores");
              highScores();
            });
          
          
          };
          
          //add listener for nav to display high scores
          viewHighScoresEl.addEventListener("click", function () {
            highScores();
          });
          
          //Timer function starts the clock interval displaying the clock (and checking when to end the clock)
          var startTimer = function(){
            timerOnBln = true;
            timePenalty = 0;
            myDate.setTime(0);
            myDate.setHours(0);
            const myInterval = setInterval(function(){
              myDate.setSeconds(myDate.getSeconds() + 1);
             timeEl.textContent = myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds();
          
            //  if the timer was turned off, then stop the interval
           if (!timerOnBln){
            //     // console.log("IF");
                clearInterval(myInterval);
                };
            }, 1000);
          };