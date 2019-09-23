const url = `http://localhost:3000/api/students/`;

export default {
    getStudents, getStudent, deleteStudent, postStudent
}

async function getStudents() {
    const request = await fetch(`${url}`);
    const data = await request.json();
    return data;
}

async function getStudent(id) {
    const request = await fetch(`${url}${id}`);
    const data = await request.json();
    return data;
}

async function deleteStudent(id){
    const response = await fetch(`${url}${id}`, {
        headers: {
            "Content-Type": "application/json"
        },
        method:"DELETE"
    })
    const data = await response.json();
    return data
}

async function postStudent(student){
    const response = await fetch(`${url}`, {
        // headers: {
        //     "Content-Type": "application/json"
        // },
        method:"POST",
        body: student
    });
    const data = await response.json();
    return data
}