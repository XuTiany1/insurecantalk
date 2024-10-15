import './style.css'
import hiottoAILogo from '/hiotto-ai-logo.png'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://hiotto.ai" target="_blank">
      <img src="${hiottoAILogo}" class="logo" alt="Hiotto AI logo" />
    </a>
    <h2>Let's talk about issurance! </h2>
    <h2>Please click the chatbot in left-bottom to start...</h2>
    <p class="read-the-docs">
      Click on the Hiotto AI logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))