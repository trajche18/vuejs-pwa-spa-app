<template>
  <form>
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--8-col">
        <div class="card-image__picture">
          <panel title="Quiz">  <!-- de titel van Panel wordt hier meegegeven. Er kunnen meerdere Panel components op de pagina geimporteerd worden -->
            <h3> Hello World</h3>
            <p>
              What are you doing today?
            </p>
          </panel>
        </div>
      </div>
      <div class="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet">
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded is-dirty">
          <input id="username" v-model="title" type="text" class="mdl-textfield__input"/>
          <label for="username" class="mdl-textfield__label">Describe me</label>
        </div>
        <div class="actions">
          <a @click.prevent="postQuiz(quizUrl, title)" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
            POST A CAT
          </a>
        </div>
      </div>
      <!-- twee manieren van buttons gebruiken -->
      <router-link class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" to="/" @click.native>Go Back</router-link>
    </div>
    <button class="quiz-button mdl-button mdl-js-button mdl-button--raised mdl-button--colored" @click="handleClick">Download</button>
  </form>
</template>
<script>
  import parse from 'xml-parser'
  import postQuiz from '@/mixins/postQuiz'
  import Panel from '@/components/Panel'

  export default {
    methods: {
      handleClick () { // roept de methode handleClick van button GO_BACK aan en verwijst de gebruiker naar de router home, oftewel path: "/"
        this.$router.push({name: 'home'})
      },
      mixins: [postQuiz],
      component: { // component Panel wordt geimplementeerd
        Panel
      },
      data () {
        return {
          'quizUrl': null
        }
      },
      mounted () {
        this.$http.get('https://translation.googleapis.com').then(response => {
          this.quizUrl = parse(response.body).root.children['0'].children['0'].children['0'].children['0'].content
        })
      }
    }
  }
</script>
<style scoped>
  .quiz-button{
    position: fixed;
    right: 154px;
    bottom: 124px;
    z-index: 998;
  }
  .waiting {
    padding: 10px;
    color: #555;
  }
</style>
