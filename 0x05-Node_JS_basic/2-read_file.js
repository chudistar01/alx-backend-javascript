const fs = require('fs');

/**
 * counts student in a csv
 * @param {string} datapath
 */

const countStudents = (dataPath) => {
    if (!fs.existsSync(dataPath)) {
	throw new Error('Cannot load the database');
    }

    if (!fs.statSync(dataPath).isFile()) {
	throw new Error('Cannot load the database');
    }

    const fileLines = fs.readFileSync(dataPath, 'utf-8').trim().split('\n');

    const studentGroups = {};

    const dbFieldNames = fileLines[0].split(',');

    for (const line of fileLines.slice(1)) {
	const studentRecord = line.split(',');

	const field = studentRecord[studentRecord.length - 1] || 'Unknown';

	if (!studentGroups[field]) {
	    studentGroups[field] = [];
	}

	const studentEntries = dbFieldNames.map((propName, idx) => {
	    return [propName, studentRecord[idx] || null];
	});

	studentGroups[field].push(Object.fromEntries(studentEntries));
    }

    const totalStudents = Object.values(studentGroups).reduce((total, group) => total + group.length, 0);
    console.log(`Number of students: ${totalStudents}`);

    for (const [field, group] of Object.entries(studentGroups)) {
	const studentNames = group.map(student => student.firstname).join(', ');
	console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
    }
};

module.exports = countStudents;
