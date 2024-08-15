export default function updateStudentGradeByCity(students, city, newGrades) {
  if (Array.isArray(students) && Array.isArray(newGrades)) {
    return students
      .filter((student) => student.location === city)
      .map((student) => {
        const gradeObj = newGrades.find((gradeobj) => gradeobj.id === student.id);
        return {
          ...student,
          grade: gradeObj ? gradeObj.grade : 'N/A',
        };
      });
  }
  return [];
}
