(function() {
    const myQuestions = [
      {
        question: " 1) Identify which of the following software is used to obtain an accurate root locus? ",
        answers: {
          a: "LISP",
          b: "MATLAB",
          c: "dbase",
          d: "Oracle"
         },
        correctAnswer: "b" 
      
      },
      {
        question: " 2) A lag Compensator. ",
        answers: {
          a: "Speeds up the transient response of the system",
          b: ". Improves steady state behaviour of the system ",
          c: "Improves steady state behaviour and speeds up the transient response of the system",
          d: " Improves steady state behaviour and preserves the transient response of the system"
         },
        correctAnswer: "d"
      },
      {
        question: "3) For drawing root locus, the angle of symptote yields the direction along which _________branches approach to  infinity. ",
    
         answers: {
          a: " p + z ",
          b: "p - z",
          c: "p/z",
          d: "p x z"
         
        },
        correctAnswer: "b"
      },
      {
        question: " 4) How many roots are produce with positive real parts in equation s<sup>3</sup> + s<sup>2</sup> + s<sup>1</sup> + 1 = 0" ,
        
        answers: {
          a: "Zero",
          b: "One",
          c: "Two",
          d: "Three"
         
        },
        correctAnswer: "a"
      },
       {
        question:  "5) Number of roots of characteristic equation is equal to the number of",
        answers: {
          a: "Branches",
          b: "Root",
          c: "Stem",
          d: "Poles"
         },
        correctAnswer: "a"
      },
       {
        question: "6) Examine the effect of a phase lag compensation on the performance of a servo system? ",
         answers: {
          a: "For a given relative stability, the  velocity constant is increased.",
          b: "For a given relative stability, the velocity constant is decreased",
          c: "The bandwidth of the system is  increased",
          d: "The time response is made faster. "
         
         
        },
        correctAnswer: "a"
      },
       {
        question: " 7) Choose the following statement which is not correct to select the feedback compensation over cascaded one?",
    
        
        answers: {
          a: "No amplification is required as the energy transfer is from higher to lower  level.",
          b: "Suitable devices are not available for compensation(series). ",
          c: " It is economical. ",
          d: "Provides greater stiffness against load  disturbances"
        },
        correctAnswer: "a"
      },
       {
        question: " 8) With regard to the filtering capacity the lead compensator and lag compensator are  respectively",
        answers: {
          a: "Low pass and high pass filter",
          b: "High pass and low pass filter",
          c: "Both high pass filter",
          d: "Both low pass filter"
         
        },
        correctAnswer: "a"
      },
       {
        question: "9) Root locus is used to calculate: ",
        answers: {
          a: "Marginal Stability",
          b: "Absolute Stability",
          c: "Conditional Stability",
          d: "Relative Stability"
         
        },
        correctAnswer: "d"
      },
       {
        question: "10) While increasing the value of gain K, the system becomes ",
        
        answers: {
          a: "Less stable. ",
          b: "More stable. ",
          c: "Unstable.",
          d: "Absolute stable."
         
        },
        correctAnswer: "a"
      },
      {
        question: "11) From below select the component which are present in root locus: ",
        answers: {
          a: "The p plane. ",
          b: "The s plane. ",
          c: "The q plane. ",
          d: "None of the above. "
        },
        correctAnswer: "b"
      },

      {
        question: "12) Which of the following is exhibited by Root locus diagrams ?",
        answers: {
          a: "The poles of the transfer function for a  set of parameter values.",
          b:  "The bandwidth of the system.",
          c: "The response of a system to a step input. ",
          d: "The frequency response of a system."
       },
       correctAnswer: "a"
        
      },

      {
        question: "13) Which of the following is the output of a thermocouple ?",
        answers: {
          a: "Alternating Current.",
          b: "Direct Current.",
          c: "A.C. voltage",
          d: "D.C. voltage."
        },
        correctAnswer: "d"
        
      },

      {
        question: "14) Which of the following is exhibited by Root locus diagrams ?",
        answers:{
          a: "The poles of the transfer function for a set of parameter values",
          b: "The bandwidth of the System. ",
          c: "The frequency of a system. ",
          d: "None of the above. "
          
        },
        correctAnswer: "a"
       },

       {
         question: "16) Differentiation of parabolic response is which kind of response",
         
         answers: {
           a: "step.",
           b: "Parabolic.",
           c: "Impulse.",
           d: "Ramp. "
         },
         correctAnswer: "c"
        
          
       },

       {
        question: "17) what will the value of k will not affect ? ",
        answers: {
          a: "Nyquist Criterian.",
          b: "Quasi Linearization.",
          c: "Functional analysis.",
          d: "Phase-plane representation. "
        },
        correctAnswer: "b"
       
         
      },

      {
        question: "18) The effect of error damping is to ",
        answers: {
          a: "provide larger settling time. ",
          b: "delay the response. ",
          c: "Reduce the steady state error.",
          d: "Any of the above. "
        },
        correctAnswer: "c"
       
         
      },

      {
        question: "19) Which technique is not applicable to nonlinear system ?",
        answers: {
          a: "Nyquist Criterian.",
          b: "Quasi Linearization.",
          c: "Functional analysis.",
          d: "Phase-plane representation. "
        },
        correctAnswer: "a"
       
         
      },

      {
        question: "20) what is the formula of no of asymptotes? ",
        answers: {
          a: "P - Q",
          b: "Z - P",
          c: "G(S) - P",
          d: "P - Z "
        },
        correctAnswer: "b"
      },

      {
        question: "21) With feedback what reduces? ",
        answers:
        {
          a:" system stability",
          b: "system gain",
          c: "system stability and gain",
          d: "none of the these"
        },
        correctAnswer: "b"
      },

      
      {
        question: "22) In a closed loop system. ",
        answers:
        {
          a:"Auto-pilot for an aircraft",
          b: "Direct current generator",
          c: "Car starter",
          d: "Electric switch"
        },
        correctAnswer: "a"
      },



    
    ];
  
    function buildQuiz() {
      // we'll need a place to store the HTML output
      const output = [];
  
      // for each question...
      myQuestions.forEach((currentQuestion, questionNumber) => {
        // we'll want to store the list of answer choices
        const answers = [];
  
        // and for each available answer...
        for (letter in currentQuestion.answers) {
          // ...add an HTML radio button
          answers.push(
            `<label>
               <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
             </label>`
          );
        }
  
        // add this question and its answers to the output
        output.push(
          `<div class="slide">
             <div class="question"> ${currentQuestion.question} </div>
             <div class="answers"> ${answers.join("")} </div>
           </div>`
        );
      });
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join("");
    }
  
    function showResults() {
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll(".answers");
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question...
      myQuestions.forEach((currentQuestion, questionNumber) => {
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if (userAnswer === currentQuestion.correctAnswer) {
          // add to the number of correct answers
          numCorrect++;
  
          // color the answers green
          answerContainers[questionNumber].style.color = "blue";
        } else {
          // if answer is wrong or blank
          // color the answers red
          answerContainers[questionNumber].style.color = "red";
        }
      });
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    function showSlide(n) {
      slides[currentSlide].classList.remove("active-slide");
      slides[n].classList.add("active-slide");
      currentSlide = n;
      
      if (currentSlide === 0) {
        previousButton.style.display = "none";
      } else {
        previousButton.style.display = "inline-block";
      }
      
      if (currentSlide === slides.length - 1) {
        nextButton.style.display = "none";
        submitButton.style.display = "inline-block";
      } else {
        nextButton.style.display = "inline-block";
        submitButton.style.display = "none";
      }
    }
  
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }
  
    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");
  
    // display quiz right away
    buildQuiz();
  
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    showSlide(0);
  
    // on submit, show results
    submitButton.addEventListener("click", showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
  })();
  
  
          
          
     
      
      
      
      
          
  
        