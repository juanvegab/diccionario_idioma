'use strict';

/**
 * @ngdoc function
 * @name vocabularioIdiomaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the vocabularioIdiomaApp
 */
angular.module('vocabularioIdiomaApp').controller('MainCtrl', function (Ref, $firebaseArray) {
	this.words = $firebaseArray(Ref.child('words'));
	this.languages = $firebaseArray(Ref.child('languages'));
	this.currentLanguage = 0;
	this.wordToAdd = {word:'', hint:'', example:'', imageURL:'', language:this.currentLanguage};
	
	this.addWord = function() {
		if(this.wordToAdd) {
			this.words.$add(this.wordToAdd);
			this.wordToAdd = {word:'', hint:'', example:'', imageURL:'', language:this.currentLanguage};
		}
	};
});
