/*
Student Name: Filip Kufalov
File Name: script.js
Date: 4/14/2022
*/

// Global Variables
var video = document.getElementById("example");
var videoSource = document.getElementById("vid-src");
var descriptionSource = document.getElementById("despsrc");

// Function to resize all videos in example div
video.style.width = "500px";
video.style.height = "300px";

// Function to display the burpee video
function burpee() {
    videoSource.src = "./media/burpees.mp4";
    // descriptionSource.src = "media/burpedescriptions.vtt"; 
    video.style.display = "block";
    video.load();
}

// Function to display plank video
function plank() {
    videoSource.src = "./media/plank.mp4";
    // descriptionSource.src = "media/plankdescriptions.vtt"; 
    video.style.display = "block";
    video.load();
}

// Function to display climbers
function climbers() {
    videoSource.src = "./media/climbers.mp4";
    // descriptionSource.src = "media/climbersdescriptions.vtt"; 
    video.style.display = "block";
    video.load();
}