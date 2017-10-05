module objects{
    export class Button extends createjs.Bitmap{
         //PRIVATE INSTANCE VARIABLES+++++++++++++++++++++++++++++
        //PUBLIC PROPERTIES++++++++++++++++++++++++++++++++++++++
        //CONSTRUCTORS+++++++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of Button.
         * @param {createjs.LoadQueue} assetManager 
         * @param {string} imageName 
         * @param {number} x 
         * @param {number} y 
         * @param {boolean} isCentered 
         */
        constructor(
            assetManager:createjs.LoadQueue,
            imageName:string,
            x:number,
            y:number,
            isCentered:boolean){
            super(assetManager.getResult(imageName));
            
            if(isCentered){
                this.regX=this.getBounds().width*.5;
                this.regY=this.getBounds().height*.5;
            }
            this.x=x;
            this.y=y;
            //event listener
            this.on("mouseover",this._mouseOver);
            this.on("mouseout",this._mouseOut);
        }
        //PRIVATE METHODS++++++++++++++++++++++++++++++++++++++++
        private _mouseOver(event:createjs.MouseEvent):void{
            this.alpha=0.7;
        }
        private _mouseOut(event:createjs.MouseEvent):void{
            this.alpha=1.0;
        }
        //PUBLIC METHODS+++++++++++++++++++++++++++++++++++++++++
    }
}