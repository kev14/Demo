//---------------------------------------------------------------------------
PBS.KIDS.storybook.config.pages.push({
	
		background: {
			url: "images/bg_pg05.png"		
	},
		sound: {
		startTime: 25,
		endTime: 33,
		loop: false
	},
	
	content: [
	{
	type: "Sprite",
			x: 10,
			y: 40,
			//numFrames: 20,
			//frameDelay: 6,
			//toggleOnPress: true,
		  //autoStart: true,
			//easing: "easeIn",
			//loop: true,
			url: "images/snowfall01.png"
		},		
		{
	type: "Sprite",
			x: 35,
			y: 16,
			numFrames: 10,
			easing: "easeOut",
			frameDelay: 10,
			
			//toggleOnPress: true,
			autoStart: true,
			loop: true,
			url: "images/snowfall02.png"
		},	
		{
	type: "Sprite",
			x: 60,
			y: 50,
			//numFrames: 20,
			//frameDelay: 6,
			//toggleOnPress: true,
			//autoStart: true,
			//loop: true,
			url: "images/snowfall03.png"
		},	
		
		{	
		type: "TextArea",
			x: 70,
			y: 30,
			width: 80,
			align: "left",
			color: "#222222",
			size: 28,
			font: "Droid Serif",
			text: "<font='Reenie Beanie'><size=6>T</size>he two head outside with glee in their hearts <br />Build the tallest snowman you'll find 'round these parts .</font>."
			
		},			
	
	]					
	
});

PBS.KIDS.storybook.config.pages.push({
	
		background: {
			url: "images/bg_pg06.png"		
	},
	
	content: [
	{
	type: "Sprite",
			x: 2,
			y: 40,
			//numFrames: 20,
			//frameDelay: 6,
			//toggleOnPress: true,
			//autoStart: true,
			//loop: true,
			url: "images/pg03_kid_cat.png"
		},		
	]					
	
});