 const topics = [
      { title: "Introduction to the Course", duration: "10 min", video: "https://www.youtube.com/embed/dQw4w9WgXcQ", description: "Overview of what you will learn in this course and how to get the most out of it.",image: "279c7b0a-3b5e-43c5-80ea-a1fa39ad5f07.png", completed: false },
      { title: "Getting Started with Tools", duration: "15 min", video: "https://www.youtube.com/embed/dQw4w9WgXcQ", description: "Learn how to set up and use the tools required.",image: "279c7b0a-3b5e-43c5-80ea-a1fa39ad5f07.png", completed: false },
      { title: "Core Concepts", duration: "20 min", video: "https://www.youtube.com/embed/dQw4w9WgXcQ", description: "Understand the essential concepts you'll need.",image: "279c7b0a-3b5e-43c5-80ea-a1fa39ad5f07.png", completed: false },
      { title: "Advanced Techniques", duration: "25 min", video: "https://www.youtube.com/embed/dQw4w9WgXcQ", description: "Dive into advanced applications and techniques.",image: "279c7b0a-3b5e-43c5-80ea-a1fa39ad5f07.png", completed: false },
    ];
    const topicImage = document.getElementById('topicImage')
    const topicList = document.getElementById("topicList");
    const progress = document.getElementById("progress");
    const defaultView = document.getElementById("defaultView");
    const videoView = document.getElementById("videoView");
    const videoFrame = document.getElementById("videoFrame");
    const topicTitle = document.getElementById("topicTitle");
    const topicDescription = document.getElementById("topicDescription");
    const completeBtn = document.getElementById("completeBtn");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    let currentTopicIndex = null;

    function renderTopics() {
      topicList.innerHTML = "";
      topics.forEach((topic, index) => {
        const li = document.createElement("li");
        li.className = "topic";
        if (index === currentTopicIndex) li.classList.add("active");
        if (topic.completed) li.classList.add("completed");
        li.textContent = `${index + 1}. ${topic.title} (${topic.duration})`;
        li.onclick = () => selectTopic(index);
        topicList.appendChild(li);
      });
      const completedCount = topics.filter(t => t.completed).length;
      progress.textContent = `${completedCount}/${topics.length} completed`;
    }

    function selectTopic(index) {
      currentTopicIndex = index;
      const topic = topics[index];
      defaultView.style.display = "none";
      videoView.style.display = "flex";
      videoFrame.src = topic.video;
      topicTitle.textContent = topic.title;
      topicDescription.textContent = topic.description;
      completeBtn.textContent = topic.completed ? "Completed" : "Mark as Complete";
      completeBtn.classList.toggle("completed", topic.completed);
      topicImage.src = `/mnt/data/${topic.image}`
      renderTopics();
    }

    completeBtn.onclick = () => {
      if (currentTopicIndex !== null) {
        topics[currentTopicIndex].completed = true;
        completeBtn.textContent = "Completed";
        completeBtn.classList.add("completed");
        renderTopics();
      }
    };

    prevBtn.onclick = () => {
      if (currentTopicIndex > 0) selectTopic(currentTopicIndex - 1);
    };

    nextBtn.onclick = () => {
      if (currentTopicIndex < topics.length - 1) selectTopic(currentTopicIndex + 1);
    };

    renderTopics();