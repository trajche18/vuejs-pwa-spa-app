const postQuiz = {
  methods: {
    postQuiz (quizUrl, title) {
      this.$root.$firebaseRefs.quiz.push(
        {
          'url': quizUrl,
          'comment': title,
          'info': 'Posted by Trajche',
          'created_at': -1 * new Date().getTime()
        }
      ).then(
        this.$router.push('/')
      )
    }
  }
}

export default postQuiz
