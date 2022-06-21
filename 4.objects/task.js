function Student(name, gender, age) {
    // Ваш код
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  //ваш код
  this.subject = subjectName;
}

// ваш код для остальных методов
  Student.prototype.addMark = function(mark) {
    //ваш код
    if(this.marks === undefined){ 
      // добавить первую оценку 
      this.marks = [mark]
      } else {
        // добавить вторую и последующие оценки в массив
        this.marks.push(mark)
      }
  }

  Student.prototype.addMarks = function(...mark) {
    //ваш код
    if(this.marks === undefined){ 
      // добавить первую оценку 
      this.marks = mark
      } else {
        // добавить вторую и последующие оценки в массив
        this.marks = this.marks(...mark);
      }
  }

  Student.prototype.getAverage = function() {
    let sum = this.marks.reduce((acc, item) => item + acc, 0);
    return sum/this.marks.length
  }

  Student.prototype.exclude = function(reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason
  }