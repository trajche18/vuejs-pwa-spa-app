<template>
  <div id="app">
    <div v-for="(quiz, index) in questions" v-show="index === questionindex"> <!-- de vragen een voor een visualiseren met v-show -->
      <h1>{{ quiz.question }}</h1>
      <!-- Responses: display a li for each possible response with a radio button -->
      <ol>
        <li v-for="answer in quiz.possible_answers">
          <label class="container">
            <input type="radio" name="answer" v-model="answers[index]" :value="answer"> {{answer}}
            <span class="checkmark"></span>
          </label>
        </li>
      </ol>

    </div>
    <div v-if="questionindex < questions.length">
      <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" v-if="questionindex > 0" v-on:click="prev">
        prev
      </button>
      <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" v-on:click="next">
        next
      </button>
    </div>

    <h2 v-if="questionindex == questions.length">Your Total score is {{score}} / {{questions.length}}
      <br>
      <br> 1-4 pts
      <h2 class="container"> If you scored 1-4 points, you may be noticing some positive changes in your partner. Progress is a great thing. However, it is still a good idea to keep an eye out for any signs that abusive behaviors are returning, even small ones. If something doesn’t feel right, don’t ignore your intuition, it can be telling you something. And remember, even if your partner has made changes in their behavior, you are never obligated to stay in the relationship. Remind yourself that you deserve to be safe and healthy, no matter what you choose.</h2>
      <br> 5+ pts
      <h2 class="container"> If you scored 5 or more points, your partner still has a lot of work to do. Even though your partner has agreed to change, they are still hurting you. You may want to seriously consider leaving the relationship and ending contact with them. Remember, the most important thing is your safety. Whether you decide to leave or stay, have a safety plan ready to better protect yourself. And if you want more information about your options, start a chat with a peer advocate at www.loveisrespect.org.</h2>
      <router-link class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" to="/" @click.native>Home</router-link>
    </h2>

  </div>
</template>

<script>
  /* eslint-disable camelcase,quotes,key-spacing,keyword-spacing,space-before-blocks,space-before-function-paren,semi,comma-dangle,space-infix-ops,eqeqeq,no-undef */

  var quiz_questions = [
    {
      "type": "multiple",
      "difficulty": "easy",
      "question": "Is my partner more receptive of my opinions and activities than they were in the past?",
      "correct_answer": "Yes",
      "possible_answers": [
        "Yes",
        "No"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "question": "Is my partner open to talking about how their behaviors make me feel?",
      "correct_answer": "No",
      "possible_answers": [
        "Yes",
        "No"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "question": "Is my partner openly seeking professional help because they really do want to change?",
      "correct_answer": "No",
      "possible_answers": [
        "Yes",
        "No"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "question": "Is my partner accepting responsibility for their actions and acknowledging their behavior was unhealthy and unacceptable?",
      "correct_answer": "No",
      "possible_answers": [
        "Yes",
        "No"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "question": "Does my partner get upset when I express a different opinion?",
      "correct_answer": "Yes",
      "possible_answers": [
        "Yes",
        "No"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "question": "Does my partner have a possessive attitude towards me and my actions?",
      "correct_answer": "Yes",
      "possible_answers": [
        "Yes",
        "No"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "question": "Does my partner act like the victim for having to change?",
      "correct_answer": "Yes",
      "possible_answers": [
        "Yes",
        "No"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "question": "Does my partner believe that I owe him something for changing?",
      "correct_answer": "Yes",
      "possible_answers": [
        "Yes",
        "No"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "question": "Does my partner blame me for our problems?",
      "correct_answer": "Yes",
      "possible_answers": [
        "Yes",
        "No"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "question": "Does my partner make excuses for abusive behavior, past and present?",
      "correct_answer": "Yes",
      "possible_answers": [
        "Yes",
        "No"
      ]
    },
  ]

  export default {
    name: 'app',
    data : function (){
      return{
        questionindex:0,
        questions:quiz_questions,
        answers:Array(quiz_questions.length).fill(''),
      }
    },
    methods: {
      // Go to next question
      next: function() {
        this.questionindex++;
       /* if (('checkmark:checked').length == 0) {
          alert('you must select at least one radio button');
        } */ // checken of er een antwoord geselecteerd is op het moment dat er op het knopje NEXT wordt gedrukt
                // de error wordt getoond, alleen ook als er wel wat geselecteerd is
      },
      // Go to previous question
      prev: function() {
        this.questionindex--;
      },
    },
    computed:{
      score: function() {
        var total = 0;
        for (var i =0; i <this.answers.length; i++) {
          if(this.answers[i]==this.questions[i].correct_answer){
            total +=1;
          }
        }
        return total;
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  /* Customize the label (the container) */
  .container {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  /* Hide the browser's default radio button */
  .container input {
    position: absolute;
    opacity: 0;
  }
  /* Create a custom radio button */
  .checkmark {
    position: absolute;
    top: 0;
    left: 47%;
    height: 25px;
    width: 25px;
    background-color: #eee;
    border-radius: 50%;
  }
  /* On mouse-over, add a grey background color */
  .container:hover input ~ .checkmark {
    background-color: #ccc;
  }
  /* When the radio button is checked, add a blue background */
  .container input:checked ~ .checkmark {
    background-color: #2196F3;
  }
  /* Create the indicator (the dot/circle - hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }
  /* Show the indicator (dot/circle) when checked */
  .container input:checked ~ .checkmark:after {
    display: block;
  }
  /* Style the indicator (dot/circle) */
  .container .checkmark:after {
    top: 9px;
    left: 9px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: white;
  }
</style>
