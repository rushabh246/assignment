function startQuiz(){
    $('#start1').hide();
    $('#nextbtn').append(
        $(document.createElement('button')).prop({
            type: 'button',
            id:'next',
            innerHTML: 'Next',
            class: 'btn btn-primary'
        })
    );
    var questions = [
        {
            q:"What is national animal of INDIA ?",
            options: ['Lion','Elephant','Tiger','Monkey'],
            ans:2
        },
        {
            q:"In which year India got independence?",
            options: [1951,1947,1948,1949],
            ans:1
        },
        {
            q:"Who is declared as national bird of India ?",
            options: ['Pigeon','Kite','Eagle','Peacock'],
            ans:4
        },
        
    ];
    var questionCounter = 0;
    var selection = [];
    var quiz = $('#quiz');
    displayNext();
    $('#next').on('click',function(e){
        e.preventDefault();
        if(quiz.is(':animated')){
            return false;
        }
        choose();
        if(isNaN(selection[questionCounter])){
            alert('Select Any Option To Go Ahead');
        }
        else{
            questionCounter++;
            displayNext();
        }
    });
    $('#start').on('click',function(e){
        e.preventDefault();
        if(quiz.is(':animated')){
            return false;
        }
        questionCounter = 0;
        selection = [];
        displayNext();
        $('#start').hide();
    });
    function createQuestion(index){
        var qElement = $('<div>',{
            id : 'question'
        });
        var header = $('<h2> Question ' + (index + 1) + ':</h2>');
        qElement.append(header);
        var question = $('<p>').append(questions[index].q);
        qElement.append(question);
        var radioButtons = createRadio(index);
        qElement.append(radioButtons);
        return qElement;
    }
    function createRadio(index){
        var radioList = $('<ul>');
        var item;
        var input = '';
        for(var i=0;i<questions[index].options.length;i++){
            item=$('<li>');
            input = '<input type="radio" name="answer" value=' + i + ' />';
            input += questions[index].options[i];
            item.append(input);
            radioList.append(item);
        }
        return radioList;
    }
    function choose(){
        selection[questionCounter] = +$('input[name="answer"]:checked').val();
    }
    function displayNext(){
        quiz.fadeOut(function(){
            $('#question').remove();
            if(questionCounter < questions.length){
                var nextQuestion = createQuestion(questionCounter);
                quiz.append(nextQuestion).fadeIn();
                if(!(isNaN(selection[questionCounter]))){
                    $('input[value='+selection[questionCounter]+']').prop('checked',true);
                }
                if(questionCounter === 0){
                    $('#next').show();
                }
            }
            else{
                var scoreElement = displayScore();
                quiz.append(scoreElement).fadeIn();
                $('#next').hide();
                $('#start').show();
            }
        });
    }
    function displayScore(){
        var score = $('<p>',{id:'question'});
        var numCorrect = 0;
        for(var i=0;i<selection.length;i++){
            if(selection[i] === questions[i].ans){
                numCorrect++;
            }
        }
        score.append('Your Result : '+numCorrect+' / '+ questions.length);
        return score;
    }
};