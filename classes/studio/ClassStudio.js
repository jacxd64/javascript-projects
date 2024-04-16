//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.

class CrewCandidate {
    constructor(name, mass, scores) {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }
    addScore(newScore) {
        this.scores.push(newScore);
    }

    average() {
        let total = 0;
        for (let i = 0; i < this.scores.length; i++) {
            total += this.scores[i]
        }
        return Math.round(10 * (total / this.scores.length)) / 10;
    }

    status() {
        if (this.average() >= 90) {
            return 'Accepted';
        } else if (this.average() >= 80) {
            return 'Reserve';
        } else if (this.average() >= 70) {
            return 'Probationary';
        } else {
            return 'Rejected';
        }
    }
}

cand1 = new CrewCandidate('Bubba Bear', 135, [88, 85, 90]);
cand2 = new CrewCandidate('Merry Maltese', 1.5, [93, 88, 97]);
cand3 = new CrewCandidate('Glad Gator', 225, [75, 78, 62]);

//console.log(`${cand1.name} earned an average test score of ${cand1.average()}% and has a status of ${cand1.status()}.`)

//console.log(`${cand2.name} earned an average test score of ${cand2.average()}% and has a status of ${cand2.status()}.`)

//console.log(`${cand3.name} earned an average test score of ${cand3.average()}% and has a status of ${cand3.status()}.`)
//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.
while(cand3.average() < 80) {
    console.log(cand3.status())
    console.log(cand3.average())
    cand3.addScore(85);
};
console.log(cand3.status())