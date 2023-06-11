// Global variables
let level;
let classChoice;
let familyName;
let selectedStudent;

const students = [
  { name: 'محمد أمين الفيلالي', classChoice: 's10', level: '1', score: 19.5 },
  { name: 'ملاك حمام', classChoice: 's10', level: '1', score: 17 },
  { name: 'نورس بنمحفوظ', classChoice: 's10', level: '1', score: 9 },
  { name: 'شمس الدين القماطي', classChoice: 's10', level: '1', score: 5.5 },
  { name: 'مجدي باي', classChoice: 's10', level: '1', score: 5 },
  { name: 'يحي رجب', classChoice: 's10', level: '1', score: 14.5 },
  { name: 'يوسف صالحي', classChoice: 's10', level: '1', score: 7 },
  { name: 'محمد الحبيب المهتلي', classChoice: 's10', level: '1', score: 13.5 },
  { name: 'سيرين المحمدي', classChoice: 's10', level: '1', score: 5 },
  { name: 'فاطمة علية حسينة', classChoice: 's10', level: '1', score: 18 },
  { name: 'فاطمة الزهراء القماطي', classChoice: 's10', level: '1', score: 9 },
  { name: 'فاطمة التاجوري', classChoice: 's10', level: '1', score: 6 },
  { name: 'لميس الاسود', classChoice: 's10', level: '1', score: 19 },
  { name: 'سندة حمام', classChoice: 's10', level: '1', score: 15 },
  { name: 'نيجار المكاري', classChoice: 's10', level: '1', score: 10 },
  { name: 'يوسف القربي', classChoice: 's10', level: '1', score: 5.5 },
  { name: 'ملاك القابسي', classChoice: 's10', level: '1', score: 11 },
  { name: 'مي بنرحومة', classChoice: 's10', level: '1', score: 2.5 },
  { name: 'مرام القصوري', classChoice: 's10', level: '1', score: 8.5 },
  { name: 'زينب الحجري', classChoice: 's10', level: '1', score: 9.5 },
  { name: 'حمزة اليزيدي', classChoice: 's10', level: '1', score: 14.5 },
  { name: 'رندلين بننصر', classChoice: 's10', level: '1', score: 14 },
  { name: 'سليمة الشوشاني', classChoice: 's10', level: '1', score: 12.5 },
  { name: 'رغد بنالكيلاني', classChoice: 's10', level: '1', score: 19.5 },
  { name: 'امنة شويخة', classChoice: 's10', level: '1', score: 6 },
  { name: 'زيد لشهب', classChoice: 's10', level: '1', score: 17.5 },
  { name: 'اسماء المهذبي', classChoice: 's10', level: '1', score: 16 },
  { name: 'الاء الطرابلسي', classChoice: 's10', level: '1', score: 12.5 },
  { name: 'رانبة بنفظل', classChoice: 's10', level: '1', score: 9.5 },
  { name: 'امان الله الاسود', classChoice: 's10', level: '1', score: 17.5 },
  { name: 'دينا الاندلسي', classChoice: 's10', level: '1', score: 10.5 },
  { name: 'اسراء الطرابلسي', classChoice: 's10', level: '1', score: 11.5 },
  { name: 'حازم بنمحمد', classChoice: 's10', level: '1', score: 18 },
  { name: 'الاء كحلون', classChoice: 's10', level: '1', score: 17.5 },
  { name: 'اية المؤدب', classChoice: 's10', level: '1', score: 19.5 },
  { name: 'رنا السنوسي', classChoice: 's10', level: '1', score: 12.5 },
  { name: 'ادم صالح', classChoice: 's10', level: '1', score: 19.5 },
  { name: 'زينب البرصالي', classChoice: 's13', level: '1', score: 19.5 },
  { name: 'مرام بنابراهيم', classChoice: 's13', level: '1', score: 8 },
  { name: 'ميساء بنخيرية', classChoice: 's13', level: '1', score: 4.5 },
  { name: 'محمد امين الحري', classChoice: 's13', level: '1', score: 2.5 },
  { name: 'محمد كمال القربي', classChoice: 's13', level: '1', score: 5 },
  { name: 'محمد بوزيد', classChoice: 's13', level: '1', score: 2.5 },
  { name: 'علي التليلي', classChoice: 's13', level: '1', score: 7 },
  { name: 'جاد سالم', classChoice: 's13', level: '1', score: 5.5 },
  { name: 'عبد القادر الغربي', classChoice: 's13', level: '1', score: 6 },
  { name: 'شهم بنعلية', classChoice: 's13', level: '1', score: 8.5 },
  { name: 'زين الدين بنمعاوية', classChoice: 's13', level: '1', score: 17 },
  { name: 'ويام الحجري', classChoice: 's13', level: '1', score: 6 },
  { name: 'انس العويني', classChoice: 's13', level: '1', score: 16 },
  { name: 'يوسف ساسي', classChoice: 's13', level: '1', score: 5 },
  { name: 'ياسين بنعزونة', classChoice: 's13', level: '1', score: 4.5 },
  { name: 'ملاك التليلي', classChoice: 's13', level: '1', score: 8.5 },
  { name: 'يسر بنساسي', classChoice: 's13', level: '1', score: 13.5 },
  { name: 'غفران الشعباني', classChoice: 's13', level: '1', score: 7 },
  { name: 'رنيم المهتلي', classChoice: 's13', level: '1', score: 14 },
  { name: 'ياسمين اليزيدي', classChoice: 's13', level: '1', score: 8 },
  { name: 'بلقيس المستور', classChoice: 's13', level: '1', score: 13 },
  { name: 'محمد بنسليمان', classChoice: 's13', level: '1', score: 7 },
  { name: 'منار تيرة', classChoice: 's13', level: '1', score: 16 },
  { name: 'ريان حوالة', classChoice: 's13', level: '1', score: 15 },
  { name: 'اية بنسلطانة', classChoice: 's13', level: '1', score: 12.5 },
  { name: 'رتاج التونسي', classChoice: 's13', level: '1', score: 13.5 },
  { name: 'هديل بنسلطانة', classChoice: 's13', level: '1', score: 7.5 },
  { name: 'اسماء الصفاقسي', classChoice: 's13', level: '1', score: 12 },
  { name: 'حمزة القاسمي', classChoice: 's13', level: '1', score: 2 },
  { name: 'فرح الحري', classChoice: 's13', level: '1', score: 7.5 },
  { name: 'محمد امين النويصر', classChoice: 's13', level: '1', score: 1.5 },
  { name: 'عصام بنعزيزة', classChoice: 's13', level: '1', score: 0 },
  { name: 'اية حمام', classChoice: 's13', level: '1', score: 17.5 },
  { name: 'زينب المهذبي', classChoice: 's13', level: '1', score: 15 },
  { name: 'ابتهال الصغير', classChoice: 's13', level: '1', score: 12.5 },
  { name: 'شيماء دبيش', classChoice: 's13', level: '1', score: 17 },
  { name: 'الاء المهذبي', classChoice: 's13', level: '1', score: 13.5 },
  { name: 'سارة بوريسة حمام', classChoice: 's13', level: '1', score: 19 },
  { name: 'روى بنعلية', classChoice: 's13', level: '1', score: 19.5 },
	 { name: 'ادم اندريه نوتة', classChoice: 's15', level: '1', score: 14.5 },
  { name: 'امنة بنعلي', classChoice: 's15', level: '1', score: 8 },
  { name: 'اية الاحمر', classChoice: 's15', level: '1', score: 7.5 },
  { name: 'اية بوسامة', classChoice: 's15', level: '1', score: 10.5 },
  { name: 'احمد بوحوش', classChoice: 's15', level: '1', score: 19.5 },
  { name: 'اسامة النوالي', classChoice: 's15', level: '1', score: 19.5 },
  { name: 'امان الله مشماش', classChoice: 's15', level: '1', score: 2.5 },
  { name: 'اماني المهذبي', classChoice: 's15', level: '1', score: 18.5 },
  { name: 'امير الحويشي', classChoice: 's15', level: '1', score: 17 },
  { name: 'اميمة حمحوم', classChoice: 's15', level: '1', score: 6.5 },
  { name: 'اسراء مومني', classChoice: 's15', level: '1', score: 12.5 },
  { name: 'اشراق بحرية', classChoice: 's15', level: '1', score: 10 },
  { name: 'اياد حمام', classChoice: 's15', level: '1', score: 14 },
  { name: 'باسم الجبالي', classChoice: 's15', level: '1', score: 6.5 },
  { name: 'جاسر شوشان', classChoice: 's15', level: '1', score: 7.5 },
  { name: 'حذامي بنمحمد', classChoice: 's15', level: '1', score: 13.5 },
  { name: 'حمادي عياد', classChoice: 's15', level: '1', score: 15 },
  { name: 'خديجة الغول', classChoice: 's15', level: '1', score: 10 },
  { name: 'دعاء المولدي', classChoice: 's15', level: '1', score: 15 },
  { name: 'دعاء بنعمر', classChoice: 's15', level: '1', score: 19.5 },
  { name: 'رغدة بنعبد الله', classChoice: 's15', level: '1', score: 18.5 },
  { name: 'رنيم الرياحي', classChoice: 's15', level: '1', score: 16 },
  { name: 'سليم بنمعاطي', classChoice: 's15', level: '1', score: 14 },
  { name: 'شهد بنالكيلاني', classChoice: 's15', level: '1', score: 14.5 },
  { name: 'شروق بنحزاز', classChoice: 's15', level: '1', score: 5.5 },
  { name: 'ضياء خياري', classChoice: 's15', level: '1', score: 16.5 },
  { name: 'غفران عبود', classChoice: 's15', level: '1', score: 11.5 },
  { name: 'فادي قاوة', classChoice: 's15', level: '1', score: 18 },
  { name: 'محمد ياسين الاندلسي', classChoice: 's15', level: '1', score: 10.5 },
  { name: 'مريم الزرقني', classChoice: 's15', level: '1', score: 8.5 },
  { name: 'ملاك المحجوبي', classChoice: 's15', level: '1', score: 16 },
  { name: 'محمد امين بلواعر', classChoice: 's15', level: '1', score: 11.5 },
  { name: 'نور الهدى بنلله', classChoice: 's15', level: '1', score: 16.5 },
  { name: 'وجدي الزيادي', classChoice: 's15', level: '1', score: 5.5 },
  { name: 'ياسر بكارة', classChoice: 's15', level: '1', score: 15 },
  { name: 'يوسف بحرية', classChoice: 's15', level: '1', score: 11 },
  { name: 'يوسف بنالمبروك', classChoice: 's15', level: '1', score: 16.5 },
  { name: 'يوسف مخلوف', classChoice: 's15', level: '1', score: 7.5 },
  { name: 'امنة الجندوبي', classChoice: '2 sciences 2', level: '2', score: 15.5 },
  { name: 'تقوى بوعود', classChoice: '2 sciences 2', level: '2', score: 18.5 },
  { name: 'سيرين بلواعر', classChoice: '2 sciences 2', level: '2', score: 16 },
  { name: 'سهى الصغير', classChoice: '2 sciences 2', level: '2', score: 14 },
  { name: 'حمدي المهذبي', classChoice: '2 sciences 2', level: '2', score: 14 },
  { name: 'رنيم بنعزونة', classChoice: '2 sciences 2', level: '2', score: 17 },
  { name: 'احمد الجميل', classChoice: '2 sciences 2', level: '2', score: 17.5 },
  { name: 'زينب العياري', classChoice: '2 sciences 2', level: '2', score: 17.5 },
  { name: 'تسنيم بنعامر', classChoice: '2 sciences 2', level: '2', score: 18.5 },
  { name: 'سارة زمزم', classChoice: '2 sciences 2', level: '2', score: 17.5 },
  { name: 'الياس الحري', classChoice: '2 sciences 2', level: '2', score: 13 },
  { name: 'محمد عزيز السعيدي', classChoice: '2 sciences 2', level: '2', score: 14 },
  { name: 'احسان الحباشة', classChoice: '2 sciences 2', level: '2', score: 18 },
  { name: 'ياسمين بنمحمود', classChoice: '2 sciences 2', level: '2', score: 15 },
  { name: 'شيماء دبيش', classChoice: '2 sciences 2', level: '2', score: 17 },
  { name: 'محمد ياسين العفيف', classChoice: '2 sciences 2', level: '2', score: 18.5 },
  { name: 'محمد امين التليلي', classChoice: '2 sciences 2', level: '2', score: 19.5 },
  { name: 'ياسين بنمحفوظ', classChoice: '2 sciences 2', level: '2', score: 17.5 },
  { name: 'ياسين الدبيبي', classChoice: '2 sciences 2', level: '2', score: 11.5 },
  { name: 'ملاك بوسامة', classChoice: '2 sciences 2', level: '2', score: 17 },
  { name: 'ياسمين حمحوم', classChoice: '2 sciences 2', level: '2', score: 17 },
  { name: 'كريم السعفي', classChoice: '2 sciences 2', level: '2', score: 14.5 },
  { name: 'يمنى بنالشوشاني', classChoice: '2 sciences 2', level: '2', score: 17 },
  { name: 'يارة الجليلي', classChoice: '2 sciences 2', level: '2', score: 15 },
  { name: 'ياسمين النجار', classChoice: '2 sciences 2', level: '2', score: 16 },
  { name: 'اسماء بوعصيدة', classChoice: '2 sciences 2', level: '2', score: 10 },
  { name: 'اسلام ابنالوافي', classChoice: '2 info 2', level: '2', score: 15.5 },
  { name: 'اسامة الحباشة', classChoice: '2 info 2', level: '2', score: 13 },
  { name: 'بلال بنخيرية', classChoice: '2 info 2', level: '2', score: 14.5 },
  { name: 'عزيز بنمعاوية', classChoice: '2 info 2', level: '2', score: 11.5 },
  { name: 'بلال بوسامة', classChoice: '2 info 2', level: '2', score: 14.5 },
  { name: 'ريان بنرحيم', classChoice: '2 info 2', level: '2', score: 13 },
  { name: 'ايوب السعيدي', classChoice: '2 info 2', level: '2', score: 15.5 },
  { name: 'ريان النويصر', classChoice: '2 info 2', level: '2', score: 13 },
  { name: 'اسامة الكيلاني', classChoice: '2 info 2', level: '2', score: 12 },
  { name: 'ايوب حامدي', classChoice: '2 info 2', level: '2', score: 13 },
  { name: 'حمادي اللافي', classChoice: '2 info 2', level: '2', score: 14.5 },
  { name: 'وفيق الغول', classChoice: '2 info 2', level: '2', score: 13 },
  { name: 'ايوب بن علية', classChoice: '2 info 2', level: '2', score: 11 },
  { name: 'خلود السيد', classChoice: '2 info 2', level: '2', score: 15 },
  { name: 'اسماء بنزبير', classChoice: '2 info 2', level: '2', score: 13 },
  { name: 'ابراهيم السيد', classChoice: '2 info 2', level: '2', score: 13.5 },
  { name: 'حمزة هيشري', classChoice: '2 info 2', level: '2', score: 13.5 },
  { name: 'صفاء كردوع', classChoice: '2 info 2', level: '2', score: 13.5 },
  { name: 'تيسير الحباشة', classChoice: '2 info 2', level: '2', score: 14.5 },
  { name: 'محمد عزيز مرتيل', classChoice: '2 info 2', level: '2', score: 5.5 },
  { name: 'محمد الهادي مخلوف', classChoice: '2 info 2', level: '2', score: 15 },
  { name: 'محمد مخلوف', classChoice: '2 info 2', level: '2', score: 15.5 },
  { name: 'ملكة الشعيلي', classChoice: '2 info 2', level: '2', score: 8.5 },
  { name: 'مريم بنمجدوبة', classChoice: '2 info 2', level: '2', score: 13.5 },
  { name: 'ملكة بنعبد الله', classChoice: '2 info 2', level: '2', score: 12 },
  { name: 'قصي السعيدي', classChoice: '2 info 2', level: '2', score: 4.5 },
  { name: 'يوسف الغالي', classChoice: '2 info 2', level: '2', score: 12.5 },
  { name: 'صفوان المعاوي', classChoice: '2 info 2', level: '2', score: 16.5 },
  { name: 'محمد امين باي', classChoice: '2 info 2', level: '2', score: 6 },
  { name: 'فادي الحسيني', classChoice: '2 info 2', level: '2', score: 6.5 },
  { name: 'يحي بنحمدة', classChoice: '2 info 2', level: '2', score: 12.5 },
  { name: 'علاء الدين العربي', classChoice: '2 info 2', level: '2', score: 12 },
  { name: 'محمود السيد', classChoice: '2 info 2', level: '2', score: 14.5 },
  { name: 'عمر بوالابيار', classChoice: '2 info 2', level: '2', score: 12 },
  { name: 'محمد حسين بن فضل', classChoice: '2 info 2', level: '2', score: 11 },
  { name: 'ياسمين المهذبي', classChoice: '2 info 2', level: '2', score: 12 }
  
];


// Function to handle level selection
function chooseLevel(selectedLevel) {
  level = selectedLevel;
  if (level === '1') {
    const url = `level.html?level=${selectedLevel}`;
    window.location.href = url;
  } else if (level === '2') {
    const url = `class.html?level=${selectedLevel}`;
    window.location.href = url;
  }
}

// Function to handle class selection
function chooseClass(selectedClass) {
  const urlParams = new URLSearchParams(window.location.search);
  const level = urlParams.get('level');
  const url = `name.html?level=${level}&classChoice=${selectedClass}`;
  window.location.href = url;
}

// Function to check if family name matches and display score
function checkFamilyName() {
  const urlParams = new URLSearchParams(window.location.search);
  const level = urlParams.get('level');
  const classChoice = urlParams.get('classChoice');
  const familyName = document.getElementById('familyName').value;

  const matchingStudent = students.find(student =>
    student.name.toLowerCase() === familyName.toLowerCase() &&
    student.level === level &&
    student.classChoice === classChoice
  );

  if (matchingStudent) {
  const score = matchingStudent.score;
  const scoreElement = document.getElementById('score');

  if (score >= 15 && score <= 20) {
    const perfectEmoji = "🏆";
    scoreElement.textContent = perfectEmoji + score + ": نتائج مشرفة ! استمر هكذا، " + familyName + "!";
  } else if (score >= 10 && score < 15) {
    const goodEmoji = "👏";
    scoreElement.textContent = goodEmoji + score + ": درجات جيدة! يمكنك تحقيق المزيد، " + familyName + ".";
  } else if (score >= 6 && score < 10) {
    const canDoMoreEmoji = "💪";
    scoreElement.textContent = canDoMoreEmoji + score + ": عليك بمضاعفة المجهود ، " + familyName + ". استمر في العمل!";
  } else if (score >= 0 && score < 6) {
    const workMoreEmoji = "📚";
    scoreElement.textContent = workMoreEmoji + score + ": تحتاج إلى العمل بجد أكثر، " + familyName + ".";
  }
}
 else {
    alert(`لم يتم العثور على تلميذ(ة)  بهذا الإسم : ${familyName}`);
  }
}

// Function to navigate back to the previous page
function goBack() {
  window.history.back();
}

function readCSVFile(file) {
      var reader = new FileReader();

      // Handle the file load event
      reader.onload = function (event) {
        var csvData = event.target.result;
        processData(csvData);
      };

      // Read the file as text
      reader.readAsText(file);
    }

    function processData(csvData) {
      var lines = csvData.split("\n");

      // Iterate over each line and alert the data
      for (var i = 0; i < lines.length-1; i++) {
        var cells = lines[i].split(",");

        // Alert the data
        
		var newStudent = {
          name: cells[0],
          classChoice: cells[1],
          level: cells[2],
          score: parseInt(cells[3])
        };
		

	    
        // Append the new student to the students array
        students.push(newStudent);
		alert(newStudent.name + ", " + newStudent.classChoice + ", " + newStudent.level + ", " + newStudent.score);
      }
    }
	
	// Function to filter students based on entered name
// Function to filter students based on entered name
// Function to filter students based on entered name
function filterStudents() {
    const enteredName = document.getElementById('familyName').value;
    const resultsContainer = document.getElementById('resultsContainer');
    const results = resultsContainer.getElementsByClassName('resultItem');
    const classChoice = getClassChoiceFromURL(); // Get class choice from URL

    // Remove previous selection
    for (let i = 0; i < results.length; i++) {
      results[i].classList.remove('selected');
    }

    filteredStudents = students.filter(student =>
      student.name.startsWith(enteredName) &&
      student.classChoice === classChoice // Filter by class choice
    );

    // Sort the filtered results alphabetically
    filteredStudents.sort((a, b) => a.name.localeCompare(b.name));

    // Display filtered results
    resultsContainer.innerHTML = '';

    filteredStudents.forEach(student => {
      const studentDiv = document.createElement('div');
      studentDiv.textContent = student.name;
      studentDiv.classList.add('resultItem');
      studentDiv.addEventListener('click', () => selectStudent(studentDiv));
      resultsContainer.appendChild(studentDiv);
    });
  }

  // Function to get the class choice from the URL parameter
  function getClassChoiceFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const classChoice = urlParams.get('classChoice');
    return classChoice;
  }

  // Function to select a student
  function selectStudent(studentDiv) {
    const results = document.getElementsByClassName('resultItem');

    // Remove previous selection
    for (let i = 0; i < results.length; i++) {
      results[i].classList.remove('selected');
    }

    // Apply selection to the clicked student
    studentDiv.classList.add('selected');

    // Add the selected name to the input field
    const familyName = document.getElementById('familyName');
    familyName.value = studentDiv.textContent;
  }
