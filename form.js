class Form{
    constructor(){

    }
    display(){
        var heading = createElement('h1');
        heading.html("Helping the poor");
        heading.position(100,50);

        var box1 = createInput("Name");
        box1.position(100,160);

        var box2 = createInput("Email");
        box2.position(100,200);

        var submit = createButton('Submit');
        submit.position(100,240);

        var message = createElement('h1');
        var message1 = createElement('h4');

        submit.mousePressed(function(){
            box1.hide();
            box2.hide();
            submit.hide();

            var name = box1.value();
            var email = box2.value();
          
            message.html("thank you, " + name + ".");
            message.position(400,300);
            message1.html("your email is registered("+email+")");
            message1.position(400,400);
        })

    }
}