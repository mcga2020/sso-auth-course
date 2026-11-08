/* ============================================================
   quiz.js — 可复用选择题组件（无依赖）
   用法：在 lesson HTML 中放一个 .quiz 块：

     <div class="quiz" data-answer="1">     <!-- 正确选项的下标，从 0 起 -->
       <p class="quiz-q"><span class="qno">Q1</span>题干…？</p>
       <div class="quiz-options">
         <button type="button">选项一</button>
         <button type="button">选项二</button>
       </div>
       <div class="quiz-feedback" data-ok="答对的解释…"
            data-bad="答错后的解释…"></div>
     </div>

   行为：点击选项后立即判定，正确项标绿、错选标红，
   显示对应解释；已作答的题锁定，防止重复刷分。
   设计约定：所有选项文本长度应一致，不给格式线索。
   ============================================================ */
(function () {
  "use strict";

  document.querySelectorAll(".quiz").forEach(function (quiz) {
    var answer = parseInt(quiz.getAttribute("data-answer"), 10);
    var buttons = quiz.querySelectorAll(".quiz-options button");
    var feedback = quiz.querySelector(".quiz-feedback");
    var done = false;

    buttons.forEach(function (btn, idx) {
      btn.addEventListener("click", function () {
        if (done) return;
        done = true;

        buttons.forEach(function (b) { b.disabled = true; });
        buttons[answer].classList.add("correct");

        var correct = idx === answer;
        if (!correct) btn.classList.add("incorrect");

        if (feedback) {
          var text = correct
            ? feedback.getAttribute("data-ok")
            : feedback.getAttribute("data-bad");
          var verdict = correct ? "✓ 正确。" : "✗ 再想想。";
          feedback.innerHTML =
            '<span class="verdict ' + (correct ? "ok" : "bad") + '">' +
            verdict + "</span> " + (text || "");
          feedback.classList.add("show");
        }
      });
    });
  });
})();
