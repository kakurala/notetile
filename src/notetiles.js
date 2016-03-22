(function () {
	
Notetile.prototype.setWrapper =  function(config){ 
 
	 //	console.log("Wrapper div not exists, Hence creating one!!");
	 var wrpEle = null;
	 var wrapper = null
	 if(config !=null && config.position != null){
			 		
				wrapper = window.document.querySelectorAll(".notetile-"+config.position);

		if(wrapper.length > 0 && !this.wrapperExists){
			return wrapper;
		}else{
			wrpEle = document.createElement("div");
			wrpEle.className="notetile notetile-"+config.position;	
			window.document.body.appendChild(wrpEle);
			//  this.wrapperExists = true;
			//  this.wrapperNode = wrapper;
			 wrapper = window.document.querySelectorAll(".notetile-"+config.position);
		 }
	 }else{
		   wrapper = window.document.querySelectorAll(".notetile-top-right");
		 if(wrapper.length > 0 && !this.wrapperExists){
			return wrapper;
		}else{
		 wrpEle = document.createElement("div");
		 wrpEle.className="notetile notetile-top-right";	
		 window.document.body.appendChild(wrpEle);
		   wrapper = window.document.querySelectorAll(".notetile-top-right");
		}
	 }
 	 return wrapper; 
};

Notetile.prototype.createPopup = function(config){
				var popup = document.createElement("div");
				popup.className= (config.type != null) ? "notetile-model notetile-"+config.type : "notetile-model notetile-default";
				var span=document.createElement("span");
				span.className="notetile-content";
				if(config.close != null && config.close){
				var close_ico=document.createElement("a");
					close_ico.className="notetile-close";
				 // add event listner to close icon
					close_ico.addEventListener('click', function(eventObj) {
					 Notetile.prototype.closeNotetile(this.parentNode);
					});
					popup.appendChild(close_ico);
				}
				// Create a textNode and then append : it will prevent executing tags in message text!
				var textNode = document.createTextNode(config.message);
				span.appendChild(textNode);
				
				popup.appendChild(span);
				
				var wrapperref = this.setWrapper(config);
		//		if(this.wrapperExists)
					wrapperref[0].appendChild(popup);
				return popup;
}

Notetile.prototype.createQuickNote = function(text,tileType){
				var popup = document.createElement("div");
				popup.className= (tileType != null && tileType!='') ? "notetile-model notetile-"+tileType : "notetile-model notetile-default";
				var span=document.createElement("span");
				span.className="notetile-content";
				// Create a textNode and then append : it will prevent executing tags in message text!
				var textNode = document.createTextNode(text);
				span.appendChild(textNode);
				popup.appendChild(span);
				var wrapperref = this.setWrapper(null);
			//	if(this.wrapperExists)
					wrapperref[0].appendChild(popup);
				return popup;
}

Notetile.prototype.registerTimer = function(time, popup){
	if(time != null && time > 0){
		setTimeout(function() {
					 Notetile.prototype.closeNotetile(popup);
				}, time*1000);
		}else{
			//console.log("Its a sticky notetile");
		}
		return this;
};

Notetile.prototype.closeNotetile = function(ele){ 
	 ele.style.display = "none";
	 ele.parentNode.removeChild(ele);
	// console.log("Close called!");
 	return this; 
};

 function Notetile () {
		// console.log("Creating Notetile Object!");
		 this.wrapperExists = false;
		 this.wrapperNode = undefined;
		 
	}
 
Notetile.prototype.shownote = function (config) {	 				
				//this.setWrapper(this,config);				
				var popup = this.createPopup(config);
				this.registerTimer(config.time, popup);
				return this; 
	};
	
Notetile.prototype.quicknote = function(message,type,time){		 
				//this.setWrapper(this,null);	
				var popup = this.createQuickNote(message,type);
				this.registerTimer(time, popup);
				return this; 
		}
	
	var notetile = new Notetile();
	window.notetile	= notetile;
     return  notetile;
}(this));
 