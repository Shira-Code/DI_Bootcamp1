// Daily challenge : Creating Objects
// Last Updated: September 22nd, 2023

// What You will learn :
// Create Objects


// Instructions
// In this exercise, you will use object oriented programming concepts to define and use a custom object in JavaScript.

// Create a class named Video. The class should be constructed with the following parameters:
// title (a string)
// uploader (a string, the person who uploaded it)
// time (a number, the duration of the video - in seconds)
// Create a method called watch() which displays a string as follows:
// “uploader parameter watched all time parameter of title parameter!”
// Instantiate a new Video instance and call the watch() method.
// Instantiate a second Video instance with different values.
// Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
// Think of the best data structure to save this information within the array.
// Bonus: Loop through the array to instantiate those instances.

class Video {
    constructor(title, uploader, time) {
      this.title = title;
      this.uploader = uploader;
      this.time = time;
    }
  
    watch() {
      console.log(`${this.uploader} watched all ${this.time} seconds of "${this.title}"!`);
    }
  }

  const video1 = new Video('JavaScript Tutorial', 'Alice', 300);
video1.watch(); 


const video2 = new Video('Python Basics', 'Bob', 450);
video2.watch(); 


const videoData = [
    { title: 'React for Beginners', uploader: 'Charlie', time: 600 },
    { title: 'CSS Grid Layout', uploader: 'Dave', time: 500 },
    { title: 'HTML5 Basics', uploader: 'Eve', time: 400 },
    { title: 'Node.js Introduction', uploader: 'Frank', time: 700 },
    { title: 'Responsive Web Design', uploader: 'Grace', time: 650 }
  ];

  const videos = [];

videoData.forEach(data => {
  const video = new Video(data.title, data.uploader, data.time);
  videos.push(video);
  video.watch();
});



