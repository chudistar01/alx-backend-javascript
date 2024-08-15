export default function getStudentsByLocation(array, city) {
  if (Array.isArray(array)) {
    return (array.filter((x) => x.location === city));
  }
  return [];
}
