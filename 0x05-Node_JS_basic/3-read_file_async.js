const fs = require('fs');

/**
 * counts student in a csv
 * @param {string} datapath
 */

const countStudents = (dataPath) => {

    return new Promise((resolve, reject) => {

	fs.readFile(dataPath, 'utf-8', (err, data) => {
	    if (err) {
		return reject('Cannot load the database');
	    }

	    const fileLines = data.trim().split('\n');
	    const studentGroups = {};

	    const dbFieldNames = fileLines[0].split(',');

	    for (const line of fileLines.slice(1)) {
		const studentRecord = line.split(',');

		const field = studentRecord[studentRecord.length - 1] || 'Unknown';

		if (!studentGroups[field]) {
		    studentGroups[field] = [];
		}

		const studentEntries = dbFieldNames.map((propName, idx) => [propName,
									    studentRecord[idx] || null]
		);

		studentGroups[field].push(Object.fromEntries(studentEntries));
	    }

	    const totalStudents = Object.values(studentGroups).
		  reduce((total, group) => total + group.length, 0);

	    console.log(`Number of students: ${totalStudents}`);

	    for (const [field, group] of Object.entries(studentGroups)) {
		const studentNames = group.map((student) => student.firstname).join(', ');
		console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
	    }

	    resolve();
	});
    });
};

module.exports = countStudents;
