//  const topics = [
//       { title: "Introduction to the Course", duration: "10 min", video: "/assets/video/Rick Astley - Never Gonna Give You Up (Official Music Video).mp4", description: "Overview of what you will learn in this course and how to get the most out of it.",image: "279c7b0a-3b5e-43c5-80ea-a1fa39ad5f07.png", completed: false },
//       { title: "Getting Started with Tools", duration: "15 min", video: "/assets/video/Rick Astley - Never Gonna Give You Up (Official Music Video).mp4", description: "Learn how to set up and use the tools required.",image: "279c7b0a-3b5e-43c5-80ea-a1fa39ad5f07.png", completed: false },
//       { title: "Core Concepts", duration: "20 min", video: "/assets/video/Rick Astley - Never Gonna Give You Up (Official Music Video).mp4", description: "Understand the essential concepts you'll need.",image: "279c7b0a-3b5e-43c5-80ea-a1fa39ad5f07.png", completed: false },
//       { title: "Advanced Techniques", duration: "25 min", video: "/assets/video/Rick Astley - Never Gonna Give You Up (Official Music Video).mp4", description: "Dive into advanced applications and techniques.",image: "279c7b0a-3b5e-43c5-80ea-a1fa39ad5f07.png", completed: false },
//     ];
//     const topicImage = document.getElementById('topicImage')
//     const topicList = document.getElementById("topicList");
//     const progress = document.getElementById("progress");
//     const defaultView = document.getElementById("defaultView");
//     const videoView = document.getElementById("videoView");
//     const videoFrame = document.getElementById("videoFrame");
//     const topicTitle = document.getElementById("topicTitle");
//     const topicDescription = document.getElementById("topicDescription");
//     const completeBtn = document.getElementById("completeBtn");
//     const prevBtn = document.getElementById("prevBtn");
//     const nextBtn = document.getElementById("nextBtn");

//     let currentTopicIndex = null;

//     function renderTopics() {
//       topicList.innerHTML = "";
//       topics.forEach((topic, index) => {
//         const li = document.createElement("li");
        
//         li.className = "topic";
//         if (index === currentTopicIndex) li.classList.add("active");
//         if (topic.completed) li.classList.add("completed");
//         li.innerHTML = `${index + 1}.
//         <div class="duration"> 
//         <div>${topic.title}</div> 
//         <div class="d-t">${topic.duration}</div>
//         </div>`;
        
//         li.onclick = () => selectTopic(index);
//         topicList.appendChild(li);
//       });
//       const completedCount = topics.filter(t => t.completed).length;
//       progress.textContent = `${completedCount}/${topics.length} completed`;
//     }

//     function selectTopic(index) {
//       currentTopicIndex = index;
//       const topic = topics[index];
//       defaultView.style.display = "none";
//       videoView.style.display = "flex";
//       videoFrame.src = topic.video;
//       topicTitle.textContent = topic.title;
//       topicDescription.textContent = topic.description;
//       completeBtn.textContent = topic.completed ? "Completed" : "Mark as Complete";
//       completeBtn.classList.toggle("completed", topic.completed);
//       topicImage.src = `/mnt/data/${topic.image}`
//       renderTopics();
//       document.querySelectorAll('.topic-item').forEach(item => {
//     item.classList.remove('active');
//   });

//   // Agregar clase 'active' al tema actual
//   document.querySelectorAll('.topic-item')[index].classList.add('active');
//     }


//     completeBtn.onclick = () => {
//       if (currentTopicIndex !== null) {
//         const topic = topics[currentTopicIndex]
//         topic.completed = !topic.completed
//         completeBtn.textContent=topic.completed ? "Completed" :"Mark as Completed"
//         completeBtn.classList.toggle("completed", topic.)
        
//         renderTopics();
//       }
//     };
    

//     prevBtn.onclick = () => {
//       if (currentTopicIndex > 0) selectTopic(currentTopicIndex - 1);
//     };

//     nextBtn.onclick = () => {
//       if (currentTopicIndex < topics.length - 1) selectTopic(currentTopicIndex + 1);
//     };

//     renderTopics();