const questions = [
  {
    question: "Τις μικρές μπαταρίες τις ανακυκλώνω:",
    image: "images/batteries.png",
    answers: [
      { text: "Στον μπλε κάδο", points: 0 },
      { text: "Στον κάδο ΑΦΗΣ", points: 10 },
      { text: "Στον κίτρινο κάδο", points: -5 }
    ]
  },
  {
    question: "Ψώνια στο σούπερ μάρκετ:",
    image: "images/basket.png",
    answers: [
      { text: "Φτιάχνω λίστα και αγοράζω τα απολύτως απαραίτητα", points: 10 },
      { text: "Αγοράζω τα τρόφιμα που χρειάζομαι, αλλά δεν προσέχω την ημερομηνία λήξης", points: 0 },
      { text: "Αγοράζω τρόφιμα χωρίς να τα χρειάζομαι άμεσα", points: -5 }
    ]
  },
  {
    question: "Κατά την αγορά πλαστικών προϊόντων:",
    image: "images/supermarket.png",
    answers: [
      { text: "Δεν προσέχω το είδος πλαστικού, δεν ανακυκλώνω πλαστικά", points: -5 },
      { text: "Δεν προσέχω το είδος πλαστικού, όλα τα ανακυκλώνω", points: 0 },
      { text: "Επιλέγω τα είδη πλαστικών που μπορούν να ανακυκλωθούν", points: 10 }
    ]
  },
  {
    question: "Για τα καθημερινά ψώνια:",
    image: "images/groceries.png",
    answers: [
      { text: "Αγοράζω κάθε φορά όσες σακούλες χρειαστώ από το εκάστοτε κατάστημα", points: -5 },
      { text: "Έχω πάντα μαζί μου επαναχρησιμοποιούμενη – υφασμάτινη τσάντα", points: 10 },
      { text: "Επαναχρησιμοποιώ πλαστικές σακούλες από προηγούμενα ψώνια", points: 5 }
    ]
  },
  {
    question: "Το λάδι που χρησιμοποιώ στη μαγειρική:",
    image: "images/ate.png",
    answers: [
      { text: "Μετά τη μία χρήση το πετάω, έτσι κι αλλιώς δε μαγειρεύω συχνά", points: -5 },
      { text: "Το επαναχρησιμοποιώ, χωρίς να προσέχω τη σειρά στο μαγείρεμα των τροφών", points: 5 },
      { text: "Το επαναχρησιμοποιώ και προσέχω τη σειρά των τροφών στο μαγείρεμα, ώστε να διαρκέσει όσο πιο πολύ γίνεται", points: 10 }
    ]
  },
  {
    question: "Τα πλαστικά μπουκάλια νερού:",
    image: "images/plastic.png",
    answers: [
      { text: "Τα απορρίπτω ως έχουν στον μπλε κάδο ανακύκλωσης", points: 0 },
      { text: "Αφαιρώ και ξεχωρίζω όλα τα πλαστικά μέρη και στη συνέχεια τα πετάω μεμονωμένα στον μπλε κάδο ανακύκλωσης", points: 10 },
      { text: "Τα πετάω στον πρώτο κάδο που θα βρω κοντά μου", points: -5 }
    ]
  },
  {
    question: "Όταν πρόκειται να εκτυπώσω:",
    image: "images/paper.png",
    answers: [
      { text: "Εκτυπώνω σύμφωνα με τις προγραμματισμένες ρυθμίσεις του εκτυπωτή", points: -5 },
      { text: "Εκτυπώνω μόνο τις σελίδες που χρειάζομαι", points: 5 },
      { text: "Ορίζω στον εκτυπωτή σαν προεπιλογή εκτύπωσης τη διπλή όψη", points: 10 }
    ]
  },
  {
    question: "Σε επαγγελματικές συναντήσεις:",
    image: "images/meeting.png",
    answers: [
      { text: "Μοιράζω έντυπο το υλικό στους συμμετέχοντες", points: -5 },
      { text: "Στέλνω εκ των προτέρων το υλικό ηλεκτρονικά και δεν χρησιμοποιώ εκτύπωση", points: 5 },
      { text: "Στέλνω εκ των προτέρων το υλικό ηλεκτρονικά κι ενθαρρύνω ταυτόχρονα τους συμμετέχοντες να χρησιμοποιήσουν υπολογιστή/tablet για τις σημειώσεις τους", points: 10 }
    ]
  },
  {
    question: "Όταν δεν χρειάζομαι πλέον ένα ένδυμα:",
    image: "images/clothes.png",
    answers: [
      { text: "Το απορρίπτω στα κοινά/σύμμικτα απορρίμματα", points: 0 },
      { text: "Το δωρίζω", points: 5 },
      { text: "Του δίνω δεύτερη ζωή, μετατρέποντάς το με τη ραπτομηχανή σε άλλα αντικείμενα. Π.χ. από ρούχο το μετατρέπω σε πάνινη τσάντα", points: 10 }
    ]
  },
  {
    question: "Όταν πρόκειται για συσκευασία σαμπουάν:",
    image: "images/shampoo.png",
    answers: [
      { text: "Μόλις τελειώσει, απλά την πετάω στα κοινά/σύμμικτα απορρίμματα", points: -5 },
      { text: "Ανακυκλώνω την πλαστική συσκευασία μόλις τελειώσει", points: 5 },
      { text: "Επιλέγω μπάρες σαμπουάν, που δε διαθέτουν πλαστική συσκευασία", points: 10 }
    ]
  }
];

const resultDescriptions = [
  {
    min: -50,
    max: 50,
    image: "images/46.svg",
    text: "😢 Μάλλον στις καθημερινές σου συνήθειες, δεν περιλαμβάνεται η προστασία του περιβάλλοντος… " +
    "Διάβασε στο site μας την ενότητα «Ρεύματα αποβλήτων» και υιοθέτησε απλές καθημερινές συνήθειες που θα κάνουν τη διαφορά!"
  },
  {
    min: 51,
    max: 75,
    image: "images/45.svg",
    text: "🙂 Αγαπάς το περιβάλλον, αλλά… μπορείς και παραπάνω! Γνωρίζεις για την ανακύκλωση, την οποία και κάνεις πράξη. " +
    "Ωστόσο, υπάρχουν διαφορετικές πρακτικές για κάθε απόβλητο πριν φθάσει στο τελευταίο στάδιο διαχείρισής του, την ανακύκλωση. Μάθε περισσότερα στο site μας στην ενότητα «Ρεύματα αποβλήτων»."
  },
  {
    min: 76,
    max: 100,
    image: "images/44.svg",
    text: "😍 Συγχαρητήρια! Είσαι ό,τι χρειάζεται ο πλανήτης για να μπορεί να είναι βιώσιμος! Εμείς και οι μελλοντικές γενιές σε ευχαριστούμε πολύ! " +
    "Αν θέλεις να φρεσκάρεις τις γνώσεις σου στη βιωσιμότητα, μπορείς να επισκεφθείς το site μας στην ενότητα «Ρεύματα αποβλήτων»."
  }
];

let currentQuestionIndex = 0;
let totalScore = 0;

const introContainer = document.getElementById("intro-container");
const quizContainer = document.getElementById("quiz-container");
const resultContainer = document.getElementById("result-container");
const questionText = document.getElementById("question-text");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button");
const resultTitle = document.getElementById("result-title");
const resultDescription = document.getElementById("result-description");
const resultPrompt = document.getElementById("result-prompt");
const questionImage = document.getElementById("question-image");
const resultImage = document.getElementById("result-image");

document.getElementById("start-button").addEventListener("click", () => {
  introContainer.classList.add("hidden");
  quizContainer.classList.remove("hidden");
  startQuiz();
});

function startQuiz() {
  currentQuestionIndex = 0;
  totalScore = 0;
  showQuestion();
}

function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionText.textContent = currentQuestion.question;
  questionImage.src = currentQuestion.image;
  questionImage.alt = `Εικόνα για την ερώτηση ${currentQuestionIndex + 1}`;
  answerButtons.innerHTML = "";
  nextButton.classList.add("hidden");

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.onclick = () => selectAnswer(answer.points, button);
    answerButtons.appendChild(button);
  });
}

function selectAnswer(points, buttonElement) {
  totalScore += points;
  nextButton.classList.remove("hidden");

  document.querySelectorAll("#answer-buttons button").forEach(btn =>
    btn.classList.remove("selected")
  );
  buttonElement.classList.add("selected");
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  quizContainer.classList.add("hidden");
  resultContainer.classList.remove("hidden");

  const result = resultDescriptions.find(
    res => totalScore >= res.min && totalScore <= res.max
  );

  resultTitle.textContent = `Βαθμολογία: ${totalScore}`;
  resultDescription.textContent = result ? result.text : "Δεν βρέθηκε αποτέλεσμα.";
  //resultPrompt.textContent = "Θέλεις να ξαναπαίξεις και να βελτιώσεις τη βαθμολογία σου;";
  resultImage.src = result.image;
  resultImage.alt = "Αποτέλεσμα εικόνας";
}

function restartQuiz() {
  resultContainer.classList.add("hidden");
  introContainer.classList.remove("hidden");
}
