<script>   
function startGame() {
  document.getElementById("main-menu").hidden = true;
  document.getElementById("classroom").hidden = false;
}
function showOptions() {
  alert("Options coming soon!");
}
function showCredits() {
  alert("Created by you!");
}
    function choose(option) {
      const story = document.getElementById("story");
      const choices = document.getElementById("choices");
      if (option === 1) {
        story.textContent =
          "...If this is any indication of your academic performance i fear we are in for a rather dissapointing semester";
        choices.innerHTML = `
          <button onclick="choose(4)">Six sevennnn</button>

          <button onclick="choose(5)">*Stay silent*</button>
        `;
      } else if (option === 2) {
        story.textContent =
          "See that it doesent happen again.";
        choices.innerHTML = `
          <button onclick="choose(4)">Six sevennnn</button>
          <button onclick="choose(5)">*Stay silent*</button>
        `;
      } else if (option === 3){ 
        story.textContent =
          "And yet, somehowy I doubt you suspect you would struggle to complete even that task on time.";
        choices.innerHTML = `
        <button onclick="choose(4)">Six sevennnn</button>
        <button onclick="choose(5)">*Stay silent*</button>
        `;
      } else if (option === 4) {
        story.textContent ="*Throws chalk at you* FAIL. ZERO POINTS.";
        choices.innerHTML = `
          <button onclick="restartGame()">Play again</button>
        `;
      } else if (option===5){
        story.textContent ="Good. Lets continue with the lesson.";
        choices.innerHTML=`
        <button onclick="restartGame()">Play again</button>
        `;
    }
    }
    function restartGame() {
      location.reload();
    }
     </script>
