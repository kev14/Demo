// JavaScript Document
//  ------------------------------------------------------------------
//  
//
//  Copyright 2012 PBS KIDS Interactive. All Rights Reserved.

PBS.KIDS.storybook.config.pages.push({
	background:{
		url: "images/bg_pg03.png"
		
	},
	sound: {
		startTime: 16,
		endTime: 22,
		loop: false
	},	
	
	content: [	
		{
		
	type: "Sprite",
			x: 26,
			y: 40,			
			url: "images/pg02_cat.png",
			sound:{
				startTime: 89,
				endTime: 91				
			},
				
			
		},
		{	
		type: "TextArea",
			x: 50,
			y: 30,
			width: 80,
			align: "left",
			color: "#222222",
			size: 28,
			font: "Droid Serif",
			text: "<font='Reenie Beanie'><size=6>A</size>scratch at the door.Hello kitty cat!Lets go build a snowman.Complete with a hat!.</font>."
			
		},	
	]
	
});