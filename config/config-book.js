//  ------------------------------------------------------------------
//  book.js
//
//  Copyright 2012 PBS KIDS Interactive. All Rights Reserved.

PBS.KIDS.storybook.config = {
	background: {
		color: "#ababab",
		//url: "images/bg_title_page.png"
	},	
	audio: {		
		enabled: true,
		path: "audio/",
		name: "story"	
		
	},
	book: {
		font: "Georgia",
		startOnPage: 0,
		pageWidth: 768,
		pageHeight: 1024,		
			previousPageButton: {
			url: "images/prev-page-button.png",
			//horizontalAlign: "LEFT",
			x: 1,
			y: 50,
			width: "55px",
			height: "62px"
		},
		nextPageButton: {
			url: "images/next-page-button.png",
			horizontalAlign: "RIGHT",
			x: 1,
			y: 50,
			width: "55px",
			height: "62px"
		},
		readButton:{
			url: "images/button_read.png",
			horizontalAlign: "LEFT",
			x: 2,
			y: 20,
			width: "100px",
			height:"50px"
			
		},
		
		readMyselfButton:{
			url: "images/button_readMyself.png",
			horizontalAlign: "LEFT",
			x: 2,
			y:60,
			width: "100px",
			height:"50px"
			
		},
		
		pageBackground: {
			color: "#fefefe"
		},
		oddPageBackground: {
			color: "#fdfdfd"
		},
		evenPageBackground: {
			color: "#f9f9f9"
		},
		pageTurnDuration: 500,
		pageSlideDuration: 200
	},
	cover: {
		background: {
			url: "images/bg_title_page.png",
			
		},
		content: []				
	},
 	pages: []
};