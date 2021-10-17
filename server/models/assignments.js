// model -> handle data-related logic
const fs = require("fs");
const path = require("path");

// global path
const p = path.join(
	path.dirname(process.mainModule.filename),
	"data",
	"assignments.json"
);

// utility function
// readFile -> callback
const getAssignmentsFromFile = (cb) => {
	fs.readFile(p, (err, fileContent) => {
		if (err) {
			cb([]);
		} else {
			cb(JSON.parse(fileContent));
		}
	});
};

module.exports = class Assignment {
	constructor(
		assignment_id,
		assignment_name,
		description,
		due_date,
		assign_to,
	) {
		this.assignment_id = assignment_id;
		this.assignment_name = assignment_name;
		this.description = description;
		this.due_date = due_date;
		this.assign_to = assign_to;
	}

	save() {
		getAssignmentsFromFile(assignments => {
            // if id is already exist -> update assignment
            if(this.assignment_id){
                const existingAssignment = assignments.findIndex(
                    asm => asm.assignment_id === this.assignment_id
                )
                console.log(existingAssignment)
                const updateAssignments = [...assignments];
                updateAssignments[existingAssignment] = this;
                fs.writeFile(p, JSON.stringify(updateAssignments), (err) => {
				    console.log(err);
			    });
            } else {
                // if id is null / not exist -> generate one
                this.assignment_id = Math.random().toString()
                assignments.push(this);
                fs.writeFile(p, JSON.stringify(assignments), (err) => {
				    console.log(err);
			    });
            }
		});
	}

    static fetchAll(cb) {
		getAssignmentsFromFile(cb);
	}

	static findById(id, cb) {
		getAssignmentsFromFile(assignments => {
			const assignment = assignments.find((a) => a.assignment_id === id);
			cb(assignment);
		});
	}
};
