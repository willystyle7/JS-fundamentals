class Forum {
    constructor() {
        this._users = [];
        this._questions = [];
        this._id = 1;
        this._loggedUsers = [];
    }

    register(username, password, repeatPassword, email) {
        if (username === '' || password === '' || repeatPassword === '' || email === '') {
            throw new Error('Input can not be empty');
        }
        if (password !== repeatPassword) {
            throw new Error('Passwords do not match');
        }
        if (this._users.find(u => u.username === username || u.email === email)) {
            throw new Error('This user already exists!');
        }
        let user = {
            username: username,
            email: email,
            password: password
        };
        this._users.push(user);
        return `${username} with ${email} was registered successfully!`;
    }

    login(username, password) {
        if (!this._users.find(u => u.username === username || u.password === password)) {
            throw new Error('There is no such user');
        }
        this._loggedUsers.push(username);
        return 'Hello! You have logged in successfully';
    }

    logout(username, password) {
        if (!this._users.find(u => u.username === username || u.password === password) || this._loggedUsers.indexOf(username) < 0) {
            throw new Error('There is no such user');
        }
        let index = this._loggedUsers.indexOf(username);
        this._loggedUsers.splice(index, 1);
        return 'You have logged out successfully';
    }

    postQuestion(username, question) {
        if (!this._users.find(u => u.username === username) || this._loggedUsers.indexOf(username) < 0) {
            throw new Error('You should be logged in to post questions');
        }
        if (question === '') {
            throw new Error('Invalid question');
        }
        let currentQuestion = {
            username: username,
            id: this._id,
            question: question,
            answers: []
        }
        this._questions.push(currentQuestion);
        this._id++;
        return 'Your question has been posted successfully';
    }

    postAnswer(username, questionId, answer) {
        if (!this._users.find(u => u.username === username) || this._loggedUsers.indexOf(username) < 0) {
            throw new Error('You should be logged in to post answers');
        }
        if (answer === '') {
            throw new Error('Invalid answer');
        }
        let foundQuestion = this._questions.find(q => q.id === questionId);
        if (!foundQuestion) {
            throw new Error('There is no such question');
        }
        let currentAnswer = {
            username: username,
            answer: answer
        };
        foundQuestion.answers.push(currentAnswer);
        return 'Your answer has been posted successfully';
    }

    showQuestions() {
        let output = [];
        this._questions.forEach(question => {
            output.push(`Question ${question.id} by ${question.username}: ${question.question}`);
            question.answers.forEach(answer => {
                output.push(`---${answer.username}: ${answer.answer}`);
            });
        });
        return output.join('\n');
    }
}


class Forum2 {
    constructor() {
        this._users = [];
        this._questions = [];
        this._id = 1;
        this._loggedUsers = [];
    }

    register(username, password, repeatPassword, email) {
        if (username === "" || password === "" ||
            repeatPassword === "" || email === "") {
            throw new Error("Input can not be empty");
        }
        if (password !== repeatPassword) {
            throw new Error("Passwords do not match");
        }
        let user = this._users.filter(u => u.username === username || u.email === email)[0];
        if (!user) {
            let user = {
                username,
                password,
                email
            };
            this._users.push(user);
        } else {
            throw new Error("This user already exists!");
        }
        return `${username} with ${email} was registered successfully!`;
    }

    login(username, password){
        let user = this._users.filter(u => u.username === username)[0];
        if(!user){
            throw new Error("There is no such user");
        }
        if(user.password === password) {
            this._loggedUsers.push(user);
            return "Hello! You have logged in successfully";
        }
    }

    logout(username, password){
        let user = this._users.filter(u => u.username === username)[0];
        if(!user){
            throw new Error("There is no such user");
        }
        if(user.password === password){
            let userIndex = this._users.indexOf(user);
            this._loggedUsers.splice(userIndex, 1);
            return "You have logged out successfully";
        }
    }

    postQuestion(username, question){
        let user = this._users.filter(u => u.username === username)[0];
        let userLoggedIn = this._loggedUsers.includes(user);
        if(!user || !userLoggedIn){
            throw new Error("You should be logged in to post questions");
        }
        if (question === ""){
            throw new Error("Invalid question");
        }
        let currQuestion = {
            id: this._id,
            question: question,
            username: user.username,
            answers: []
        };
        this._id++;
        this._questions.push(currQuestion);
        return `Your question has been posted successfully`;
    }

    postAnswer(username, questionId, answer){
        let user = this._users.filter(u => u.username === username)[0];
        let userLoggedIn = this._loggedUsers.includes(user);
        if(!user || !userLoggedIn){
            throw new Error("You should be logged in to post answers");
        }
        if(answer === ""){
            throw new Error("Invalid answer");
        }
        let currentQuestion = this._questions.filter(q => q.id === questionId)[0];
        if (!currentQuestion) {
            throw new Error("There is no such question");
        }
        let resultAnswer = {
            username: user.username,
            answer: answer
        };
        currentQuestion["answers"].push(resultAnswer);
        return "Your answer has been posted successfully";
    }

    showQuestions(){
        let result = "";
        this._questions.forEach(x => {
            result += `Question ${x.id} by ${x.username}: ${x.question}\n`;
            for (const line in x.answers) {
                let currAnswer = x.answers[line];
                result += `---${currAnswer.username}: ${currAnswer.answer}\n`
            }
        });
        result = result.trim();
        return result;
    }
}

let forum = new Forum();

forum.register('Michael', '123', '123', 'michael@abv.bg');
forum.register('Stoyan', '123ab7', '123ab7', 'some@gmail@.com');
forum.login('Michael', '123');
forum.login('Stoyan', '123ab7');

forum.postQuestion('Michael', "Can I rent a snowboard from your shop?");
forum.postAnswer('Stoyan', 1, "Yes, I have rented one last year.");
forum.postQuestion('Stoyan', "How long are supposed to be the ski for my daughter?");
forum.postAnswer('Michael',2, "How old is she?");
forum.postAnswer('Michael',2, "Tell us how tall she is.");

console.log(forum.showQuestions());

class Forum3 {
    constructor() {
        this._users = [];
        this._questions = [];
        this._id = 1;
    }

    register(username, password, repeatPassword, email) {
        if (!username || !password || !repeatPassword || !email) {
            throw new Error("Input can not be empty");
        }

        if (password !== repeatPassword) {
            throw new Error("Passwords do not match");
        }

        let exists = this._users.find(us => us.username == username || us.email == email);
        if (exists) {
            throw new Error("This user already exists!");
        }

        this._users.push({ username, password, email });
        return `${username} with ${email} was registered successfully!`;
    }

    login(username, password) {
        let user = this._users.find(us => us.username == username);

        if (!user) {
            throw new Error("There is no such user");
        }

        if (user.password !== password) {
            return;
        }
        user.log = true;
        return "Hello! You have logged in successfully";
    }

    logout(username, password) {
        let user = this._users.find(us => us.username == username);

        if (!user) {
            throw new Error("There is no such user");
        }

        if (user.password !== password) {
            return;
        }
        user.log = false;
        return "You have logged out successfully";
    }

    postQuestion(username, question) {
        let user = this._users.find(us => us.username == username);

        if (!user || !user.log) {
            throw new Error("You should be logged in to post questions");
        }

        if (question === '') {
            throw new Error("Invalid question");
        }

        this._questions.push({ id: this._id, username: user.username, question, answers: [] });

        this._id++;

        return "Your question has been posted successfully";
    }

    postAnswer(username, questionId, answer) {
        let responder = this._users.find(us => us.username == username);

        if (!responder || !responder.log) {
            throw new Error("You should be logged in to post answers");
        }

        if (answer === '') {
            throw new Error("Invalid answer");
        }

        let question = this._questions.find(q => q.id == questionId);

        if (!question) {
            throw new Error("There is no such question");
        }

        let currAnswer = { username, content: answer, };
        question.answers.push(currAnswer);

        return "Your answer has been posted successfully";
    }

    showQuestions() {
        let output = '';
        this._questions.forEach(q => {
            output += `Question ${q.id} by ${q.username}: ${q.question}\n`;
            q.answers.forEach(an => {
                output += `---${an.username}: ${an.content}\n`;
            });
        });
        return output.trim();
    }
}