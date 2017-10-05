(function(){
    
    let stage:createjs.Stage;
    let canvas:HTMLElement;
    let helloLabel:objects.Label;
    let clickButton:objects.Button;
   
    let assetManager:createjs.LoadQueue;
    let assetManifest=[
        {id: "clickmebtn", src:"../../Assets/images/clickmebtn.png"}

    ];
    function Init(){
        assetManager = new createjs.LoadQueue();
        assetManager.installPlugin(createjs.Sound);
        assetManager.on("complete", Start);
        assetManager.loadManifest(assetManifest);
    }

    function Start(){
       
        canvas=document.getElementById("canvas");
        stage=new createjs.Stage(canvas);
        stage.enableMouseOver(20);
        createjs.Ticker.framerate=60;
        createjs.Ticker.on("tick",Update);
        Main();
    }
    
    function Update(){
     
    
        stage.update();
    }
    
    function Main(){
        console.log("Game Started..");
        helloLabel=new objects.Label("Hello World","40px","Consolas","#000000",320,240,true);
        stage.addChild(helloLabel);
        clickButton=new objects.Button(assetManager,"clickmebtn",320,340,true);
        stage.addChild(clickButton);

        clickButton.on("click",function(){
            helloLabel.TextString="GoodBye Cruel World";
        })
    }

    window.onload=Init;


})();