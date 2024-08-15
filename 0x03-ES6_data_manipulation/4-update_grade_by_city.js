export default function updateStudentGradeByCity(students, city, newGrades) {
  if (Array.isArray(students) && Array.isArray(newGrades)) {
    return students
      .filter((student) => student.location === city)
      .map((student) => {
        const grade = newGrades.find((gradeobj) => gradeobj.id === student.id);
        return grade ? { ...student, grade: grade.grade } : student;
      });
  }
  return [];
}
