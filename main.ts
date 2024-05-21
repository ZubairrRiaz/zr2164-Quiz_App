
import inquirer from 'inquirer'

interface question  {
    question: string;
    choices:string[];
    asnwer: string;
}

const Question:question[] = [
    {
        question: 'Which city is the capital of Pakistan?',
        choices: ['Karachi','Lahore','Islamabad','Pesahawar'],
        asnwer: 'Islamabad'
    },
    {
        question: 'Which is the largest city of Pakistan?',
        choices: ['Karachi','Lahore','Hyderabad','Peshawar'],
        asnwer: 'Karachi',
    },
    {
        question: 'Which city is called a heart of Pakistan?',
        choices: ['Karachi','Lahore','Islamabad','Peshawar'],
        asnwer: 'Lahore',
    },
    {
        question: 'Which city is being called a sports city of Pakistan?',
        choices: ['Karachi','Lahore','Islamabad','Sialkot'],
        asnwer: 'Sialkot',
    }
];

let score = 0;

for(let question of Question){

    let result = await inquirer.prompt([{

         name: 'q',
         choices: question.choices,
         message: question.question,
         type: 'list',
        
        }])

        if(result.q == question.asnwer){
            console.log(`\n${result.q} Is Correct Answer!\n`);

            score++;
            
        }else {
            console.log(`\n${result.q} Is Incorrect!\n`);
            
        }
}

console.log(`Your Score Is ${score} Out Of 4;`);

