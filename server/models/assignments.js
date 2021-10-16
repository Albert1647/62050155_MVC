const fs = require('fs');
const path = require('path')

module.exports = class Assignment {
    constructor({assignment_id, assignment_name, description, due_date, assign_to}) {
        this.assignment_id = assignment_id
        this.assignment_name = assignment_name
        this.description = description
        this.due_date = due_date
        this.assign_to = assign_to
    }

    // add assignment
    save() {
        const p = path.join(
            path.dirname(process.mainModule.filename),
            'data',
            'assignments.json'
        )
        // read JSON file
        fs.readFile(p, (err, fileContent) => {
            let assignments = [];
            if (!err) {
                assignments = JSON.parse(fileContent);
            }

            // add content
            assignments.push(this) // this is this assignments(obj)
            fs.writeFile(p, JSON.stringify(assignments), err => {
                console.log('assignment error', err)
            })
        })
    }

    static fetchAll(callback) {
        const p = path.join(
            path.dirname(process.mainModule.filename),
            'data',
            'assignments.json'
        );

        // return all data
        fs.readFile(p, (err, fileContent) => {
            if(err) {
                callback([]);
            }
            callback(JSON.parse(fileContent))
        })
    }
}